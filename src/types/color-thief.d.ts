declare module 'colorthief/dist/color-thief.mjs' {
  class ColorThief {
    getColor(sourceImage: HTMLImageElement, quality?: number): number[];

    getPalette(
      sourceImage: HTMLImageElement,
      colorCount?: number,
      quality?: number
    ): number[][];
  }

  export default ColorThief;
}
