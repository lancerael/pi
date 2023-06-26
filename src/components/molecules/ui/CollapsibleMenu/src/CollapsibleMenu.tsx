import React, { FC, useRef } from 'react'
import { useMenuTrigger } from 'react-aria'
import { useMenuTriggerState } from 'react-stately'
import { useWindowClick } from '@pi-lib/utils'
import {
  StyledCollapsibleMenu,
  StyledContainer,
  StyledOpener,
  StyledMenuInner,
  StyledMenuItem,
  StyledMenu,
} from './CollapsibleMenu.style'
import { CollapsibleMenuProps } from './CollapsibleMenu.types'
import * as icons from './assets'

/**
 * A React component for an expanding/collapsing menu with icons
 */
export const CollapsibleMenu: FC<CollapsibleMenuProps> = ({
  items,
  title = 'Expandable menu',
  icon = 'Hamburger',
  menutriggerProps = {},
}) => {
  const Icon = icons[icon]

  const containerRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)

  let menuState = useMenuTriggerState(menutriggerProps)
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, menuState, openerRef)
  const { isOpen, setOpen } = menuState

  useWindowClick(() => setOpen(false), containerRef)

  return (
    <StyledContainer ref={containerRef}>
      <StyledOpener
        aria-label={title}
        {...{ isOpen, ...menuTriggerProps }}
        ref={openerRef}
      >
        <Icon />
      </StyledOpener>
      <StyledCollapsibleMenu {...{ isOpen }} aria-hidden={!isOpen}>
        <StyledMenuInner {...{ isOpen, ...menuProps }}>
          <StyledMenu>
            {items?.map((item, i) => (
              <StyledMenuItem key={i}>{item}</StyledMenuItem>
            ))}
          </StyledMenu>
        </StyledMenuInner>
      </StyledCollapsibleMenu>
    </StyledContainer>
  )
}

export default CollapsibleMenu