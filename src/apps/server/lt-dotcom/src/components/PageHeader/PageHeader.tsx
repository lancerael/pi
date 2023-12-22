import { getTransientProps } from '@pi-lib/styles'
import PageGrid from '@pi-lib/page-grid'
import CustomIcon from '@pi-lib/custom-icon'
import IconButton from '@pi-lib/icon-button'
import Shimmer from '@pi-lib/shimmer'
import {
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderSection,
} from './PageHeader.styles'
import { PageHeaderProps } from './PageHeader.types'
import { memo } from 'react'

const ICON_PROPS = {
  height: '2.3rem',
  isStroked: true,
}

const MIN_SPEED = 0.2
const MAX_SPEED = 4
const MULTIPLIER = 2

export const PageHeader = memo(
  ({
    fullWidth,
    headerState,
    travelTracker: { travelSpeed = 1, isTravelling },
    setTravelTracker,
    isComplete,
  }: PageHeaderProps) => {
    const canReduce = !!isTravelling && travelSpeed > MIN_SPEED
    const canIncrease = !!isTravelling && travelSpeed < MAX_SPEED
    return (
      <StyledHeader
        {...getTransientProps({ fullWidth, headerState, isComplete })}
      >
        <PageGrid>
          <StyledHeaderInner>
            <StyledHeaderSection title="Lance Taylor" href="#top">
              <CustomIcon src="/cube.svg" {...ICON_PROPS} />
              <Shimmer lines={['LT']} behaviour="linger" delay={0} />
            </StyledHeaderSection>
            <StyledHeaderSection>
              <IconButton
                buttonProps={{
                  title: 'Slower',
                  isSimple: true,
                  onClick: () =>
                    canReduce &&
                    setTravelTracker({
                      isTravelling,
                      travelSpeed: travelSpeed / MULTIPLIER,
                    }),
                }}
                iconProps={{
                  ...ICON_PROPS,
                  src: '/backward.svg',
                  isStroked: canReduce,
                }}
              />
              <IconButton
                buttonProps={{
                  title: isTravelling ? 'Pause' : 'Play',
                  isSimple: true,
                  onClick: () => {
                    setTravelTracker({
                      travelSpeed,
                      isTravelling: !isTravelling,
                    })
                  },
                }}
                iconProps={{
                  ...ICON_PROPS,
                  src: `/${isTravelling ? 'pause' : 'play'}.svg`,
                }}
              />
              <IconButton
                buttonProps={{
                  title: 'Faster',
                  isSimple: true,
                  onClick: () =>
                    canIncrease &&
                    setTravelTracker({
                      isTravelling,
                      travelSpeed: travelSpeed * MULTIPLIER,
                    }),
                }}
                iconProps={{
                  ...ICON_PROPS,
                  src: '/backward.svg',
                  isStroked: canIncrease,
                  rotate: 180,
                }}
              />
            </StyledHeaderSection>
          </StyledHeaderInner>
        </PageGrid>
        <div style={{ display: 'none' }} aria-hidden>
          {/* preload images */}
          <IconButton iconProps={{ src: `/pause.svg` }} buttonProps={{}} />
          <IconButton iconProps={{ src: `/play.svg` }} buttonProps={{}} />
        </div>
      </StyledHeader>
    )
  }
)
