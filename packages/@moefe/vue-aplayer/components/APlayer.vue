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
    <VueAudio ref="media">
      <PlayList :visible="listVisible" :scroll-top="listScrollTop" :current-music="currentMusic"
        :data-source="dataSource" :class="currentOrder === 'list' ? 'aplayer-list' : 'aplayer-list-random'"
        @change="handleChangePlaylist" />
      <Player :notice="notice" @skip-backward="handleSkipBackward" @skip-forward="handleSkipForward"
        @toggle-play="handleTogglePlay" @toggleOrderMode="handleToggleOrderMode" @toggleLoopMode="handleToggleLoopMode"
        @toggle-playlist="handleTogglePlaylist" @toggle-lyric="handleToggleLyric" @change-volume="handleChangeVolume"
        @change-progress="handleChangeProgress" @mini-switcher="handleMiniSwitcher" />
      <Lyric v-if="fixed && lrcType !== 0" :visible="lyricVisible" />
    </VueAudio>
  </div>
</template>

<script setup lang="ts">
import ColorThief from 'colorthief/dist/color-thief.mjs';
import { computed, inject, watch, onUnmounted, provide, ref, type VNode, nextTick, onMounted } from 'vue';
import classNames from 'classnames';
import isMobile from 'utils/isMobile';
import type { Options } from 'types/options';
import PlayList from './PlayList.vue';
import Player, { type Notice } from './Player.vue';
import Lyric from './Lyric.vue';
import { events, ReadyState } from '@moefe/vue-audio';
import VueAudio from '@moefe/vue-audio';

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

const emit = defineEmits([
  ...events,
  'listClear',
  'listAdd',
  'listRemove',
  'listSwitch',
  'skipBackward',
  'skipForward',
  'noticeShow',
  'noticeHide',
  'listShow',
  'listHide',
  'lyricShow',
  'lyricHide',
  'destroy',
  'update:mini',
  'update:loop',
  'update:order',
  'update:volume',
  'update:listFolded',
]);

const container = ref<HTMLDivElement | null>(null);

const text = (vnode: string | VNode, key: string): string =>
  typeof vnode === 'string'
    ? vnode
    : vnode.props && vnode.props[`data-${key}`];

// this will be the main data source for the player and playlist. When user presses shuffle. Shuffle this list.
// If currently playing a song. remove from list then shuffle then add to beginning of list
const dataSource = computed((): APlayer.Audio[] => {
  if (currentOrder.value === 'list') {
    return (Array.isArray(props.audio) ? props.audio : [props.audio])
      .filter(x => x)
      .map((item, index) => ({
        id: index + 1,
        ...item,
      }));
  }
  return [];
});

const orderList = computed(() =>
  dataSource.value.map(({ name, artist, ...item }) => ({
    ...item,
    name: text(name, 'name'),
    artist: text(artist, 'artist'),
  }))
);

const shuffleTrigger = ref(0);

const currentLoaded = computed(() => {
  if (!media.value) return 0;
  if (media.value.state.readyState < ReadyState.HAVE_FUTURE_DATA) return 0;
  const { length } = media.value?.state.buffered;
  return length > 0
    ? media.value.state.buffered.end(length - 1) / media.value?.state.duration
    : 1;
})

const store = inject('aplayerStore') as { store: any } | undefined;
const currentOrder = ref(props.order);
const media = ref<InstanceType<typeof VueAudio>>();
const player = computed(() => media.value!.audio);
const currentPlayed = ref(0);
const mobile = ref(isMobile());
const isMini = ref(props.mini !== null ? props.mini : props.fixed);
const isArrow = ref(false);
const loading = ref(!!media.value?.state.src && (currentPlayed.value > currentLoaded.value || !media.value?.state.duration));
const isLoading = ref(props.preload === 'none' ? !media.value?.state.paused && loading.value : loading.value);
const isDraggingProgressBar = ref(false);
const isAwaitChangeProgressBar = ref(false);
const canPlay = ref(!mobile && !props.autoplay)
const listVisible = ref(!props.listFolded);
const currentMusic = ref<APlayer.Audio>({
  id: NaN,
  name: 'Unloaded Audio',
  artist: '(ಗ ‸ ಗ )',
  url: '',
});
const lyricVisible = ref(true);
const img = ref(new Image());

