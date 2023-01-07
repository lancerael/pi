import { useEffect, useState } from 'react'
import { RowProps } from './Row.types'

export const Row = ({ cols, i, expandedContent }: RowProps) => {
  const [isItemActive, setIsItemActive] = useState(false)
  const [isDetailVisible, setIsDetailVisible] = useState(false)

  useEffect(() => {
    setIsDetailVisible(isItemActive)
  }, [isItemActive])

  return (
    <>
      <tr
        className={`row${i % 2 ? ' odd' : ''}`}
        onClick={() =>
          !!expandedContent && setIsItemActive((isActive) => !isActive)
        }
      >
        {cols.map((col, i) => (
          <td key={i}>{col}</td>
        ))}
      </tr>
      {isItemActive && (
        <tr className="details">
          <td
            colSpan={7}
            style={{
              height: isDetailVisible ? '175px' : '0px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {expandedContent}
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
