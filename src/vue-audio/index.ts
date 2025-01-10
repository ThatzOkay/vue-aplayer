import { defineComponent, reactive, watchEffect, onUnmounted } from 'vue';
import events from './events';
import { eventLoop } from '../utils';

export { events };

export enum ReadyState {
  HAVE_NOTHING = 0,
  HAVE_METADATA = 1,
  HAVE_CURRENT_DATA = 2,
  HAVE_FUTURE_DATA = 3,
  HAVE_ENOUGH_DATA = 4,
}

export default defineComponent({
  name: 'VueAudio',
  setup() {
    const audio = new Audio();
    audio.loop = false;
    audio.volume = 0;
    // Define the type of the state
    const state = reactive({
      autoplay: audio.autoplay,
      buffered: audio.buffered,
      controls: audio.controls,
      crossOrigin: audio.crossOrigin,
      currentSrc: audio.currentSrc,
      currentTime: audio.currentTime,
      defaultMuted: audio.defaultMuted,
      defaultPlaybackRate: audio.defaultPlaybackRate,
      duration: audio.duration,
      ended: audio.ended,
      error: audio.error,
      loop: audio.loop,
      mediaKeys: audio.mediaKeys,
      muted: audio.muted,
      networkState: audio.networkState,
      paused: audio.paused,
      playbackRate: audio.playbackRate,
      played: audio.played,
      preload: audio.preload,
      readyState: audio.readyState,
      seekable: audio.seekable,
      seeking: audio.seeking,
      src: audio.src,
      textTracks: audio.textTracks,
      volume: audio.volume,
    });

    // Sync reactive state with the audio element
    const sync = () => {
      (Object.keys(state) as Array<keyof typeof state>).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state as any)[key] = audio[key] as (typeof state)[typeof key];
      });
    };

    // Attach event listeners to the audio element
    events.forEach((event) => {
      audio.addEventListener(event, sync);
    });

    // Clean up event listeners on unmount
    onUnmounted(() => {
      events.forEach((event) => {
        audio.removeEventListener(event, sync);
      });
    });

    // Method to check if the audio has loaded enough data
    const loaded = () =>
      eventLoop(() => audio.readyState >= ReadyState.HAVE_FUTURE_DATA, 0);

    // Method to check if the audio source is loaded
    const srcLoaded = () => eventLoop(() => !!audio.src, 0);

    // Watch for changes in audio properties and keep state in sync
    watchEffect(sync);

    return {
      audio,
      state,
      loaded,
      srcLoaded,
    };
  },
  render() {
    // Render the default slot
    return this.$slots.default ? this.$slots.default() : null;
  },
});
