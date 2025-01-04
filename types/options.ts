import type { LoopMode, LrcType, OrderMode, Preload, Audio } from "types";

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
    customAudioType?: any;
    mutex?: boolean;
    lrcType?: LrcType;
    listFolded?: boolean;
    listMaxHeight?: number;
    storageName?: string;
  }