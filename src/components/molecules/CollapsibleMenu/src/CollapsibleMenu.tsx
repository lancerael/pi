import React, { FC, useEffect, useRef, useState } from 'react'
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
import { Hamburger, Cog } from './assets'

export const CollapsibleMenu: FC<CollapsibleMenuProps> = ({
  items,
  isSettings,
  menutriggerProps = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)
  let menuState = useMenuTriggerState(menutriggerProps)
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, menuState, openerRef)
  const { isOpen, setOpen } = menuState
  useWindowClick(() => setOpen(false), containerRef)

  return (
    <StyledContainer ref={containerRef}>
      <StyledOpener
        aria-label="expandable menu trigger"
        {...{ isOpen, ...menuTriggerProps }}
        ref={openerRef}
      >
        {isSettings ? <Cog /> : <Hamburger />}
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
