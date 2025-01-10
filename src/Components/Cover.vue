<template>
  <div class="aplayer-pic" :style="style" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Audio, InstallOptions, Options } from '@/types/aplayer';
import { inject, computed, type Ref } from 'vue';

const aplayer = inject<
  Options & {
    options: InstallOptions;
    currentTheme: string;
    currentMusic: Ref<Audio>;
  }
>('aplayer')!;

const cover = computed(() => {
  return (
    (aplayer.currentMusic && aplayer.currentMusic.value.cover) ||
    aplayer.options.defaultCover
  );
});
const style = computed(() => ({
  backgroundImage: `url(${cover.value})`,
  backgroundColor: aplayer?.currentTheme,
}));

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
