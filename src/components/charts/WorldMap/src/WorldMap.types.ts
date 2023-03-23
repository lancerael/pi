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

export interface WorldMapFeature {
  type: string
  properties: { name: string }
  geometry: {
    type: string
    coordinates: [number, number][][]
  }
  id: string
}

export interface WorldMapData {
  type: string
  features: WorldMapFeature[]
}
