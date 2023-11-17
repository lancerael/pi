import { IconButtonProps } from '@pi-lib/icon-button/src/IconButton.types'
import { PropsWithChildren } from 'react'

export interface CardProps extends PropsWithChildren {
  /**
   * The title for the card
   */
  title?: any
  /**
   * The subtitle for the card
   */
  subTitle?: any
  /**
   * Sets whether the background and border should be clear
   */
  isClear?: boolean
  /**
   * Sets whether the background and border should be clear
   */
  icon?: Pick<IconButtonProps, 'src' | 'title' | 'isStroked' | 'isFilled'>
}
