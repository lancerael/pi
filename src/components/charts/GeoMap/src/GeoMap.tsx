import React, { useEffect, useMemo, useRef } from 'react'
import { select } from 'd3-selection'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { StyledGeoMapContainer } from './GeoMap.style'

import countries from './data/world.json'

const mapDimensions = {
  width: 330,
  height: 175,
}

export const GeoMap = ({ label, country }: any) => {
  const mapRef = useRef(null)

  const projection = useMemo(
    () =>
      geoNaturalEarth1()
        .scale((mapDimensions.width - 30) / 1.3 / Math.PI)
        .translate([
          (mapDimensions.width - 10) / 2,
          (mapDimensions.height + 30) / 2,
        ]),
    []
  )

  useEffect(() => {
    select(mapRef.current)
      .append('g')
      .selectAll('path')
      .data(countries.features)
      .join('path')
      .attr('fill', (d: any) =>
        d.id === country ? 'var(--special)' : 'var(--textSoft)'
      )
      .attr('d', geoPath().projection(projection) as any)
      .style('stroke', (d: any) =>
        d.id === country ? 'var(--subtle)' : 'var(--specialText)'
      )
  }, [])

  return (
    <StyledGeoMapContainer style={mapDimensions}>
      <div className="label">
        {label}: {country}
      </div>
      <svg ref={mapRef} {...mapDimensions} />
    </StyledGeoMapContainer>
  )
}

export default GeoMap
