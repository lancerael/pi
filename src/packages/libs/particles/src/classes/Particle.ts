import Dimensions from './Dimensions'

export const randomNumber = (start: number, end: number) => {
  return Math.floor(Math.random() * end) + start
}

export type ParticleProps = Partial<Pick<Particle, 'x' | 'y' | 'z'>> & {
  config?: Partial<ParticleConfig>
}
export type ParticlePropsExtended = Pick<Particle, 'dimensions'>

export enum Accelleration {
  Accellerate = 'accellerate',
  None = 'none',
  Decellerate = 'decellerate',
}

export interface ParticleConfig {
  lateralRange: [number, number]
  speed: number
  acceleration: Accelleration
  reflectWalls: boolean
  reflectLateral: boolean
  recycle: boolean
  startAtBack: boolean
  repel?: [number, number]
}

class Particle {
  dimensions: Dimensions
  x: number = 0
  y: number = 0
  z: number = 0

  dx: number = randomNumber(0, 2) - 1 || 1
  dy: number = randomNumber(0, 2) - 1 || 1
  dz: number = 0.05
  age: number = 1
  padding: number = 50
  isDead: boolean = false
  scrollTop: number = 0

  config: ParticleConfig = {
    lateralRange: [1, 10],
    speed: Math.random(),
    acceleration: Accelleration.Accellerate,
    reflectWalls: false,
    reflectLateral: false,
    recycle: true,
    startAtBack: true,
  }

  constructor({
    x,
    y,
    z,
    dimensions,
    config,
  }: ParticleProps & Pick<Particle, 'dimensions'>) {
    this.dimensions = dimensions
    this.config = {
      ...this.config,
      ...config,
    }
    this.init({ x, y, z })
  }

  get accelerator() {
    return {
      accellerate: this.age / 20,
      none: 1,
      decellerate: this.config.lateralRange[1] - this.age / 20,
    }[this.config.acceleration]
  }

  get repelPoint() {
    return (
      this.config.repel ?? [
        this.dimensions.width / 2,
        this.dimensions.height / 2,
      ]
    )
  }

  init = ({ x, y, z }: ParticleProps = {}) => {
    this.age = 1
    this.x = x ?? randomNumber(1, this.dimensions.width) + this.scrollTop
    this.y = y ?? randomNumber(1, this.dimensions.height)
    this.z =
      z ?? this.config.startAtBack
        ? this.config.lateralRange[0]
        : randomNumber(1, 9)
  }

  reflectOrKill = (axis: 'x' | 'y', dimension: 'width' | 'height') => {
    if (
      this[axis] + this[`d${axis}`] >
        this.dimensions[dimension] + this.padding ||
      this[axis] + this[`d${axis}`] < -this.padding
    ) {
      if (this.config.reflectWalls) {
        this[`d${axis}`] = -this[`d${axis}`]
      } else {
        this.isDead = true
      }
      if (this.config.reflectLateral) {
        this.dz = -this.dz
      }
    }
  }

  setVelocity = () => {
    if (!this.repelPoint.some(Boolean)) return
    const xDist = this.x - this.repelPoint[0]
    const yDist = this.y - this.repelPoint[1]
    const magnitude = Math.sqrt(xDist * xDist + yDist * yDist)
    this.dx = (xDist * this.accelerator * this.config.speed) / magnitude
    this.dy = (yDist * this.accelerator * this.config.speed) / magnitude
    if (
      this.config.reflectLateral &&
      (this.z + this.dz < this.config.lateralRange[0] ||
        this.z + this.dz > this.config.lateralRange[1])
    ) {
      this.dz = -this.dz
    }
  }

  move = (offsetY: number = 0, scrollTop: number = 0) => {
    this.scrollTop = scrollTop

    // Recycle or ignore dead particles
    if (this.isDead) {
      if (!this.config.recycle) return
      if (this.age > 1) {
        this.init()
        return
      } else {
        this.isDead = false
      }
    }

    // console.log(offsetY)

    this.age++

    this.setVelocity()

    this.x += this.dx
    this.y += this.dy + offsetY * (this.age / 3)
    this.z += this.dz * this.accelerator * this.config.speed

    this.reflectOrKill('x', 'width')
    this.reflectOrKill('y', 'height')
  }
}

export default Particle
