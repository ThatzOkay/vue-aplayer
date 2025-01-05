<template>
  <div ref="container" :class="classNames({
    aplayer: true,
    'aplayer-withlist': dataSource.length > 1,
    'aplayer-withlrc': !fixed && (lrcType !== 0 && lyricVisible),
    'aplayer-narrow': isMini,
    'aplayer-fixed': fixed,
    'aplayer-mobile': mobile,
    'aplayer-arrow': isArrow,
    'aplayer-loading': isLoading,
  })">
  <Player />
  <PlayList :visible="true" :scroll-top="listScrollTop" :current-music="currentMusic" :data-source="dataSource" @change="handleChangePlaylist" />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, provide, ref, type VNode } from 'vue';
import classNames from 'classnames';
import isMobile from 'utils/isMobile';
import type { Options } from 'types/options';
import PlayList from './PlayList.vue';
import Player from './Player.vue';
//TODO
const src = ref<string | undefined>();
const currentPlayed = ref(0);
const currentLoaded = ref(0);
const duration = ref(0);
const paused = ref(true);

const props = withDefaults(defineProps<Options>(), {
  fixed: false,
  mini: false,
  autoplay: false,
  theme: '#b7daff',
  loop: 'all',
  order: 'list',
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  lrcType: 0,
  listFolded: false,
  listMaxHeight: 250,
  storageName: 'aplayer-setting'
});

const text = (vnode: string | VNode, key: string): string =>
  typeof vnode === 'string'
    ? vnode
    : vnode.props && vnode.props[`data-${key}`];

const store = inject('aplayerStore') as { store: any } | undefined;
const currentOrder = ref(props.order);
const mobile = ref(isMobile());
const isMini = ref(props.mini !== null ? props.mini : props.fixed);
const isArrow = ref(false);
const loading = ref(!!src && (currentPlayed > currentLoaded || !duration));
const isLoading = ref(props.preload === 'none' ? !paused && loading : loading);
const isDraggingProgressBar = ref(false);
const isAwaitChangeProgressBar = ref(false);
const canPlay = ref(!mobile && !props.autoplay)
const listVisible = ref(!props.listFolded);
const currentMusic = ref<APlayer.Audio>({
    id: NaN,
    name: 'Unloaded Audio',
    artist: '(ಗ ‸ ಗ )',
    url: '',});
const lyricVisible = ref(true);
const img = ref(new Image());
const xhr = ref(new XMLHttpRequest());

const shuffle = <T>(list: T[]) => {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const dataSource = computed((): APlayer.Audio[] => {
  return (Array.isArray(props.audio) ? props.audio : [props.audio])
    .filter(x => x)
    .map((item, index) => ({
      id: index + 1,
      ...item,
    }));
});

const orderList = computed(() =>
  dataSource.value.map(({ name, artist, ...item }) => ({
    ...item,
    name: text(name, 'name'),
    artist: text(artist, 'artist'),
  }))
);

const randomList = computed(() => {
  const list = [...orderList.value];
  return shuffle(list);
});

const currentList = ref<APlayer.Audio[]>(currentOrder.value === 'list' ? orderList.value : randomList.value);
const currentOrderIndex = ref(orderList.value.findIndex(item => item.id === currentMusic.value.id || item.url === currentMusic.value.url));
const currentRandomIndex = ref(randomList.value.findIndex(item => item.id === currentMusic.value.id || item.url === currentMusic.value.url));
const currentIndex = ref(currentOrder.value === 'list' ? currentOrderIndex : currentRandomIndex);
const listScrollTop = ref(currentOrderIndex.value * 33);

const handleChangePlaylist = (item: APlayer.Audio) => {
  return;
}

provide('aplayer', props && {
  options: store?.store.value[0],
  currentTheme: props.theme,
  currentMusic: currentMusic,
  media: {
    paused: paused,
  },
});
</script>
