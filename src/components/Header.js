import React from 'react'
import styled from 'styled-components'

export default function Header({ children }) {
  return (
    <StyledHeader>
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