const shuffle = <T>(list: T[]) => {
  console.log("shuffling")
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const currentIndex = computed(() => {
  const item = orderList.value.filter(item => item.id === currentMusic.value.id);
  const index = item.length > 0 ? orderList.value.indexOf(item[0]) : -1;
  return index;
});

const listScrollTop = ref(currentIndex.value * 33);
const currentVolume = ref(props.volume);
const currentTheme = ref<string>(currentMusic.value.theme || props.theme);
const currentLoop = ref(props.loop);

const notice = ref<Notice>({
  text: '',
  time: 2000,
  opacity: 0,
});

const reshuffle = () => {
  shuffleTrigger.value++;
};

const handleChangePlayList = async (
  newList: APlayer.Audio[],
  oldList?: APlayer.Audio[],
) => {
  console.log("changing playlist handleChangePlayList")
  if (oldList) {
    const newLength = newList.length;
    const oldLength = oldList.length;
    if (newLength !== oldLength) {
      if (newLength <= 0) emit('listClear');
      else if (newLength > oldLength) emit('listAdd');
      else {
        if (currentIndex.value < 0) {
          const { id, url } = currentMusic.value;
          const oldIndex = oldList.findIndex(
            item => item.id === id || item.url === url,
          );
          currentMusic.value = oldList[oldIndex - 1];
        }
        canPlay.value = !player.value.paused;
        emit('listRemove');
      }
    }
  }

  if (orderList.value.length > 0) {
    if (!currentMusic.value.id) {
      [currentMusic.value] = orderList.value;
    } else {
      canPlay.value = !player.value.paused;
      const music =
        orderList.value[currentIndex.value] || orderList.value[0];
      currentMusic.value = music;
    }
    canPlay.value = true;
  }
}

const handleChangeCurrentMusic = async (
  newMusic: APlayer.Audio,
  oldMusic?: APlayer.Audio,
) => {
  if (!newMusic) {
    currentTheme.value = props.theme;
    return;
  }
  if (newMusic.theme) {
    currentTheme.value = newMusic.theme;
  } else {
    const cover = newMusic.cover || store?.store.defaultCover;
    if (cover) {
      setTimeout(async () => {
        try {
          currentTheme.value = await getThemeColorFromCover(cover);
        } catch (e) {
          currentTheme.value = newMusic.theme || props.theme;
        }
      });
    }
  }

  if (newMusic.url) {
    if (
      (oldMusic !== undefined && oldMusic.url) !== newMusic.url ||
      player.value.src !== newMusic.url
    ) {
      currentPlayed.value = 0;
      if (oldMusic && oldMusic.id) {
        handleChangeSettings();
        emit('listSwitch', newMusic);
      }
      const src = await getAudioUrl(newMusic);
      if (src) player.value.src = src;
      player.value.playbackRate = newMusic.speed || 1;
      player.value.preload = props.preload;
      player.value.volume = currentVolume.value;
      player.value.currentTime = 0;
      console.log("newMusic:", newMusic)
      if (navigator.mediaSession) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: newMusic.name.toString(),
          artist: newMusic.artist.toString(),
          album: '',
          artwork: newMusic.cover
            ? [{ src: newMusic.cover, sizes: '96x96', type: 'image/png' }]
            : [],
        });
      }
      player.value.onerror = (e: Event | string) => {
        showNotice(e.toString());
      };
    }
    if (canPlay.value) play();
  }
}

const handleChangeVolume = (volume: number) => {
  currentVolume.value = volume;
}

const handleChangeCurrentVolume = () => {
  const p = player.value;
  p.volume = currentVolume.value;
  emit('update:volume', currentVolume.value);
}

const handleChangeCurrentTime = () => {
  if (media.value && (!isDraggingProgressBar.value && !isAwaitChangeProgressBar.value)) {
    currentPlayed.value = media.value?.state.currentTime / media.value?.state.duration || 0;
  }
}

const handleChangeSettings = () => {
  const settings: APlayer.Settings = {
    currentTime: media.value?.state.currentTime ?? 0,
    duration: media.value?.state.duration ?? 0,
    paused: media.value?.state.paused ?? true,
    mini: isMini.value,
    lrc: lyricVisible.value,
    list: listVisible.value,
    volume: currentVolume.value,
    loop: currentLoop.value,
    order: currentOrder.value,
    music: currentMusic.value,
  };

  if (settings.volume <= 0) {
    settings.volume = settings.volume;
  }

  // saveSettings(settings);
}

const handleChangeEnded = () => {
  console.log("handleChangeEnded")
  if (!media.value?.state.ended) return;
  currentPlayed.value = 0;
  switch (currentLoop.value) {
    default:
    case 'all':
      handleSkipForward();
      break;
    case 'one':
      play();
      break;
    case 'none':
      if (currentIndex.value === orderList.value.length - 1) {
        [currentMusic.value] = orderList.value;
        pause();
        canPlay.value = false;
      } else handleSkipForward();
      break;
  }
}

