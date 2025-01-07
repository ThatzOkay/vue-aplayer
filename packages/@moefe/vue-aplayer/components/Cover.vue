<template>
    <div class="aplayer-pic" :style="style" @click="handleClick">
      <slot></slot>
    </div>
</template>

<script setup lang="ts">
import type { Options } from 'types/options';
import { inject, computed, type Ref } from 'vue';


const aplayer = inject<Options & {
    options: APlayer.InstallOptions;
    currentTheme: string;
    currentMusic: Ref<APlayer.Audio>;
  }>('aplayer')!;

const cover = computed(() => {
  return aplayer.currentMusic && aplayer.currentMusic.value.cover || aplayer.options.defaultCover;
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
