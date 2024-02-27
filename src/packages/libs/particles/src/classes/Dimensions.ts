export type Size = Omit<Dimensions, 'size'>

export default class Dimensions {
  width: number = 0
  height: number = 0

  constructor(size: Size) {
    this.size = size
  }

  set size({ width, height }: Size) {
    this.width = width
    this.height = height
  }

  get size(): Size {
    return {
      width: this.width,
      height: this.height,
    }
  }
}
