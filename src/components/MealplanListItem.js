import React from 'react'
import MealInput from './MealInput'
import Checkbox from './Checkbox'
import styled from 'styled-components'

export default function MealplanListItem({
  checked,
  onCheckedChange,
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
    <StyledMealplanListItem>
      <Checkbox checked={checked} onChange={onCheckedChange} />
      <MealInput
        checked={checked}
        className="mealinput"
        onChange={onValueChange}
        onKeyDown={handleKeyDown}
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
