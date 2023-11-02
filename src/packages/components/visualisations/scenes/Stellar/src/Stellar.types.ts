import { PropsWithChildren } from 'react'

export interface StellarProps extends PropsWithChildren {
  /**
   * The number of stars in the cosmos
   */
  starCount?: number
}

export type Coords = [number, number]

export interface StarPos {
  coords: Coords
  age: number
}

export interface Star extends StarPos {
  id: string
  color: string
}

export interface StarStyle extends Pick<Star, 'id'> {
  style: React.CSSProperties
}
