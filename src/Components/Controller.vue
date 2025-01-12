<template>
  <div class="aplayer-controller">
    <Progress />
    <div class="aplayer-time">
      <span class="aplayer-time-inner">
        <span class="aplayer-ptime">{{ ptime }}</span> /
        <span class="aplayer-dtime">{{ dtime }}</span>
      </span>
      <Button type="back" @click="handleSkipBackward" >
        <Skip />
      </Button>
      <Button :type="playIcon" @click="handleTogglePlay"> 
        <Play v-if="!aplayer.media.value.paused" />
        <Pause v-else />
      </Button>
      <Button type="forward" @click="handleSkipForward" >
        <Skip />
      </Button>
      <div class="aplayer-volume-wrap">
        <Button
          :type="`volume-${volumeIcon}`"
          @click="handleToggleVolume"
        >
          <VolumeUp v-if="aplayer.currentVolume.value > 0.8" />
          <VolumeDown v-else-if="aplayer.currentVolume.value > 0" />
          <VolumeOff v-else />
        </Button>
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
        @click="handleToggleOrderMode"
      >
        <OrderList v-if="aplayer.currentOrder.value === 'list'" />
        <OrderRandom v-else />
      </Button>
      <Button
        type="loop"
        @click="handleToggleLoopMode"
      >
        <LoopAll v-if="aplayer.currentLoop.value === 'all'" />
        <LoopOne v-else-if="aplayer.currentLoop.value === 'one'" />
        <LoopNone v-else />
      </Button>
      <Button type="menu" @click="handleTogglePlaylist" >
        <Menu />
      </Button>
      <Button
        v-if="aplayer.lrcType !== 0"
        type="lrc"
        @click="handleToggleLyric"
      >
        <Lrc />
      </Button>
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
import Play from './icons/Play.vue';
import Pause from './icons/Pause.vue';
import Skip from './icons/Skip.vue';
import VolumeUp from './icons/VolumeUp.vue';
import VolumeDown from './icons/VolumeDown.vue';
import VolumeOff from './icons/VolumeOff.vue';
import OrderList from './icons/OrderList.vue';
import OrderRandom from './icons/OrderRandom.vue';
import LoopAll from './icons/LoopAll.vue';
import LoopOne from './icons/LoopOne.vue';
import LoopNone from './icons/LoopNone.vue';
import Menu from './icons/Menu.vue';
import Lrc from './icons/Lrc.vue';

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
const volumeIcon = computed(() => {
  if (aplayer.currentVolume.value === 0) {
    return 'mute';
  }
  if (aplayer.currentVolume.value < 0.8) {
    return 'down';
  }
  return 'up';
})

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
