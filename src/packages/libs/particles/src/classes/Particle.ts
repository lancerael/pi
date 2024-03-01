import {
  Accelleration,
  Coords,
  MoveZ,
  ParticleConfig,
  PositionOffsets,
} from '../types'

export const randomNumber = (start: number, end: number) => {
  return Math.floor(Math.random() * end) + start
}

export type ParticleProps = Pick<
  Particle,
  'dimensions' | 'positionOffsets' | 'repelPoint'
> &
  Partial<Pick<Particle, 'x' | 'y' | 'z' | 'config'>>

class Particle {
  dimensions: Coords
  positionOffsets: PositionOffsets
  repelPoint?: Coords
  x: number = 0
  y: number = 0
  z: number = 0

  dx: number = randomNumber(0, 2) - 1 || 1
  dy: number = randomNumber(0, 2) - 1 || 1
  dz: number = 0.05
  age: number = 1
  padding: number = 0
  isDead: boolean = false
  scrollTop: number = 0

  fx: number = 0
  fy: number = 0
  forceDirection: number = 70
  forceAmount: number = 3
  forceVariance: number = 10

  config: ParticleConfig = {
    rangeZ: [1, 20],
    moveZ: MoveZ.None,
    speed: Math.random() * 100,
    acceleration: Accelleration.Accellerate,
    isRecycled: true,
    repelStrength: 0.5 + Math.random() / 2,
  }

  constructor({
    x,
    y,
    z,
    dimensions,
    positionOffsets,
    repelPoint,
    config,
  }: ParticleProps) {
    this.dimensions = dimensions
    this.repelPoint = repelPoint
    this.positionOffsets = positionOffsets
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
      decellerate: this.config.rangeZ![1] - this.age / 20,
    }[this.config.acceleration!]
  }

  init = ({ x, y, z }: Partial<ParticleProps> = {}) => {
    this.age = 1
    this.x = x ?? randomNumber(1, this.dimensions[0]) + this.scrollTop
    this.y = y ?? randomNumber(1, this.dimensions[1])
    this.z =
      z ?? this.config.isDistantSpawn
        ? this.config.rangeZ![0]
        : randomNumber(1, 9)
  }

  reflectOrKill = (axis: 'x' | 'y' | 'z') => {
    if (axis === 'z') {
      if (
        this.z + this.dz < this.config.rangeZ![0] ||
        this.z + this.dz > this.config.rangeZ![1]
      ) {
        if (this.config.isReflectedZ) {
          this.dz = -this.dz
        } else {
          this.isDead = true
        }
      }
      return
    }
    if (
      this[axis] + this[`d${axis}`] >
        this.dimensions[axis === 'x' ? 0 : 1] + this.padding ||
      this[axis] + this[`d${axis}`] < -this.padding
    ) {
      if (this.config.isWallReflected) {
        this[`d${axis}`] = -this[`d${axis}`]
      } else {
        this.isDead = true
      }
    }
  }

  setVelocity = () => {
    if (this.repelPoint?.some(Boolean)) {
      const xDist = this.x - this.repelPoint[0]
      const yDist = this.y - this.repelPoint[1]
      const magnitude =
        Math.sqrt(xDist * xDist + yDist * yDist) / this.config.repelStrength!
      this.dx = (xDist * this.accelerator * this.config.speed!) / magnitude
      this.dy = (yDist * this.accelerator * this.config.speed!) / magnitude
    }
    if (this.forceDirection && this.forceAmount) {
      const radians = (this.forceDirection * Math.PI) / 180
      this.fx = this.forceAmount * Math.cos(radians)
      this.fy = this.forceAmount * Math.sin(radians)
    }
  }

  move = ({
    dimensions,
    repelPoint,
    positionOffsets,
    config,
  }: ParticleProps) => {
    this.dimensions = dimensions
    this.repelPoint = repelPoint
    this.positionOffsets = positionOffsets
    this.config = {
      ...this.config,
      ...config,
    }

    // Recycle or ignore dead particles
    if (this.isDead) {
      if (!this.config.isRecycled) return
      if (this.age > 1) {
        this.init()
        return
      } else {
        this.isDead = false
      }
    }

    this.age++

    this.setVelocity()

    this.x += this.dx + this.fx + positionOffsets.offsets[0]
    this.y += this.dy + this.fy + positionOffsets.offsets[1]

    if (this.config.moveZ !== MoveZ.None) {
      this.z +=
        this.dz *
        this.accelerator *
        (this.config.speed! / 100) *
        (this.config.moveZ === MoveZ.Forwards ? 1 : -1)
    }

    this.reflectOrKill('x')
    this.reflectOrKill('y')
    this.reflectOrKill('z')
  }
}

export default Particle
