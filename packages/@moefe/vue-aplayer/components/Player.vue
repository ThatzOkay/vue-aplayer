<template>
    <div class="aplayer-body">
        <Cover @click="handleTogglePlay">
            <div :class="'aplayer-button aplayer-' + playIcon">
                <Icon :type="playIcon" />
            </div>
        </Cover>
        <Main>
            <Controller @skipBack="handleSkipBackward"
            @skipForward="handleSkipForward"
            @togglePlay="handleTogglePlay"
            @toggleOrderMode="handleToggleOrderMode"
            @toggleLoopMode="handleToggleLoopMode"
            @togglePlaylist="handleTogglePlaylist"
            @toggleLyric="handleToggleLyric"
            @changeVolume="handleChangeVolume"
            @changeProgress="handleChangeProgress"
             />
        </Main>
        <div class="aplayer-notice" :style="{opacity: notice?.opacity}">
            {{ notice?.text }}
        </div>
        <div class="aplayer-miniswitcher" @click="handleMiniSwitcher">
            <Button type="miniswitcher" icon="right" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, provide, computed, type Ref, type ComputedRef} from 'vue';
import Cover from './Cover.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import Main from './Main.vue';
import Controller from './Controller.vue';
import type { Options } from 'types/options';

export interface Notice {
  text: string;
  time: number;
  opacity: number;
}

interface PlayerProps {
  notice?: Notice;
}


defineProps<PlayerProps>();

const aplayer = inject<Options & {
    options: APlayer.InstallOptions;
    currentTheme: Ref<string>;
    currentMusic: Ref<APlayer.Audio>;
    media: ComputedRef<APlayer.Media>;
}>('aplayer')!;

const playIcon = computed(() => aplayer?.media.value.paused ? 'play' : 'pause');

const emit = defineEmits([
    'togglePlay',
    'skipBackward',
    'skipForward',
    'toggleOrderMode',
    'toggleLoopMode',
    'togglePlaylist',
    'toggleLyric',
    'changeVolume',
    'changeProgress',
    'miniSwitcher']);

const handleTogglePlay = () => {
    emit('togglePlay');
};

const handleSkipBackward = () => {
    emit('skipBackward');
};

const handleSkipForward = () => {
    emit('skipForward');
};

const handleToggleOrderMode = () => {
    emit('toggleOrderMode');
};

const handleToggleLoopMode = () => {
    emit('toggleLoopMode');
};

const handleTogglePlaylist = () => {
    emit('togglePlaylist');
};

const handleToggleLyric = () => {
    emit('toggleLyric');
};

const handleChangeVolume = (volume: number) => {
    emit('changeVolume', volume);
};

const handleChangeProgress = (e: MouseEvent | TouchEvent, percent: number) => {
    emit('changeProgress',  e, percent);
};

const handleMiniSwitcher = () => {
    emit('miniSwitcher');
};

provide('handleTogglePlay', handleTogglePlay);
provide('handleSkipBackward', handleSkipBackward);
provide('handleSkipForward', handleSkipForward);
provide('handleToggleOrderMode', handleToggleOrderMode);
provide('handleToggleLoopMode', handleToggleLoopMode);
provide('handleTogglePlaylist', handleTogglePlaylist);
provide('handleToggleLyric', handleToggleLyric);
provide('handleChangeVolume', handleChangeVolume);
provide('handleChangeProgress', handleChangeProgress);
provide('handleMiniSwitcher', handleMiniSwitcher);

</script>
