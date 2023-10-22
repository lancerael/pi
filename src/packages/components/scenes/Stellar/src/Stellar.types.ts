export interface StellarProps {
  /**
   * The number of stars in the cosmos
   */
  starCount: number
}

export type Coords = [number, number]

export interface StarPos {
  radius: number
  coords: Coords
  // age: number
}

export interface Star extends StarPos {
  id: string
}
