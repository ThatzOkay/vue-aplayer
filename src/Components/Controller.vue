<template>
  <div class="aplayer-controller">
    <Progress />
    <div class="aplayer-time">
      <span class="aplayer-time-inner">
        <span class="aplayer-ptime">{{ ptime }}</span> /
        <span class="aplayer-dtime">{{ dtime }}</span>
      </span>
      <Button type="back" icon="skip" @click="handleSkipBackward" />
      <Button :type="playIcon" :icon="playIcon" @click="handleTogglePlay" />
      <Button type="forward" icon="skip" @click="handleSkipForward" />
      <div class="aplayer-volume-wrap">
        <Button
          :type="`volume-${volumeIcon}`"
          :icon="`volume-${volumeIcon}`"
          @click="handleToggleVolume"
        />
        <VueTouch class="aplayer-volume-bar-wrap" @on-pan-move="handlePanMove">
          <div
            ref="volumeBar"
            class="aplayer-volume-bar"
            @click="handleClickVolumeBar"
          >
            <div
              class="aplayer-volume"
              :style="{
                height: `${aplayer.currentVolume.value * 100}%`,
                backgroundColor: aplayer.currentTheme.value,
              }"
            ></div>
          </div>
        </VueTouch>
      </div>
      <Button
        type="order"
        :icon="`order-${aplayer.currentOrder.value}`"
        @click="handleToggleOrderMode"
      />
      <Button
        type="loop"
        :icon="`loop-${aplayer.currentLoop.value}`"
        @click="handleToggleLoopMode"
      />
      <Button type="menu" icon="menu" @click="handleTogglePlaylist" />
      <Button
        v-if="aplayer.lrcType !== 0"
        type="lrc"
        icon="lrc"
        @click="handleToggleLyric"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Progress from './Progress.vue';
import Button from './Button.vue';
import VueTouch from '@/vue-touch/VueTouch.vue';
import { inject, ref, type Ref, type ComputedRef, computed } from 'vue';
import type { LoopMode, Media, Options, OrderMode } from '@/types/aplayer';
import type { LrcType } from '@/types/aplayer';

const volumeBar = ref<HTMLElement | null>(null);

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
const handleToggleOrderMode = inject('handleToggleOrderMode') as () => void;
const handleToggleLoopMode = inject('handleToggleLoopMode') as () => void;
const handleTogglePlaylist = inject('handleTogglePlaylist') as () => void;
const handleToggleLyric = inject('handleToggleLyric') as () => void;
const handleChangeVolume = inject('handleChangeVolume') as (
  percent: number
) => void;

const playIcon = computed(() =>
  aplayer.media.value.paused ? 'play' : 'pause'
);
const volumeIcon = ref(
  aplayer.currentVolume.value <= 0
    ? 'off'
    : aplayer.currentVolume.value >= 0.95
      ? 'up'
      : 'down'
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

const handleToggleVolume = () => {
  handleChangeVolume(
    aplayer.currentVolume.value > 0 ? 0 : (aplayer.currentProps.volume ?? 0.7)
  );
};

const handlePanMove = (e: MouseEvent | TouchEvent) => {
  console.log('handlePanMove volume bar');
  if (volumeBar.value) {
    const volumeBarRect = volumeBar.value.getBoundingClientRect();
    const clientY = !e.type.startsWith('touch')
      ? (e as MouseEvent).clientY
      : (e as TouchEvent).changedTouches[0].clientY;

    // Calculate the position relative to the volume bar
    const relativeY = clientY - volumeBarRect.top;

    // Normalize the volume (0 at the bottom, 1 at the top)
    let volume = 1 - relativeY / volumeBarRect.height;

    // Clamp the volume between 0 and 1
    volume = Math.min(Math.max(volume, 0), 1);

    handleChangeVolume(volume);
  }
};

const handleClickVolumeBar = (e: MouseEvent | TouchEvent) => {
  handlePanMove(e);
};
</script>
