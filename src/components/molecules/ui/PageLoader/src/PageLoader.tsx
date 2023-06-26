import React, { FC } from 'react'
import { PageLoaderProps } from './PageLoader.types'
import ModalScreen from '@pi-lib/modal-screen'
import Loader from '@pi-lib/loader'

/**
 * A React component for a page blocking loader
 */
export const PageLoader: FC<PageLoaderProps> = ({ isActive }) => (
  <ModalScreen {...{ isActive }}>
    <Loader isLarge />
  </ModalScreen>
)

export default PageLoader