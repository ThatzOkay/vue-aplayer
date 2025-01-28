<template>
  <div class="aplayer-info">
    <div class="aplayer-music">
      <span class="aplayer-title">{{ music.name }}</span>
      <span class="aplayer-author"> - {{ music.artist }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Audio, InstallOptions, Media, Options } from '@/types';;
import { inject, computed, type Ref } from 'vue';

const aplayer = inject<
  Options & {
    options: InstallOptions;
    currentTheme: Ref<string>;
    currentMusic: Ref<Audio>;
    media: Ref<Media>;
    lyricVisible: Ref<boolean>;
  }
>('aplayer')!;

const music = computed(() => {
  return {
    name: aplayer.currentMusic.value.name,
    artist: aplayer.currentMusic.value.artist,
  };
});
</script>
