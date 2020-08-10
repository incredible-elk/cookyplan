import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import AddToMealplanContainer from '../components/Recipes/AddToMealplanContainer'
import RecipeDetail from '../components/Recipes/RecipeDetail'
import recipes from '../components/__mocks__/recipes.json'

export default function RecipeDetailPage() {
  let { id } = useParams()
  const index = recipes.findIndex((recipe) => {
    return recipe.id === id
  })
  const { title, ingredients, method } = recipes[index]

  return (
    <>
      <Header
        extraElements={<AddToMealplanContainer title={title} />}
        hasBackArrow
      ></Header>
      <StyledMain>
        <RecipeDetail title={title} ingredients={ingredients} method={method} />
      </StyledMain>
    </>
  )
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-bottom: 100px;
`
