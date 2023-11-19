import { getTransientProps } from '@pi-lib/utils'
import PageGrid from '@pi-lib/page-grid'
import Banner from '@pi-lib/banner'
import CustomIcon from '@pi-lib/custom-icon'
import IconButton from '@pi-lib/icon-button'
import Shimmer from '@pi-lib/shimmer'
import { StyledHeader, StyledHeaderSection } from './PageHeader.styles'
import { PageHeaderProps } from './PageHeader.types'

const ICON_PROPS = {
  height: '2.3rem',
  isStroked: true,
}

const MIN_SPEED = 0.2
const MAX_SPEED = 4
const MULTIPLIER = 2

export const PageHeader = ({
  uiTracker,
  travelTracker: { travelSpeed = 1, isTravelling },
  setTravelTracker,
  isComplete,
}: PageHeaderProps) => {
  const canReduce = !!isTravelling && travelSpeed > MIN_SPEED
  const canIncrease = !!isTravelling && travelSpeed < MAX_SPEED
  return (
    <StyledHeader {...getTransientProps({ ...{ ...uiTracker, isComplete } })}>
      <PageGrid>
        <Banner>
          <StyledHeaderSection title="Lance Taylor">
            <CustomIcon src="/cube.svg" {...ICON_PROPS} />
            <Shimmer lines={['LT']} behaviour="linger" delay={0} />
          </StyledHeaderSection>
          <StyledHeaderSection>
            <IconButton
              src="/backward.svg"
              title="Slower"
              isSimple
              iconProps={{ ...ICON_PROPS, isStroked: canReduce }}
              onPointerUp={() =>
                canReduce &&
                setTravelTracker({
                  isTravelling,
                  travelSpeed: travelSpeed / MULTIPLIER,
                })
              }
            />
            <IconButton
              src={`/${isTravelling ? 'pause' : 'play'}.svg`}
              title={isTravelling ? 'Pause' : 'Play'}
              isSimple
              iconProps={ICON_PROPS}
              onPointerUp={() =>
                setTravelTracker({ travelSpeed, isTravelling: !isTravelling })
              }
            />
            <IconButton
              src="/backward.svg"
              title="Faster"
              isSimple
              iconProps={{
                ...ICON_PROPS,
                isStroked: canIncrease,
                rotate: 180,
              }}
              onPointerUp={() =>
                canIncrease &&
                setTravelTracker({
                  isTravelling,
                  travelSpeed: travelSpeed * MULTIPLIER,
                })
              }
            />
          </StyledHeaderSection>
        </Banner>
      </PageGrid>
      <div style={{ display: 'none' }} aria-hidden>
        <IconButton src={`/pause.svg`} />
        <IconButton src={`/play.svg`} />
      </div>
    </StyledHeader>
  )
}
