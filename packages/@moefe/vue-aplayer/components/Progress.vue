<template>
  <VueTouch class="aplayer-bar-wrap" @on-pan-move="handleChange" @on-pan-end="handleChange">
    <div ref="progressBar" class="aplayer-bar">
      <div class="aplayer-loaded" :style="{
        width: `${aplayer.currentLoaded * 100}%`,
      }">
      </div>
      <div class="aplayer-played" :style="{
        width: `${aplayer.currentPlayed * 100}%`,
        backgroundColor: aplayer.currentTheme,
      }">
        <span class="aplayer-thumb" :style="{
          backgroundColor: aplayer.currentTheme,
        }">
          <span class="aplayer-loading-icon">
            <Icon type="loading" />
          </span>
        </span>
      </div>
    </div>
  </VueTouch>
</template>

<script setup lang="ts">
import VueTouch from '@moefe/vue-touch/VueTouch.vue';
import Icon from './Icon.vue';
import type { Options } from 'types/options';
import { inject, ref } from 'vue';

const progressBar = ref<HTMLElement | null>(null);

const aplayer = inject<Options & {
  currentTheme: string;
  currentPlayed: number;
  currentLoaded: number;
}>('aplayer')!;

const handleChangeProgress = inject('handleChangeProgress') as (e: MouseEvent | TouchEvent, percent: number) => void;

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
}
</script>
