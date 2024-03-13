import { ParticleConfig } from '@pi-lib/particles/src/types'
import { TestId } from '@pi-lib/types'

export interface ParticleBackgroundProps
  extends React.HTMLProps<HTMLElement>,
    TestId,
    ParticleConfig {
  count: number
}
