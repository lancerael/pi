import { getTransientProps } from '@pi-lib/utils'
import PageGrid from '@pi-lib/page-grid'
import Banner from '@pi-lib/banner'
import CustomIcon from '@pi-lib/custom-icon'
import IconButton from '@pi-lib/icon-button'
import Shimmer from '@pi-lib/shimmer'
import { StyledHeader, StyledHeaderSection } from './PageHeader.styles'
import { PageHeaderProps } from './PageHeader.types'

const iconProps = {
  height: '2.3rem',
  isStroked: true,
}

export const PageHeader = ({
  uiTracker,
  travelTracker: { travelSpeed, isTravelling },
  setTravelTracker,
  isComplete,
}: PageHeaderProps) => {
  return (
    <StyledHeader {...getTransientProps({ ...{ ...uiTracker, isComplete } })}>
      <PageGrid>
        <Banner>
          <StyledHeaderSection title="Lance Taylor">
            <CustomIcon src="/cube.svg" {...iconProps} />
            <Shimmer lines={['LT']} behaviour="linger" delay={0} />
          </StyledHeaderSection>
          <StyledHeaderSection>
            <IconButton
              src="/backward.svg"
              title="Slower"
              isSimple
              iconProps={{ ...iconProps, isStroked: travelSpeed > 0.2 }}
              onPointerUp={() =>
                travelSpeed > 0.2 &&
                setTravelTracker({
                  isTravelling,
                  travelSpeed: travelSpeed / 2,
                })
              }
            />
            <IconButton
              src={`/${isTravelling ? 'pause' : 'play'}.svg`}
              title={isTravelling ? 'Pause' : 'Play'}
              isSimple
              {...{ iconProps }}
              onPointerUp={() =>
                setTravelTracker({ travelSpeed, isTravelling: !isTravelling })
              }
            />
            <IconButton
              src="/backward.svg"
              title="Faster"
              isSimple
              iconProps={{
                ...iconProps,
                isStroked: travelSpeed < 4,
                rotate: 180,
              }}
              onPointerUp={() =>
                travelSpeed < 4 &&
                setTravelTracker({
                  isTravelling,
                  travelSpeed: travelSpeed * 2,
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
