<template>
  <div class="aplayer-controller">
    <div class="aplayer-controller-buttons">
      <Button type="back" @click="handleSkipBackward">
        <Skip />
      </Button>
      <Button :type="playIcon" @click="handleTogglePlay">
        <Play v-if="aplayer.media.value.paused" />
        <Pause v-else />
      </Button>
      <Button type="forward" @click="handleSkipForward">
        <Skip />
      </Button>
    </div>
    <div class="aplayer-time">
      <span class="aplayer-time-inner">
        <span class="aplayer-ptime">{{ ptime }}</span>
        <Progress />
        <span class="aplayer-dtime">{{ dtime }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Progress from './Progress.vue';
import Button from './Button.vue';
import { inject, type Ref, type ComputedRef, computed } from 'vue';
import type { LoopMode, Media, Options, OrderMode } from '../types';
import type { LrcType } from '../types';
import Play from './icons/Play.vue';
import Pause from './icons/Pause.vue';
import Skip from './icons/Skip.vue';


const aplayer = inject<
  Options & {
    media: ComputedRef<Media>;
    currentTheme: Ref<string>;
    currentVolume: Ref<number>;
    currentPlayed: Ref<number>;
    currentLoop: Ref<LoopMode>;
    currentOrder: Ref<OrderMode>;
    currentProps: Options;
    lrctype: Ref<LrcType>;
  }
>('aplayer')!;

const handleSkipBackward = inject('handleSkipBackward') as () => void;
const handleSkipForward = inject('handleSkipForward') as () => void;
const handleTogglePlay = inject('handleTogglePlay') as () => void;


const playIcon = computed(() =>
  aplayer.media.value.paused ? 'play' : 'pause'
);

const timeSecondsFormat = (time: number = 0): string => {
  const minutes = Math.floor(time / 60) || 0;
  const seconds = Math.floor(time % 60) || 0;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // prettier-ignore
};

const ptime = computed(() => {
  const currentTime = aplayer.media.value.currentTime || 0;
  return timeSecondsFormat(currentTime);
});

const dtime = computed(() => timeSecondsFormat(aplayer.media.value.duration));
</script>
