import { PropsWithChildren } from 'react'

export interface StellarProps extends PropsWithChildren {
  /**
   * The number of stars in the cosmos
   */
  starCount?: number
  /**
   * Is the user flying through the stars?
   */
  isTravelling?: boolean
  /**
   * Should we show the debug info?
   */
  showDebug?: boolean
}

export type Coords = [number, number]

export interface StellarCoords {
  dimensions: Coords
  target: Coords
}

export interface StellarElements {
  container: HTMLDivElement | null
  content: HTMLDivElement | null
}

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
