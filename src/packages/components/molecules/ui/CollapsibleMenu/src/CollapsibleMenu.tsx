import { useRef } from 'react'
import { useMenuTrigger } from 'react-aria'
import { useMenuTriggerState } from 'react-stately'
import { useWindowClick } from '@pi-lib/use-window-click'
import {
  StyledCollapsibleMenu,
  StyledContainer,
  StyledOpener,
  StyledMenuInner,
  StyledMenuItem,
  StyledMenu,
} from './CollapsibleMenu.style'
import Icon from '@pi-lib/icon'
import { CollapsibleMenuProps } from './CollapsibleMenu.types'
import { PressEvent } from '@react-types/shared'

/**
 * A React component for an expanding/collapsing menu with icons
 */
export const CollapsibleMenu = ({
  items,
  title = 'Expandable menu',
  iconName = 'Hamburger',
  menutriggerProps = {},
}: CollapsibleMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)

  let menuState = useMenuTriggerState(menutriggerProps)
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, menuState, openerRef)
  const { isOpen: $isOpen, setOpen } = menuState

  useWindowClick(() => setOpen(false), containerRef)

  return (
    <StyledContainer ref={containerRef}>
      <StyledOpener
        aria-label={title}
        {...{
          ...menuTriggerProps,
          onPress: (e: PressEvent) => {
            // fix aria event bubbling
            containerRef.current?.dispatchEvent(new MouseEvent('click'))
            menuTriggerProps.onPress?.(e)
          },
          $isOpen,
        }}
        ref={openerRef}
      >
        <Icon
          isBrighter
          iconName={$isOpen ? 'Close' : iconName}
          color={$isOpen ? 'var(--shadow)' : undefined}
        />
      </StyledOpener>
      <StyledCollapsibleMenu {...{ $isOpen }} aria-hidden={!$isOpen}>
        <StyledMenuInner {...{ ...menuProps, $isOpen }}>
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
