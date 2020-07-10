import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import MealplanList from './components/MealplanList'

function App() {
  return (
    <AppGrid>
      <Header />
      <StyledMain>
        <MealplanList
          mealplanList={{
            title: '',
            items: [{ id: 'initial', item: '', done: false }],
          }}
        />
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
