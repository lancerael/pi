import React, { useEffect, useState } from 'react'
import { RowProps } from '../../Table.types'
import { StyledDetails, StyledRow } from './Row.styles'

export const Row = ({ cols, i, expandedContent }: RowProps) => {
  const [isItemActive, setIsItemActive] = useState(false)
  const [isDetailVisible, setIsDetailVisible] = useState(false)

  useEffect(() => {
    setIsDetailVisible(isItemActive)
  }, [isItemActive])

  return (
    <>
      <StyledRow
        isOdd={!!(i % 2)}
        isExpandable={!!expandedContent}
        onPointerUp={() =>
          !!expandedContent && setIsItemActive((isActive) => !isActive)
        }
      >
        {cols.map((col, i) => (
          <td key={i}>{col}</td>
        ))}
      </StyledRow>
      {isItemActive && (
        <StyledDetails>
          <td
            colSpan={7}
            style={{
              height: isDetailVisible ? '175px' : '0px',
            }}
          >
            <div
              style={{
                opacity: isDetailVisible ? '1' : '0',
              }}
            >
              {expandedContent}
            </div>
          </td>
        </StyledDetails>
      )}
    </>
  )
}

export default Row
