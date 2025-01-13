<template>
  <!-- <a-player :fixed="aplayer0.fixed" :lrcType="aplayer0.lrcType" :listMaxHeight="aplayer0.listMaxHeight" :preload="aplayer0.preload" :audio="aplayer0.audio" /> -->
  <div class="landing">
    <h1>Vue-Aplayer</h1>
    <h3>🍰 A beautiful HTML5 music player for Vue.js.</h3>
    <div class="aplayer-wrap">
      <a-player
        :fixed="aplayer1.fixed"
        :lrcType="aplayer1.lrcType"
        :listMaxHeight="aplayer1.listMaxHeight"
        :preload="aplayer1.preload"
        :audio="aplayer1.audio"
        :listFolded="aplayer1.listFolded"
      />
    </div>
    <div class="landing-buttons">
      <a
        class="landing-button"
        href="https://github.com/MoePlayer/vue-aplayer"
        target="_blank"
      >
        GitHub
      </a>
      <a class="landing-button" href="/docs/"> Docs </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import './App.scss';
import { onMounted, ref } from 'vue';
import Hls from 'hls.js';
import { type Options as APlayerOptions, type Audio as APlayerAudio } from '../../src/types';
import { sleep } from '../../src/utils';
import * as music from './assets/music/data.json';
import '../../src/assets/style/vue-aplayer.scss'

const aplayer0 = ref<APlayerOptions>({
  fixed: true,
  lrcType: 3,
  listMaxHeight: 100,
  preload: 'auto',
  audio: [],
});

const aplayer1 = ref<APlayerOptions>({
  fixed: false,
  lrcType: 1,
  listMaxHeight: 100,
  preload: 'auto',
  audio: [],
  listFolded: true,
});

onMounted(async () => {
  if (Hls.isSupported()) {
    console.log('Hello HLS.js!');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Array<APlayerAudio> = (music as any).default;
  console.log('raw data', data);
  const isSafari = /apple/i.test(navigator.vendor);
  if (isSafari) {
    for (let i = 0; i < data.length; i++) {
      data[i].speed = 1;
    }
  }
  await sleep(1500);
  console.log('data aplayer0', data);
  aplayer0.value.audio = data;

  await sleep(1500);
  const aplayer1Data = data.splice(0, 4);
  console.log('data aplayer1', aplayer1Data);
  aplayer1.value.audio = aplayer1Data;
});
</script>
