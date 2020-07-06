import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

MealInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default function MealInput({ value }) {
  return (
    <>
      <label>
        <StyledMealInput
          type="text"
          placeholder="Rice with beans"
          name="mealInput"
          value={value}
        />
      </label>
    </>
  )
}

const StyledMealInput = styled.input`
  height: 30px;
  width: 240px;
  margin: 10px 0 0 30px;
  padding: 5px;
  background: none;
  border: none;
  border-bottom: solid 2px var(--summergreen);
  color: var(--placeholder);
  font-size: 1rem;
  font-family: 'Shadows Into Light Two';

  :focus {
    outline: 1px solid var(--summergreen);
  }

  :placeholder-shown {
    font-family: inherit;
    font-size: 0.8rem;
  }
`
