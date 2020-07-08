import React from 'react'
import Header from './Header'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  component: Header,
  title: 'Header',
}

export const Mealplan = () => <Header value="Mealplan" />
