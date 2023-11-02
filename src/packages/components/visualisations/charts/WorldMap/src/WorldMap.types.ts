/**
 * The main prop interface for the component
 */
export interface WorldMapProps {
  /**
   * The label for the country
   */
  label: string
  /**
   * The country to be highlighted
   */
  country: string
}

/**
 * A feature of the world geojson data
 */
export interface WorldMapFeature {
  type: string
  properties: { name: string }
  geometry: {
    type: string
    coordinates: [number, number][][]
  }
  id: string
}

/**
 * The structure of the data for the world map
 */
export interface WorldMapData {
  type: string
  features: WorldMapFeature[]
}
