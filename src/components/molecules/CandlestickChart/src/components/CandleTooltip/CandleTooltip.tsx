import Tooltip from '@pi-lib/tooltip'
import { useEffect, useRef, useState } from 'react'
import { formatDate } from '../../utils'
import { CandleTooltipProps } from './CandleTooltip.types'

export const CandleTooltip = ({ item }: CandleTooltipProps) => {
  const [displayItem, setDisplayItem] = useState(item)
  const displayTimeout = useRef<any>()

  // Smooth transition when changing/hiding item
  useEffect(() => {
    if (item) {
      setDisplayItem(item)
      clearTimeout(displayTimeout.current)
      return
    }
    displayTimeout.current = setTimeout(() => setDisplayItem(item), 200)
  }, [item])

  return (
    <Tooltip isVisible={!!item}>
      <div>
        <strong>{formatDate(displayItem?.date)}</strong>
      </div>
      <div>
        Open: <em>{displayItem?.open}</em>
      </div>
      <div>
        Close: <em>{displayItem?.close}</em>
      </div>
      <div>
        High: <em>{displayItem?.high}</em>
      </div>
      <div>
        Low: <em>{displayItem?.low}</em>
      </div>
    </Tooltip>
  )
}

export default CandleTooltip
