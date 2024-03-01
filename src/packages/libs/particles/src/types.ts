import Manager from './classes/Manager'

export type Coords = [number, number]

export interface ManagerProps
  extends Partial<Pick<Manager, 'config' | 'container'>> {
  count: number
}

export enum Accelleration {
  Accellerate = 'accellerate',
  None = 'none',
  Decellerate = 'decellerate',
}

export enum MoveZ {
  Forwards = 'forwards',
  None = 'none',
  Backwards = 'backwards',
}

export interface ParticleConfig {
  isParallax?: boolean
  isMouseRepelled?: boolean
  isCenterRepelled?: boolean
  isWallReflected?: boolean
  isReflectedZ?: boolean
  isRecycled?: boolean
  isDistantSpawn?: boolean
  moveZ?: MoveZ
  speed?: number
  acceleration?: Accelleration
  rangeZ?: Coords
  repelPoint?: Coords
  repelStrength?: number
}

export interface PositionOffsets {
  scroll: Coords
  offsets: Coords
}
