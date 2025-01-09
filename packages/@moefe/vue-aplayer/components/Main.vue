<template>
    <div class="aplayer-info">
        <div class="aplayer-music">
            <span class="aplayer-title">{{ music.name }}</span>
            <span class="aplayer-author"> - {{ music.artist }}</span>
        </div>
        <Lyric v-if="!aplayer.fixed" :visible="aplayer.lyricVisible.value" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import Lyric from './Lyric.vue';
import type { Options } from 'types/options';
import { inject, computed, type Ref } from 'vue';

const aplayer = inject<Options & {
    options: APlayer.InstallOptions;
    currentTheme: Ref<string>;
    currentMusic: Ref<APlayer.Audio>;
    media: Ref<APlayer.Media>;
    lyricVisible: Ref<boolean>;
}>('aplayer')!;

const music = computed(() => {
    return {
        name: aplayer.currentMusic.value.name,
        artist: aplayer.currentMusic.value.artist
    }
})

</script>
