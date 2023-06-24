import React, { useEffect, useMemo, useRef, useState } from 'react'
import { BaseType, select, ValueFn } from 'd3-selection'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { StyledWorldMapContainer } from './WorldMap.style'
import { WorldMapData, WorldMapFeature, WorldMapProps } from './WorldMap.types'

import countries from './data/world.json'

/**
 * A React component for an SVG world map chart
 */
export const WorldMap = ({ label, country }: WorldMapProps) => {
  const svgRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const outerRef = useRef<HTMLDivElement>(null)

  const projection = useMemo(
    () =>
      geoNaturalEarth1()
        .scale(dimensions.width / 4.8)
        .translate([dimensions.width / 2.2, dimensions.height / 1.75]),
    [dimensions]
  )

  useEffect(() => {
    if (!svgRef.current) return
    select(svgRef.current).select('g').remove()
    select(svgRef.current)
      .append('g')
      .selectAll('path')
      .data((countries as WorldMapData).features)
      .join('path')
      .attr('fill', (d: WorldMapFeature) =>
        d.id === country ? 'var(--special)' : 'var(--textSoft)'
      )
      .attr(
        'd',
        geoPath().projection(projection) as ValueFn<BaseType, any, string>
      )
      .style('stroke', (d: WorldMapFeature) =>
        d.id === country ? 'var(--subtle)' : 'var(--specialText)'
      )
  }, [projection, country])

  useEffect(() => {
    const resize = () => {
      setTimeout(() => {
        const { offsetWidth: width = 0, offsetHeight: height = 0 } =
          outerRef.current ?? {}
        setDimensions({ width, height })
      }, 100)
    }
    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <StyledWorldMapContainer ref={outerRef}>
      <div>
        {label}: {country}
      </div>
      <svg ref={svgRef} {...dimensions} />
    </StyledWorldMapContainer>
  )
}

export default WorldMap
