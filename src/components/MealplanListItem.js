import React from 'react'
import MealInput from './MealInput'
import Checkbox from './Checkbox'
import styled from 'styled-components'

export default function MealplanListItem({
  checked,
  onCheckedChange,
  onValueChange,
  value,
}) {
  return (
    <StyledMealplanListItem>
      <Checkbox checked={checked} onChange={onCheckedChange} />
      <MealInput
        checked={checked}
        className="mealinput"
        onChange={onValueChange}
        value={value}
      />
    </StyledMealplanListItem>
  )
}

const StyledMealplanListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 20px;
  list-style: none;
`
