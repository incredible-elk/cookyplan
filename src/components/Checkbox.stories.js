import React from 'react'
import Checkbox from './Checkbox'
import { action } from '@storybook/addon-actions'

export default {
  component: Checkbox,
  title: 'Checkbox',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const checkboxData = {
  updatedAt: new Date(2020, 6, 5, 20, 30),
}

export const Unchecked = () => <Checkbox onChange={action('checkbox-change')} />
export const Checked = () => (
  <Checkbox onChange={action('checkbox-change')} checked />
)
