import Dimensions, { Size } from './Dimensions'
import Particle, { ParticleConfig, ParticleProps } from './Particle'

export interface ManagerProps extends Size, Pick<Manager, 'config'> {
  count: number
}

export default class Manager {
  public dimensions: Dimensions
  public particles: Particle[]
  public config?: Partial<ParticleConfig> & {
    scroller?: typeof window | HTMLElement
  }
  public scrollTop: number = 0
  public offsetY: number = 0

  constructor({ width, height, count, config }: ManagerProps) {
    this.dimensions = new Dimensions({ width, height })
    this.config = config
    this.particles = Array.from({ length: count }, this.addParticle)
    this.config?.scroller?.addEventListener('scroll', () => {
      const { scroller } = this.config!
      const scrollTop =
        (scroller instanceof Window ? scroller.scrollY : scroller?.scrollTop) ??
        0
      this.offsetY = this.scrollTop - scrollTop
      this.scrollTop = scrollTop
      setTimeout(() => {
        this.offsetY = 0
      }, 500)
    })
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
      particle.move(this.offsetY, this.scrollTop)
      callback(particle, i)
    })
  }
}
