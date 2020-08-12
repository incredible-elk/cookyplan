import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import imagePathBackArrow from '../images/back-arrow.svg'

export default function Header({ children, extraComponents, hasBackArrow }) {
  return (
    <StyledHeader>
      {hasBackArrow ? (
        <StyledLink data-testid="back-arrow" to="/recipes">
          <img src={imagePathBackArrow} alt="back-arrow" />
        </StyledLink>
      ) : null}
      {extraComponents}
      <h1>{children}</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--summergreen);
`

const StyledLink = styled(Link)`
  position: absolute;
  top: 27px;
  left: 20px;
  transform: scale(1.5);
`
