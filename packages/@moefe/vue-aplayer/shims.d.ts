/* eslint-disable import/export */

declare global {
    const APLAYER_VERSION: string;
}

declare module '*.json' {
  const value: any;
  export default value;
}

// Import the APlayer component for global registration
import { ComponentCustomProperties } from "vue";
import { APlayer as APlayerPlayer } from "./components/APlayer.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    APlayer: typeof APlayerPlayer;
    aPlayer: typeof APlayerPlayer;
    "a-player": typeof APlayerPlayer;
  }
}
