import {
  Accelleration,
  Coords,
  ParticleConfig,
  PositionOffsets,
} from './Manager'

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
  padding: number = 50
  isDead: boolean = false
  scrollTop: number = 0

  config: ParticleConfig = {
    lateralRange: [1, 10],
    speed: Math.random(),
    acceleration: Accelleration.Accellerate,
    isRecycled: true,
    isDistantSpawn: true,
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
      decellerate: this.config.lateralRange![1] - this.age / 20,
    }[this.config.acceleration!]
  }

  init = ({ x, y, z }: Partial<ParticleProps> = {}) => {
    this.age = 1
    this.x = x ?? randomNumber(1, this.dimensions[0]) + this.scrollTop
    this.y = y ?? randomNumber(1, this.dimensions[1])
    this.z =
      z ?? this.config.isDistantSpawn
        ? this.config.lateralRange![0]
        : randomNumber(1, 9)
  }

  reflectOrKill = (axis: 'x' | 'y') => {
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
      if (this.config.isLateralReflected) {
        this.dz = -this.dz
      }
    }
  }

  setRepelVelocity = () => {
    if (!this.repelPoint?.some(Boolean)) return
    const xDist = this.x - this.repelPoint[0]
    const yDist = this.y - this.repelPoint[1]
    const magnitude = Math.sqrt(xDist * xDist + yDist * yDist)
    this.dx = (xDist * this.accelerator * this.config.speed!) / magnitude
    this.dy = (yDist * this.accelerator * this.config.speed!) / magnitude
    if (
      this.config.isLateralReflected &&
      (this.z + this.dz < this.config.lateralRange![0] ||
        this.z + this.dz > this.config.lateralRange![1])
    ) {
      this.dz = -this.dz
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

    this.setRepelVelocity()

    this.x += this.dx + positionOffsets.offsets[0] * (this.age / 5)
    this.y += this.dy + positionOffsets.offsets[1] * (this.age / 5)
    this.z += this.dz * this.accelerator * this.config.speed!

    this.reflectOrKill('x')
    this.reflectOrKill('y')
  }
}

export default Particle
