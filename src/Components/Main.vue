<template>
  <div class="aplayer-info">
    <div class="aplayer-music">
      <span class="aplayer-title">{{ music.name }}</span>
      <span class="aplayer-author"> - {{ music.artist }}</span>
    </div>
    <slot></slot>
    <div class="aplayer-controller-right">
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
import VueTouch from '../vue-touch/VueTouch.vue';
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
import { inject, computed, type Ref, ref } from 'vue';
import { InstallOptions, Options, Audio, Media, OrderMode, LoopMode } from '../types';
import Button from './Button.vue';

const volumeBar = ref<HTMLElement | null>(null);

const aplayer = inject<
  Options & {
    options: InstallOptions;
    currentTheme: Ref<string>;
    currentMusic: Ref<Audio>;
    currentVolume: Ref<number>;
    media: Ref<Media>;
    lyricVisible: Ref<boolean>;
    currentOrder: Ref<OrderMode>;
    currentLoop: Ref<LoopMode>;
    currentProps: Options;
  }
>('aplayer')!;

const handleToggleOrderMode = inject('handleToggleOrderMode') as () => void;
const handleToggleLoopMode = inject('handleToggleLoopMode') as () => void;
const handleTogglePlaylist = inject('handleTogglePlaylist') as () => void;
const handleToggleLyric = inject('handleToggleLyric') as () => void;
const handleChangeVolume = inject('handleChangeVolume') as (
  percent: number
) => void;

const music = computed(() => {
  return {
    name: aplayer.currentMusic.value.name,
    artist: aplayer.currentMusic.value.artist,
  };
});

const volumeIcon = computed(() => {
  if (aplayer.currentVolume.value === 0) {
    return 'mute';
  }
  if (aplayer.currentVolume.value < 0.8) {
    return 'down';
  }
  return 'up';
});

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
