<template>
    <div class="aplayer-info">
        <div class="aplayer-music">
            <span class="aplayer-title">{{ music.name }}</span>
            <span class="aplayer-author"> - {{ music.artist }}</span>
        </div>
        <Lyric v-if="!aplayer.fixed" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import Lyric from './Lyric.vue';
import type { Options } from 'types/options';
import { inject, ref } from 'vue';

const aplayer = inject<Options & {
    options: APlayer.InstallOptions;
    currentTheme: string;
    currentMusic: APlayer.Audio;
    media: APlayer.Media;
}>('aplayer')!;

const music = ref({
    name: aplayer.currentMusic.name,
    artist: aplayer.currentMusic.artist,
})
</script>