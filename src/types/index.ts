import { VNode } from "vue";

export type AudioType = 'auto' | 'hls' | 'normal';
export type LoopMode = 'all' | 'one' | 'none';
export type OrderMode = 'list' | 'random';
export type Preload = 'none' | 'metadata' | 'auto';

export enum LrcType {
  file = 3,
  html = 2, // not support
  string = 1,
  disabled = 0,
}

export interface InstallOptions {
    defaultCover?: string;
}

export interface Options {
    fixed?: boolean;
    mini?: boolean;
    autoplay?: boolean;
    theme?: string;
    loop?: LoopMode;
    order?: OrderMode;
    preload?: Preload;
    volume?: number;
    audio: Audio | Audio[];
    customAudioType?: unknown;
    mutex?: boolean;
    lrcType?: LrcType;
    listFolded?: boolean;
    listMaxHeight?: number;
    storageName?: string;
    disableList?: boolean;
  }

  export interface Audio {
    [index: number]: this;

    id?: number;
    name: string | VNode;
    artist: string | VNode;
    url: string;
    cover?: string;
    lrc?: string;
    theme?: string;
    type?: AudioType;
    speed?: number;
  }

  export interface Media {
    /** Sets or returns whether the audio should start playing as soon as it is ready. */
    readonly autoplay: boolean;
    /** Returns the TimeRanges object representing the buffered parts of the audio. */
    readonly buffered: TimeRanges;
    /** Sets or returns whether the audio should display controls (like play/pause etc.). */
    readonly controls: boolean;
    /** Sets or returns the CORS setting for the audio. */
    readonly crossOrigin: string | null;
    /** Returns the current URL of the audio. */
    readonly currentSrc: string;
    /** Sets or returns the current playback position in the audio (in seconds). */
    readonly currentTime: number;
    /** Sets or returns whether the audio is muted by default. */
    readonly defaultMuted: boolean;
    /** Sets or returns the default playback speed of the audio. */
    readonly defaultPlaybackRate: number;
    /** Returns the length of the audio (in seconds). */
    readonly duration: number;
    /** Returns whether the playback of the audio has ended. */
    readonly ended: boolean;
    /** Returns the MediaError object representing the error state of the audio. */
    readonly error: MediaError | null;
    /** Sets or returns whether the audio should loop when it ends. */
    readonly loop: boolean;
    /** Sets or returns the name of the media key system for the audio. */
    readonly mediaKeys: MediaKeys | null;
    /** Sets or returns whether the audio is muted. */
    readonly muted: boolean;
    /** Returns the current network state of the audio. */
    readonly networkState: number;
    /** Sets or returns whether the audio is paused. */
    readonly paused: boolean;
    /** Sets or returns the playback speed of the audio. */
    readonly playbackRate: number;
    /** Returns the TimeRanges object representing the played parts of the audio. */
    readonly played: TimeRanges;
    /** Sets or returns the value of the preload attribute of the audio. */
    readonly preload: string;
    /** Returns the current ready state of the audio. */
    readonly readyState: number;
    /** Returns the TimeRanges object representing the seekable parts of the audio. */
    readonly seekable: TimeRanges;
    /** Returns whether the user is currently seeking in the audio. */
    readonly seeking: boolean;
    /** Sets or returns the value of the src attribute of the audio. */
    readonly src: string;
    /** Returns the TextTrackList object representing available text tracks. */
    readonly textTracks: TextTrackList;
    /** Sets or returns the volume of the audio. */
    readonly volume: number;
  }

  export interface Settings {
    currentTime: number;
    duration: number | null;
    paused: boolean;
    mini: boolean;
    lrc: boolean;
    list: boolean;
    volume: number;
    loop: LoopMode;
    order: OrderMode;
    music: Audio | null;
  }