const handleChangeMini = () => {
  isMini.value = props.mini;
}

const handleChangeCurrentMini = async (_: boolean, oldVal?: boolean) => {
  await nextTick();
  const cont = container.value;
  isArrow.value = !!cont && cont.offsetWidth <= 300;
  if (oldVal !== undefined) {
    emit('update:mini', isMini.value);
    // handleChangeSettings();
  }
}

const handleChangeLoop = () => {
  currentLoop.value = props.loop;
}

const handleChangeCurrentLoop = () => {
  emit('update:loop', currentLoop.value);
  // handleChangeSettings();
}

const handleChangeOrder = () => {
  currentOrder.value = props.order;
}

const handleChangeCurrentOrder = () => {
  emit('update:order', currentOrder.value);
  console.log("currentOrder", currentOrder.value)
  console.log("currentList", orderList.value)
  // handleChangeSettings();
}

const handleChangeListVisible = () => {
  emit(listVisible.value ? 'listShow' : 'listHide');
  emit('update:listFolded', listVisible.value)
  // handleChangeSettings();
}

const handleChangeLyricVisible = () => {
  emit(lyricVisible.value ? 'lyricShow' : 'lyricHide');
  // handleChangeSettings();
}

watch(() => orderList.value, handleChangePlayList, { immediate: true, deep: true });
watch(() => currentMusic.value, handleChangeCurrentMusic);
watch(() => props.volume, handleChangeVolume);
watch(() => currentVolume.value, handleChangeCurrentVolume);
watch(() => media.value?.state.currentTime, handleChangeCurrentTime);
watch(() => media.value?.$data, handleChangeSettings, { deep: true });
watch(() => media.value?.state.ended, handleChangeEnded);
watch(() => props.mini, handleChangeMini);
watch(() => isMini.value, handleChangeCurrentMini, { immediate: true });
watch(() => props.loop, handleChangeLoop);
watch(() => currentLoop.value, handleChangeCurrentLoop);
watch(() => props.order, handleChangeOrder);
watch(() => currentOrder.value, handleChangeCurrentOrder);
watch(() => listVisible.value, handleChangeListVisible);
watch(() => lyricVisible.value, handleChangeLyricVisible);

const play = async () => {
  try {
    // if (mutex) pauseOtherInstances(); ??For now ill leave the multi instace thing out
    await player.value.play();
  } catch (e: unknown) {
    if (e instanceof Error) {
      showNotice(e.message);
    } else {
      showNotice(String(e));
    }
    player.value.pause();
  }
}

const pause = () => {
  if (!player.value) return;
  player.value.pause();
}

const toggle = () => {
  if (media.value?.state.paused) play();
  else pause();
}

const seeking = async (percent: number, paused: boolean = true) => {
  try {
    if (!media.value) return;
    isAwaitChangeProgressBar.value = true;
    if (props.preload === 'none') {
      if (!player.value.src) await media.value?.srcLoaded();
      const oldPaused = player.value.paused;
      await play();
      if (paused && oldPaused) pause();
    }
    if (paused) pause();
    await media.value?.loaded();
    player.value.currentTime = percent * media.value?.state.duration;
    if (!paused) {
      play();
      // if (channel && mutex) {
      //   channel.postMessage('mutex');
      // }
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      showNotice(e.message);
    } else {
      showNotice(String(e));
    }
  } finally {
    isAwaitChangeProgressBar.value = false;
  }
}

const seek = (time: number) => {
  if (!media.value) return;
  seeking(time / media.value?.state.duration, media.value?.state.paused);
}

const switchAudio = (audio: number | string) => {
  console.log("switching audio")
  switch (typeof audio) {
    case 'number':
      currentMusic.value = orderList.value[
        Math.min(Math.max(0, audio), orderList.value.length - 1)]
      break;

    default:
      const music = orderList.value.find(
        item => typeof item.name === 'string' && item.name.includes(audio));
      if (music) currentMusic.value = music;
  }
}

const skipBackward = () => {
  const playIndex = getPlayIndexByMode('skipBackward');
  currentMusic.value = { ...orderList.value[playIndex] };
  emit('skipBackward');
}

const skipForward = () => {
  console.log("skipForward")
  const playIndex = getPlayIndexByMode('skipForward');
  console.log("playIndex: ", playIndex)
  currentMusic.value = { ...orderList.value[playIndex] };
  emit('skipForward');
}

const showLrc = () => {
  lyricVisible.value = true;
}

const hideLrc = () => {
  lyricVisible.value = false;
}

