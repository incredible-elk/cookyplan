import React from 'react'
import PageNotFound from './PageNotFound'
import { addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

addDecorator(StoryRouter())

export default {
  component: PageNotFound,
  title: 'PageNotFound',
}

export const PageNotFound404 = () => <PageNotFound />
