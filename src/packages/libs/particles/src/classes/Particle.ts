import {
  Accelleration,
  Coords,
  MoveZ,
  ParticleConfig,
  ParticleProps,
  PositionOffsets,
} from '../types'

export const randomNumber = (start: number, end: number) => {
  return Math.floor(Math.random() * end) + start
}

class Particle {
  dimensions: Coords
  positionOffsets: PositionOffsets
  repelPoint?: Coords
  x: number = 0
  y: number = 0
  z: number = 0

  // Tracking
  age: number = 1
  isDead: boolean = false

  // Acceleration
  dx: number = randomNumber(0, 2) - 1 || 1
  dy: number = randomNumber(0, 2) - 1 || 1
  dz: number = 0.05

  // Force
  fx: number = 0
  fy: number = 0

  // Config
  padding: number = 0
  scrollTop: number = 0
  config: ParticleConfig = {
    rangeZ: [1, 20],
    moveZ: MoveZ.None,
    speed: Math.random(),
    acceleration: Accelleration.Accellerate,
    isRecycled: true,
    repelStrength: 1.5 + Math.random() / 2,
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
    // console.log(this.config.speed)
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
      z ??
      this.config.size ??
      (this.config.isDistantSpawn ? this.config.rangeZ![0] : randomNumber(1, 9))
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
    const { repelStrength, speed, forceAmount, forceDirection } = this.config
    if (this.repelPoint?.some(Boolean)) {
      const xDist = this.x - this.repelPoint[0]
      const yDist = this.y - this.repelPoint[1]
      const magnitude =
        Math.sqrt(xDist * xDist + yDist * yDist) / repelStrength!
      this.dx = (xDist * this.accelerator) / magnitude
      this.dy = (yDist * this.accelerator) / magnitude
    }
    if (forceDirection && forceAmount) {
      const radians = (forceDirection * Math.PI) / 180
      this.fx = forceAmount * Math.cos(radians)
      this.fy = forceAmount * Math.sin(radians)
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

    this.x +=
      this.dx * this.config.speed! + this.fx + positionOffsets.offsets[0]
    this.y +=
      this.dy * this.config.speed! + this.fy + positionOffsets.offsets[1]

    if (this.config.moveZ !== MoveZ.None) {
      this.z +=
        this.dz *
        this.accelerator *
        (this.config.speed! / 3) *
        (this.config.moveZ === MoveZ.Forwards ? 1 : -1)
    }

    this.reflectOrKill('x')
    this.reflectOrKill('y')
    this.reflectOrKill('z')
  }
}

export default Particle
