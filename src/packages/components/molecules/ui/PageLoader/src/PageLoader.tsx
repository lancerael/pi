import ModalScreen from '@pi-lib/modal-screen'
import Loader from '@pi-lib/loader'
import { PageLoaderProps } from './PageLoader.types'

/**
 * A React component for a page blocking loader
 */
export const PageLoader = ({ isActive }: PageLoaderProps) => (
  <ModalScreen {...{ isActive }} isUnclickable>
    <Loader isLarge />
  </ModalScreen>
)

export default PageLoader
