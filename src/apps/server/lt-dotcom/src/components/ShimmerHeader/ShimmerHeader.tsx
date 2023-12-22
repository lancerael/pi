import Shimmer from '@pi-lib/shimmer'
import { StyledShimmerHeader } from './ShimmerHeader.style'
import { memo } from 'react'

export const ShimmerHeader = memo(({ title }: { title: string }) => {
  return (
    <StyledShimmerHeader className="is-title">
      <Shimmer lines={[title]} behaviour="linger" delay={0} />
    </StyledShimmerHeader>
  )
})

export default ShimmerHeader
