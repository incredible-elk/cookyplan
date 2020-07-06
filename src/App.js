import React from 'react'
import Header from './components/Header'
import Checkbox from './components/Checkbox'
import styled from 'styled-components'
import MealplanList from './components/MealplanList'

function App() {
  return (
    <AppGrid>
      <Header />
      <StyledMain>
        <MealplanList />
      </StyledMain>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  height: 100vh;
`

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
