import React from 'react'
import Header from './Header'

export default {
  component: Header,
  title: 'Header',
}

export const Mealplan = () => <Header>Mealplan</Header>

export const Recipes = () => <Header>Recipes</Header>

export const RecipeDetail = () => <Header hasBackArrow />
