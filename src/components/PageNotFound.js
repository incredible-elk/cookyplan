import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function PageNotFound() {
  return (
    <Styled404>
      <img
        src={require('../images/logo404.svg')}
        alt="cookyplan logo - confused looking cooking pot"
      />
      <h1>0ops! Page not found. </h1>
      <Link to="/">go back to Mealplan</Link>
    </Styled404>
  )
}

const Styled404 = styled.div`
  margin: 50% 0;
  text-align: center;

  & > img {
    padding-bottom: 20px;
    transform: scale(3);
  }

  & > h1 {
    margin: 20px 0;
    font-family: var(--user);
    color: var(--nandor);
  }

  & > a {
    font-size: 1rem;
    color: var(--summergreen);
  }
`
