<template>
  <div class="aplayer-pic" :style="style" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Audio, InstallOptions, Options } from '../types';
import { inject, computed, type Ref } from 'vue';

const aplayer = inject<
  Options & {
    options: InstallOptions;
    currentTheme: Ref<string>;
    currentMusic: Ref<Audio>;
  }
>('aplayer')!;

const cover = computed(() => {
  return (
    (aplayer.currentMusic && aplayer.currentMusic.value.cover) ||
    aplayer.options.defaultCover
  );
});

const style = computed(() => `background-image: url(${cover.value});` + (aplayer.disableTheming ? '' : `background-color: ${aplayer.currentTheme.value};`));

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
