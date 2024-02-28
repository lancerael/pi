import Dimensions, { Size } from './Dimensions'
import Particle, { ParticleConfig, ParticleProps } from './Particle'

import { throttle } from '@pi-lib/utils'

export type Coords = [number, number]

export interface ManagerProps extends Size, Pick<Manager, 'config'> {
  count: number
}

export interface ManagerConfig {
  useParallax: boolean
  useMouseRepel: boolean
  scroller?: typeof window | HTMLElement
}

export default class Manager {
  public dimensions: Dimensions
  public particles: Particle[]
  public config?: Partial<ManagerConfig & ParticleConfig>
  public scrollTop: number = 0
  public offsetY: number = 0
  public offsetTimeout?: NodeJS.Timeout
  public mouseRepelTimeout?: NodeJS.Timeout
  public mouseRepelTransition?: () => void

  constructor({ width, height, count, config }: ManagerProps) {
    this.dimensions = new Dimensions({ width, height })
    this.config = { ...config }
    this.particles = Array.from({ length: count }, this.addParticle)

    // Handle scrolling parralax
    this.config?.scroller?.addEventListener(
      'scroll',
      throttle(() => {
        const { scroller, useParallax } = this.config!
        if (!useParallax) return
        clearTimeout(this.offsetTimeout)

        const scrollTop =
          (scroller instanceof Window
            ? scroller.scrollY
            : scroller?.scrollTop) ?? 0
        this.offsetY = this.scrollTop - scrollTop
        this.scrollTop = scrollTop

        this.offsetTimeout = setTimeout(() => {
          this.offsetY = 0
        }, 500)
      }, 100)
    )

    // Handle mouse repel
    this.config.mouseRepel = this.config?.repel
    this.config?.scroller?.addEventListener(
      'mousemove',
      throttle((e: MouseEvent) => {
        if (!e || !this.config?.useMouseRepel) return
        clearTimeout(this.mouseRepelTimeout)
        const { clientX, clientY } = e
        this.mouseRepelTransition?.()
        // this.mouseRepelTransition = doTransition({
        //   values: this.config.mouseRepel as number[],
        //   targets: [clientX, clientY],
        //   callback: (newTarget) =>
        //     (this.config!.mouseRepel = newTarget as Coords),
        //   intervalId: `particleTarget`,
        //   increments: 5,
        // })
        this.config.mouseRepel = [clientX, clientY]
        this.mouseRepelTimeout = setTimeout(() => {
          this.config!.mouseRepel = this.config?.repel
          this.mouseRepelTransition?.()
        }, 500)
      }, 100)
    )
  }

  addParticle = (particleProps: ParticleProps = {}) => {
    return new Particle({
      ...particleProps,
      dimensions: this.dimensions,
      config: this.config,
    })
  }

  moveParticles = (
    callback: (particle: Particle, i: number) => void = () => {}
  ) => {
    this.particles.forEach((particle, i) => {
      particle.move(this.offsetY, this.scrollTop, this.config?.mouseRepel)
      callback(particle, i)
    })
  }
}
