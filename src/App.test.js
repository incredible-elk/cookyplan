import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

describe('App.test.js', () => {
  it('renders MealplanPage when the path exactly equals "/"', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(queryByText('Mealplan')).toBeInTheDocument()
  })

  it('renders RecipePage when the path exactly equals "/recipes"', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/recipes']}>
        <App />
      </MemoryRouter>
    )
    expect(queryByText('Recipes')).toBeInTheDocument()
  })

  it('renders RecipeDetailPage when the path exactly equals "/recipes/4"', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/recipes/4']}>
        <App />
      </MemoryRouter>
    )
    expect(queryByText('Banoffee Pie')).toBeInTheDocument()
  })

  it('renders 404 Page when the path is non existing', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/fjdlkjfei']}>
        <App />
      </MemoryRouter>
    )
    expect(queryByText('Oops! Page not found.')).toBeInTheDocument()
  })
})
