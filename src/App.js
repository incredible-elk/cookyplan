import React, { useCallback } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import MealplanList from './components/MealplanList'
import { saveToLocal, loadFromLocal } from './utils/localStorage'

function App() {
  const handleChange = useCallback(
    (mealplanList) => saveToLocal('mealplanList', mealplanList),
    []
  )

  return (
    <AppGrid>
      <Header />
      <StyledMain>
        <MealplanList
          mealplanList={
            loadFromLocal('mealplanList') || {
              title: '',
              items: [{ id: 'initial', item: '', done: false }],
            }
          }
          name="mealplanList"
          onChange={handleChange}
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
