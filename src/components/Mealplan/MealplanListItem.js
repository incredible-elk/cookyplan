import React from 'react'
import styled from 'styled-components'
import { DeleteButton } from '../Button'
import Checkbox from '../Checkbox'
import MealInput from './MealInput'

export default function MealplanListItem({
  checked,
  meal,
  onCheckedChange,
  onRemove,
  onKeyDownEnter,
  onValueChange,
  value,
}) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onKeyDownEnter()
    }
  }

  return (
    <StyledMealplanListItem meal={meal}>
      <Checkbox checked={checked} onChange={onCheckedChange} />
      <MealInput
        checked={checked}
        className="mealinput"
        onChange={onValueChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <DeleteButton name="deletebutton" onClick={() => onRemove(meal.id)} />
    </StyledMealplanListItem>
  )
}

const StyledMealplanListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 20px;
  list-style: none;
`
