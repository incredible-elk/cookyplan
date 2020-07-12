import React from 'react'
import Checkbox from './Checkbox'
import { action } from '@storybook/addon-actions'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

export const Unchecked = () => <Checkbox onChange={action('checkbox-change')} />
export const Checked = () => (
  <Checkbox onChange={action('checkbox-change')} checked />
)
