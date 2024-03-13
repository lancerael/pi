import {
  Coords,
  ManagerProps,
  ParticleConfig,
  ParticleProps,
  PositionOffsets,
} from '../types'

import Particle from './Particle'
import doTransition from '@pi-lib/do-transition'
import { throttle } from '@pi-lib/utils'

export default class Manager {
  public container: typeof window | HTMLElement = window
  public particles: Particle[]
  public config: Partial<ParticleConfig> = {}
  public positionOffsets: PositionOffsets = {
    scroll: [0, 0],
    offsets: [0, 0],
  }
  public offsetTimeout?: NodeJS.Timeout
  public mouseRepelTimeout?: NodeJS.Timeout
  public mouseRepelTransition?: () => void
  public repelPoint?: Coords

  constructor({ count, container, config }: ManagerProps) {
    this.container = container ?? this.container
    this.config = config ?? {}
    this.particles = Array.from({ length: count }, this.addParticle)

    // Handle scrolling parralax
    this.container.addEventListener(
      'scroll',
      throttle(() => {
        if (!this.config.isParallax) return

        clearTimeout(this.offsetTimeout)

        const scroll: Coords =
          this.container instanceof Window
            ? [this.container.scrollX, this.container.scrollY]
            : [this.container.scrollTop, this.container.scrollLeft]

        const offsets: Coords = [
          this.positionOffsets.scroll[0] - scroll[0],
          this.positionOffsets.scroll[1] - scroll[1],
        ]

        this.positionOffsets = {
          scroll,
          offsets,
        }

        this.offsetTimeout = setTimeout(() => {
          this.positionOffsets.offsets = [0, 0]
        }, 500)
      }, 100)
    )

    // Handle mouse repel
    this.container.addEventListener(
      'mousemove',
      throttle((e: MouseEvent) => {
        if (!e || !this.config.isMouseRepelled) return
        clearTimeout(this.mouseRepelTimeout)
        this.mouseRepelTransition?.()
        const { clientX, clientY } = e
        if (this.repelPoint || this.centerRepelPoint) {
          this.setMouseRepelTransition(
            (this.repelPoint ?? this.centerRepelPoint) as number[],
            [clientX, clientY]
          )
        } else {
          this.repelPoint = [clientX, clientY]
        }

        this.mouseRepelTimeout = setTimeout(() => {
          if (this.centerRepelPoint) {
            this.setMouseRepelTransition(
              this.repelPoint as number[],
              this.centerRepelPoint
            )
          } else {
            this.repelPoint = undefined
          }
        }, 2000)
      }, 100)
    )
  }

  get dimensions(): Coords {
    return this.container instanceof Window
      ? [this.container.innerWidth, this.container.innerHeight]
      : [this.container.offsetWidth, this.container.offsetHeight]
  }

  get centerRepelPoint(): Coords | undefined {
    return this.config.isCenterRepelled
      ? [this.dimensions[0] / 2, this.dimensions[1] / 2]
      : undefined
  }

  get particleProps(): ParticleProps {
    return {
      dimensions: this.dimensions,
      positionOffsets: this.positionOffsets,
      repelPoint: this.repelPoint ?? this.centerRepelPoint,
      config: this.config,
    }
  }

  setMouseRepelTransition = (values: number[], targets: number[]) => {
    this.mouseRepelTransition = doTransition({
      values,
      targets,
      callback: (newTarget) => {
        this.repelPoint = newTarget as Coords
      },
      intervalId: `particleTarget`,
      increments: 15,
    })
  }

  addParticle = (particleProps: Partial<ParticleProps> = {}) => {
    return new Particle({
      ...particleProps,
      ...this.particleProps,
    })
  }

  moveParticles = (
    callback: (particle: Particle, i: number) => void = () => {}
  ) => {
    this.particles.forEach((particle, i) => {
      particle.move(this.particleProps)
      callback(particle, i)
    })
  }
}