const toggleLrc = () => {
  lyricVisible.value = !lyricVisible.value;
}

const showList = () => {
  listVisible.value = true;
}

const hideList = () => {
  listVisible.value = false;
}

const toggleList = () => {
  listVisible.value = !listVisible.value;
}

const showNotice = (
  text: string,
  time: number = 2000,
  opacity: number = 0.8,
): Promise<void> => {
  return new Promise((resolve) => {
    if (isMini.value) {
      resolve();
    } else {
      notice.value = {
        text,
        time,
        opacity,
      };
      emit('noticeShow');
      if (time > 0) {
        setTimeout(() => {
          notice.value.opacity = 0;
          emit('noticeHide');
          resolve();
        }, time)
      }
    }
  })
}

const getThemeColorFromCover = (url: string): Promise<string> => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const image = await (await fetch(url)).blob();
      const reader = new FileReader();
      reader.onload = () => {
        img.value.src = reader.result as string;
        img.value.onload = () => {
          const [r, g, b] = new ColorThief().getColor(img.value);
          const theme = `rgb(${r}, ${g}, ${b})`;
          resolve(theme || currentMusic.value.theme || props.theme);
        };
        img.value.onerror = reject;
        img.value.onabort = reject;
      };
      reader.onerror = reject;
      reader.onabort = reject;
      reader.readAsDataURL(image);
    } catch (e) {
      resolve(currentMusic.value.theme || props.theme);
    }
  });
}

const getAudioUrl = async (audio: APlayer.Audio): Promise<string> => {
  //TODO: Implement getAudioUrl to also load audio based on base64
  return audio.url;
}

const getPlayIndexByMode = (type: 'skipBackward' | 'skipForward'): number => {
  const length = orderList.value.length;
  const index = currentIndex.value;
  console.log("current index: ", index)
  return (type === 'skipBackward' ? length + (index - 1) : index + 1) % length;
}

const saveSettings = (settings: APlayer.Settings | null) => {
  if (store) {
    store.store.value = [settings, currentMusic.value];
  }
}

const handleSkipBackward = () => {
  skipBackward();
}

const handleSkipForward = () => {
  skipForward();
}

const handleTogglePlay = () => {
  toggle();
}

const handleToggleOrderMode = () => {
  if (currentOrder.value === 'list') {
    console.log('reshuffle')
    reshuffle();
  }
  currentOrder.value = currentOrder.value === 'list' ? 'random' : 'list';
}

const handleToggleLoopMode = () => {
  currentLoop.value = currentLoop.value === 'all' ? 'one' : currentLoop.value === 'one' ? 'none' : 'all';
  console.log('currentLoop', currentLoop.value)
}

const handleTogglePlaylist = () => {
  toggleList();
}

const handleToggleLyric = () => {
  toggleLrc();
}

const handleChangeProgress = (e: MouseEvent | TouchEvent, percent: number) => {
  currentPlayed.value = percent;
  isDraggingProgressBar.value = e.type.includes('move');
  if (['touchend', 'mouseup'].includes(e.type)) {
    seeking(percent, media.value?.state.paused); // preload 为 none 的情况下无法获取到 duration
  }
}

const handleMiniSwitcher = () => {
  isMini.value = !isMini.value;
}

const handleChangePlaylist = (music: APlayer.Audio, index: number) => {
  console.log("music: ", music)
  console.log("index: ", index)
  if (music.id === currentMusic.value.id) handleTogglePlay();
  else currentMusic.value = orderList.value[index];
}

const mediaState = computed(() => {
  if (!media.value) return {
    currentTime: 0,
    duration: 0,
    paused: true,
    ended: false,
    readyState: ReadyState.HAVE_NOTHING,
  };
  return media.value?.state;
})

provide('aplayer', props && {
  options: store?.store.value[0],
  listMaxHeight: props.listMaxHeight,
  currentProps: props,
  currentTheme: currentTheme,
  currentMusic: currentMusic,
  currentVolume: currentVolume,
  currentLoop: currentLoop,
  currentOrder: currentOrder,
  currentPlayed: currentPlayed,
  currentLoaded: currentLoaded,
  media: mediaState
});

onMounted(() => {
  events.forEach(event => player.value.addEventListener(event, e => emit(event, e)));
})

onUnmounted(() => {
  pause();
  saveSettings(null);
  emit('destroy');
})

defineExpose({
  play,
  pause,
  toggle,
  seek,
  switchAudio,
  showLrc,
  hideLrc,
  toggleLrc,
  showList,
  hideList,
  toggleList,
  showNotice,
  getThemeColorFromCover,
  getAudioUrl,
});
</script>
