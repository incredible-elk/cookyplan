import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import MealplanPage from './pages/MealplanPage'
import RecipePage from './pages/RecipePage'
import NotFound from './components/NotFound'

function App() {
  return (
    <AppGrid>
      <Switch>
        <Route exact path="/" component={MealplanPage} />
        <Route path="/recipes" component={RecipePage} />
        <Route component={NotFound} />
      </Switch>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  height: 100vh;
`
