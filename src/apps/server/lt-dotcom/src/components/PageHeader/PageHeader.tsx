import { getTransientProps } from '@pi-lib/utils'
import PageGrid from '@pi-lib/page-grid'
import Banner from '@pi-lib/banner'
import IconButton from '@pi-lib/icon-button'
import Shimmer from '@pi-lib/shimmer'
import { StyledHeader, StyledHeaderSection } from './PageHeader.styles'
import { PageHeaderProps } from './PageHeader.types'

export const PageHeader = ({
  uiTracker,
  travelTracker: { travelSpeed, isTravelling },
  setTravelTracker,
  isComplete,
}: PageHeaderProps) => {
  const iconProps = {
    fontSize: '2.3rem',
    isStroked: true,
    isSimple: true,
  }
  return (
    <StyledHeader {...getTransientProps({ ...{ ...uiTracker, isComplete } })}>
      <PageGrid>
        <Banner hasBackground={false}>
          <StyledHeaderSection>
            <IconButton src="/cube.svg" title="Lance Taylor" {...iconProps} />
            <Shimmer lines={['LT']} behaviour="linger" delay={0} />
          </StyledHeaderSection>
          <StyledHeaderSection>
            <IconButton
              src="/backward.svg"
              title="Slower"
              {...iconProps}
              isStroked={travelSpeed > 0.1}
              onPointerUp={() =>
                travelSpeed > 0.2 &&
                setTravelTracker({
                  isTravelling,
                  travelSpeed: travelSpeed / 1.5,
                })
              }
            />
            <IconButton
              src={`/${isTravelling ? 'pause' : 'play'}.svg`}
              title={isTravelling ? 'Pause' : 'Play'}
              {...iconProps}
              onPointerUp={() =>
                setTravelTracker({ travelSpeed, isTravelling: !isTravelling })
              }
            />
            <IconButton
              src="/backward.svg"
              title="Faster"
              {...iconProps}
              isStroked={travelSpeed < 5}
              rotate={180}
              onPointerUp={() =>
                travelSpeed < 4 &&
                setTravelTracker({
                  isTravelling,
                  travelSpeed: travelSpeed * 1.5,
                })
              }
            />
          </StyledHeaderSection>
        </Banner>
      </PageGrid>
      <div style={{ display: 'none' }} aria-hidden>
        <IconButton src={`/play.svg`} />
      </div>
    </StyledHeader>
  )
}
