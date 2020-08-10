import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import MealplanPage from './pages/MealplanPage'
import RecipePage from './pages/RecipePage'
import PageNotFound from './components/PageNotFound'
import RecipeDetailPage from './pages/RecipeDetailPage'

function App() {
  return (
    <AppGrid>
      <Switch>
        <Route exact path="/" component={MealplanPage} />
        <Route exact path="/recipes" component={RecipePage} />
        <Route path="/recipes/:id" component={RecipeDetailPage} />
        <Route component={PageNotFound} />
      </Switch>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  height: 100vh;
  overflow: hidden;
`
