import { PropsWithChildren } from 'react'

/**
 * Props for the Stellar component with additional configuration options.
 * @extends {PropsWithChildren<{}>}
 **/
export interface StellarProps extends PropsWithChildren {
  /**
   * The number of stars to render, defaulting to 10.
   **/
  starCount?: number
  /**
   * Flag indicating movement through stars, defaulting to true.
   **/
  isTravelling?: boolean | null
  /**
   * The speed of travel through space
   **/
  travelSpeed?: number
  /**
   * Flag to display debug information, defaulting to false.
   **/
  showDebug?: boolean
  /**
   * Callback to fire when the user scrolls
   **/
  scrollCallback?: (scrollTop: number) => void
}

/**
 * Represents coordinates in a two-dimensional space.
 **/
export type Coords = [number, number]

/**
 * Dimensions and target position within the stellar space.
 **/
export interface StellarCoords {
  /**
   * Width and height of the space.
   **/
  dimensions: Coords
  /**
   * Target coordinates for star movement.
   **/
  target: Coords
}

/**
 * Position and age of a star.
 **/
export interface StarPos {
  /**
   * Coordinates of the star.
   **/
  coords: Coords
  /**
   * Age of the star affecting behavior.
   **/
  age: number
}

/**
 * Aditional info about a star needed for rendering in the dom.
 **/
export interface Star extends StarPos {
  /**
   * Unique identifier for the star.
   **/
  id: string
  /**
   * Color of the star for styling.
   **/
  color: string
}

/**
 * Style information for a star used in rendering.
 **/
export interface StarStyle extends Pick<Star, 'id'> {
  /**
   * CSS properties for the star's appearance.
   **/
  style: React.CSSProperties
}

export type TravelTrackerProps = Pick<
  StellarProps,
  'travelSpeed' | 'isTravelling'
>

/**
 * Set the starting age for a star - for -1 the age is random
 */
export type SpawnAge = number
