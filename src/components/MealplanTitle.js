import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

MealplanTitle.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default function MealplanTitle({ value }) {
  return (
    <label>
      <TitleInput
        type="text"
        placeholder="Monday"
        name="listTitle"
        value={value}
      />
    </label>
  )
}

const TitleInput = styled.input`
  height: 30px;
  width: 165px;
  margin: 20px 0 10px 20px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background: none;
  color: var(--placeholder);
  font-size: 1.2rem;
  font-family: 'Shadows Into Light Two';

  :focus {
    outline: 1px solid var(--summergreen);
    border-radius: 8px;
  }

  :placeholder-shown {
    background: var(--grey);
    font-family: inherit;
    font-size: 0.8rem;
  }
`
