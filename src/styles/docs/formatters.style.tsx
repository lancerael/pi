import React, { useRef, useState } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 4rem auto;
  width: 100%;
  max-width: 1000px;
  font-size: 0.9em;
  background-color: var(--subtle);
  color: var(--text);
`

export const ShowLight = styled.span`
  @media (prefers-color-scheme: dark) {
    display: none;
  }
`
export const ShowDark = styled.span`
  @media (prefers-color-scheme: light) {
    display: none;
  }
`

const camelKey = (name: string) => {
  const camelPieces = name.split('-')
  return camelPieces.length === 1
    ? name
    : `${camelPieces[0]}${camelPieces[1]
        .charAt(0)
        .toUpperCase()}${camelPieces[1].slice(1)}`
}

export const Generator: React.FC = (): any => {
  const ref = useRef<any>(null)
  const [theme, setTheme] = useState('')
  const style = { width: '400px', height: '200px' }

  const onChange = () => {
    setTheme(
      ref.current?.value
        ? JSON.stringify(
            Object.entries(JSON.parse(ref.current.value))
              .filter(([key]) => ['light', 'dark'].includes(key))
              .reduce(
                (acc, [key, val]) => ({
                  ...acc,
                  [key]: (val as any[]).reduce(
                    (acc2, { name, hex }) => ({
                      ...acc2,
                      [camelKey(name)]: hex,
                    }),
                    {}
                  ),
                }),
                {}
              )
          )
        : ''
    )
  }
  return (
    <>
      <h3>INPUT</h3>
      <br />
      <textarea {...{ ref, onChange, style }}></textarea>
      <br />
      <br />
      <h3>OUTPUT</h3>
      <br />
      <textarea {...{ style }} value={theme} readOnly></textarea>
    </>
  )
}
