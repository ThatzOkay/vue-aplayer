<template>
  <div class="aplayer-controller">
    <Progress />
    <div class="aplayer-time">
      <span class="aplayer-time-inner">
        <span class="aplayer-ptime">{{ ptime }}</span> /
        <span class="aplayer-dtime">{{ dtime }}</span>
      </span>
      <span class="aplayer-icon aplayer-icon-back" @click="handleSkipBack">
        <Icon type="skip" />
      </span>
      <span class="aplayer-icon aplayer-icon-play" @click="handleTogglePlay">
        <Icon :type="playIcon" />
      </span>
      <span class="aplayer-icon aplayer-icon-forward" @click="handleSkipForward">
        <Icon type="skip" />
      </span>
      <div class="aplayer-volume-wrap">
        <Button :type="`volume-${volumeIcon}`" :icon="volumeIcon" @click="handleToggleVolume" />
        <VueTouch class="aplayer-volume-bar-wrap" @on-pan-move="handlePanMove">
          <div ref="volumeBar" class="aplayer-volume-bar" @click="handleClickVolumeBar">
            <div class="aplayer-volume" :style="{
                    height: `${aplayer.currentVolume * 100}%`,
                    backgroundColor: aplayer.currentTheme,
            }"></div>
          </div>
        </VueTouch>
      </div>
      <Button type="order" :icon="`order-${aplayer.currentOrder}`" @click="handleToggleOrderMode" />
      <Button type="loop" :icon="`loop-${aplayer.currentLoop}`" @click="handleToggleLoopMode" />
      <Button type="menu" icon="menu" @click="handleTogglePlaylist" />
      <Button v-if="aplayer.lrcType !== 0" type="lrc" icon="lrc" @click="handleToggleLyric" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';
import Progress from './Progress.vue';
import Button from './Button.vue';
import VueTouch from '@moefe/vue-touch/VueTouch.vue';
import { inject, ref } from 'vue';
import type { Options } from 'types/options';

const volumeBar = ref<HTMLElement | null>(null);

const aplayer = inject<Options & {
    media: APlayer.Media;
    currentTheme: string;
    currentVolume: number;
    currentPlayed: number;
    currentLoop: APlayer.LoopMode;
    currentOrder: APlayer.OrderMode;
    currentSettings: APlayer.Settings; }>('aplayer')!;

const handleSkipBack = inject('handleSkipBack') as () => void;
const handleSkipForward = inject('handleSkipForward') as () => void;
const handleTogglePlay = inject('handleTogglePlay') as () => void;
const handleToggleOrderMode = inject('handleToggleOrderMode') as () => void;
const handleToggleLoopMode = inject('handleToggleLoopMode') as () => void;
const handleTogglePlaylist = inject('handleTogglePlaylist') as () => void;
const handleToggleLyric = inject('handleToggleLyric') as () => void;
const handleChangeVolume = inject('handleChangeVolume') as (percent: number) => void;

const playIcon = ref(aplayer.media.paused ? 'play' : 'pause');
const volumeIcon = ref(aplayer.currentVolume <= 0 ? 'off' : aplayer.currentVolume >= 0.95 ? 'up' : 'down');

const timeSecondsFormat = (time: number = 0): string => {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // prettier-ignore
  }

const ptime = ref(timeSecondsFormat(aplayer.media.currentTime * aplayer.media.duration));
const dtime = ref(timeSecondsFormat(aplayer.media.duration));

const handleToggleVolume = () => {
  handleChangeVolume(aplayer.currentVolume > 0 ? 0 : aplayer.currentSettings.volume);
}

const handlePanMove = (e: MouseEvent | TouchEvent) => {
  if(volumeBar.value) {
    const targetTop = volumeBar.value.getBoundingClientRect().top;
    if (targetTop <= 0) return;
    const clientY = !e.type.startsWith('touch')
      ? (e as MouseEvent).clientY
      : (e as TouchEvent).changedTouches[0].clientY;
    const offsetTop = Math.round(targetTop - clientY);
    let volume = offsetTop / volumeBar.value.offsetHeight;
    volume = Math.min(volume, 1);
    volume = Math.max(volume, 0);
    handleChangeVolume(volume);
  }
}

const handleClickVolumeBar = (e: MouseEvent | TouchEvent) => {
  handlePanMove(e);
}
</script>
