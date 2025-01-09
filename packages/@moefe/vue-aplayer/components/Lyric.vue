<template>
    <div :class="classNames({
        'aplayer-lrc': true,
        'aplayer-lrc-hide': !visible,
    })">
        <div class="aplayer-lrc-contents" :style="style">
            <p v-if="parsed().length > 0" v-for="(item) in parsed()"
                v-bind:key="item.time" :class="classNames({
                    'aplayer-lrc-current': item.time === current.time,
                })">
                {{ item.text }}
            </p>
            <p v-else>{{ noLyrics() }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import classNames from 'classnames';
import { computed, watch, type Ref } from 'vue';
import type { Options } from 'types/options';
import { inject, ref } from 'vue';

interface LRC {
    time: number;
    text: string;
}

interface LyricProps {
    visible?: boolean;
}

defineProps<LyricProps>();

const aplayer = inject<Options & {
    options: APlayer.InstallOptions;
    currentTheme: Ref<string>;
    currentPlayed: Ref<number>;
    currentMusic: Ref<APlayer.Audio>;
    media: Ref<APlayer.Media>;
    lrcType: Ref<number>;
}>('aplayer')!;

const lrc = ref<string>('');

const xhr = ref(new XMLHttpRequest());
const isLoading = ref(false);

const noLyrics = () => {
    return !aplayer.currentMusic.value.id ?
        '(ಥ﹏ಥ) No audio loaded' : isLoading.value ?
            '(☆ω☆) Loading...' : lrc.value ?
                '(・∀・*) Sorry, this lyric format is not supported' :
                '(,,•́ . •̀,,) Sorry, no lyrics available for this song';
}

const parseLRC = (lrc: string): Array<LRC> => {
    const reg = /\[(\d+):(\d+)[.|:](\d+)\](.+)/;
    const regTime = /\[(\d+):(\d+)[.|:](\d+)\]/g;
    const regCompatible = /\[(\d+):(\d+)]()(.+)/;
    const regTimeCompatible = /\[(\d+):(\d+)]/g;
    const regOffset = /\[offset:\s*(-?\d+)\]/;
    const offsetMatch = lrc.match(regOffset);
    const offset = offsetMatch ? Number(offsetMatch[1]) : 0;
    const parsed: Array<LRC> = [];

    const matchAll = (line: string) => {
        const match = line.match(reg) || line.match(regCompatible);
        if (!match || match.length !== 5) return;
        const minutes = Number(match[1]) || 0;
        const seconds = Number(match[2]) || 0;
        const milliseconds = Number(match[3]) || 0;

        const time = minutes * 60 * 1000 + seconds * 1000 + milliseconds + offset; // eslint-disable-line no-mixed-operators
        const text = (match[4] as string)
            .replace(regTime, '')
            .replace(regTimeCompatible, '');

        // Optimization: Do not display empty lines
        if (!text) return;
        parsed.push({ time, text });
        matchAll(match[4]); // Recursively match multiple time tags
    };

    lrc
        .replace(/\\n/g, '\n')
        .split('\n')
        .forEach(line => matchAll(line));

    if (parsed.length > 0) {
        parsed.sort((a, b) => a.time - b.time);
    }

    if(lrc === '') {
        parsed.push({ time: 0, text: noLyrics() });
    } else {
      lrc
        .replace(/\\n/g, '\n')
        .split('\n').forEach(line => parsed.push({ time: 0, text: line }));
    }

    return parsed.length > 0 ? parsed : [{ time: 0, text: lrc !== '' ? lrc : noLyrics() }];
}

const getLyricFromCurrentMusic = (): Promise<string> => {
    return new Promise<string>((resolve: (value: string | PromiseLike<string>) => void, reject: (reason?: any) => void) => {
        const { lrcType, currentMusic } = aplayer;
        if(aplayer.lrcType === undefined) {
            resolve('');
            return;
        }

        switch (aplayer.lrcType) {
            case 0:
                resolve('');
                break;
            case 1:
                resolve(aplayer.currentMusic.value.lrc ?? '');
                break;
            case 3:
                if (currentMusic.value.lrc) {
                    xhr.value.open('GET', currentMusic.value.lrc, true);
                    xhr.value.onreadystatechange = () => {
                        if (xhr.value.readyState === 4 && xhr.value.status === 200) {
                            resolve(xhr.value.responseText);
                        } else if (xhr.value.readyState === 4) {
                            reject(new Error('Failed to load lyrics'));
                        }
                    };
                    xhr.value.send();
                } else {
                    resolve('');
                }
                break;
            default:
                reject(new Error(`Illegal lrcType: ${lrcType}`));
                break;
        }
    });
}

const parsed = () => {
    return parseLRC(lrc.value);
}

const current = computed(() => {
    const match = parsed().filter(
        x => x.time < aplayer.currentPlayed.value * aplayer.media.value.duration * 1000,)
    if (match && match.length > 0) return match[match.length - 1];
    return parsed()[0];
})

const transitionDuration = ref(parsed().length > 1 ? 500 : 0);
const translateY = computed(() => {
    if (parsed().length <= 0) return 0;
    const index = parsed().indexOf(current.value)
    const isLast = index === parsed().length - 1;
    return (isLast ? (index - 1) * 16 : index * 16) * -1;
})

const style = computed(() => ({
    transform: `${transitionDuration}`,
    transition: `translate3d(0, ${translateY}px, 0)`,
}));

const handleChange = async () => {
    try {
        isLoading.value = true;
        lrc.value = '';
        lrc.value = await getLyricFromCurrentMusic();
    } finally {
        isLoading.value = false;
    }
}

watch(() => aplayer.lrcType, handleChange, { immediate: true });
watch(() => aplayer.currentMusic.value.lrc, handleChange, { immediate: true });
</script>
