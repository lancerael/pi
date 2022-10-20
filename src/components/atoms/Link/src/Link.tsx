import React from 'react'
import { StyledLink } from './Link.style'
import { LinkProps } from './Link.types';

export const Link = ({ href, text }: LinkProps) => <StyledLink {...{href}}>{text}</StyledLink>

export default Link
