import React, { FC, useEffect, useRef, useState } from 'react'
import {
  StyledCollapsibleMenu,
  StyledContainer,
  StyledOpener,
  StyledMenuInner,
  StyledMenuItem,
} from './CollapsibleMenu.style'
import { CollapsibleMenuProps } from './CollapsibleMenu.types'
import { Hamburger, Cog } from './assets'

export const CollapsibleMenu: FC<CollapsibleMenuProps> = ({
  items,
  isSettings,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isCollapsed, setIsCollapsed] = useState(true)

  useEffect(() => {
    const onWindowClick = ({ target }: MouseEvent) => {
      if (!!target && !containerRef.current?.contains(target as Node))
        setIsCollapsed(true)
    }
    document.body.addEventListener('click', onWindowClick)
    return () => document.body.removeEventListener('click', onWindowClick)
  }, [])
  return (
    <StyledContainer ref={containerRef}>
      <StyledOpener
        {...{ isCollapsed }}
        onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
      >
        {isSettings ? <Cog /> : <Hamburger />}
      </StyledOpener>
      <StyledCollapsibleMenu {...{ isCollapsed }}>
        <StyledMenuInner {...{ isCollapsed }}>
          {items?.map((item, i) => (
            <StyledMenuItem key={i}>{item}</StyledMenuItem>
          ))}
        </StyledMenuInner>
      </StyledCollapsibleMenu>
    </StyledContainer>
  )
}

export default CollapsibleMenu
