import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import imagePathBackArrow from '../images/back-arrow.svg'

export default function Header({ children, hasBackArrow }) {
  return (
    <StyledHeader>
      {hasBackArrow ? (
        <StyledLink to="/recipes">
          <img src={imagePathBackArrow} alt="back-arrow" />
        </StyledLink>
      ) : null}
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
