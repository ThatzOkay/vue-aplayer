<template>
  <VueTouch
    class="aplayer-bar-wrap"
    @on-pan-move="handleChange"
    @on-pan-end="handleChange"
  >
    <div ref="progressBar" class="aplayer-bar">
      <div class="aplayer-loaded" :style="loadedStyle"></div>
      <div class="aplayer-played" :style="playedStyle">
        <span class="aplayer-thumb" :style="style">
          <span class="aplayer-loading-icon">
            <Loading />
          </span>
        </span>
      </div>
    </div>
  </VueTouch>
</template>

<script setup lang="ts">
import VueTouch from '@/vue-touch/VueTouch.vue';
import type { Options } from '@/types';
import { inject, ref, computed, type Ref } from 'vue';
import Loading from './icons/Loading.vue';

const progressBar = ref<HTMLElement | null>(null);

const aplayer = inject<
  Options & {
    currentTheme: Ref<string>;
    currentPlayed: Ref<number>;
    currentLoaded: Ref<number>;
  }
>('aplayer')!;

const style = computed(() => ({
  backgroundColor: aplayer.currentTheme.value,
}));

const loadedStyle = computed(() => ({
  width: `${aplayer.currentLoaded.value * 100}%`,
}));

const playedStyle = computed(() => ({
  width: `${aplayer.currentPlayed.value * 100}%`,
  backgroundColor: aplayer.currentTheme.value,
}));

const handleChangeProgress = inject('handleChangeProgress') as (
  e: MouseEvent | TouchEvent,
  percent: number
) => void;

const handleChange = (e: MouseEvent | TouchEvent) => {
  if (!progressBar.value) {
    return;
  }

  const targetLeft = progressBar.value.getBoundingClientRect().left;
  const clientX = !e.type.startsWith('touch')
    ? (e as MouseEvent).clientX
    : (e as TouchEvent).changedTouches[0].clientX;
  const offsetLeft = clientX - targetLeft;
  let percent = offsetLeft / progressBar.value.offsetWidth;
  percent = Math.min(percent, 1);
  percent = Math.max(percent, 0);
  handleChangeProgress(e, percent);
};
</script>
