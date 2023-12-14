import { signal } from 'signals-react-safe'
import { PageState } from './page.types'

export const pageState = signal<PageState>({
  uiSizes: {
    fullWidth: 0,
    fullHeight: 0,
  },
  isComplete: false,
  travelTracker: {
    travelSpeed: 1,
    isTravelling: null,
  },
  headerState: 'hidden',
})

export const setState = <K extends keyof PageState>(
  key: K,
  value: PageState[K]
) => {
  pageState.value = {
    ...pageState.value,
    [key]: value,
  }
}
