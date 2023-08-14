import { SyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  ChartConfigState,
  changeAxisX,
  changeAxisY,
  changeTitle,
} from '../../../state/reducers/chartConfigReducer'
import Input from '@pi-lib/input'

/**
 * Component for the UI to manage the main chart config
 */
const ConfigEditor = () => {
  const { title, axisLabels } = useSelector(
    ({ chartConfig }: { chartConfig: ChartConfigState }) => chartConfig
  )
  const dispatch = useDispatch()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '8px 2px',
        marginBottom: '12px',
      }}
    >
      <Input
        title="Title"
        longTitle="Change the title of the chart"
        value={title}
        onChange={(e: SyntheticEvent<HTMLInputElement>) =>
          dispatch(changeTitle(e.currentTarget?.value))
        }
      />
      <Input
        title="X Axis"
        longTitle="Change the title of the X axis"
        value={axisLabels[1]}
        onChange={(e: SyntheticEvent<HTMLInputElement>) =>
          dispatch(changeAxisX(e.currentTarget.value))
        }
      />
      <Input
        title="Y Axis"
        longTitle="Change the title of the Y axis"
        value={axisLabels[0]}
        onChange={(e: SyntheticEvent<HTMLInputElement>) =>
          dispatch(changeAxisY(e.currentTarget.value))
        }
      />
    </div>
  )
}

export default ConfigEditor
