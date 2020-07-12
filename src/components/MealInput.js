import styled from 'styled-components'
import PropTypes from 'prop-types'

const MealInput = styled.input.attrs({
  className: 'mealinput',
  placeholder: 'e.g. "Rice with beans"',
  type: 'text',
})`
  height: 30px;
  width: 70%;
  margin-left: 10px;
  padding: 5px;
  background: none;
  border: none;
  border-bottom: solid 2px var(--summergreen);
  color: var(--placeholder);
  font-size: 1.2rem;
  font-family: var(--user);
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};

  /* Placeholder color was displayed a lot darker in Chrome than in the other Browsers */
  ::-webkit-input-placeholder {
    color: #a3a8a5;
  }

  :placeholder-shown {
    font-family: inherit;
    font-size: 1rem;
  }

  :focus {
    outline: 1px solid var(--summergreen);
  }
`

MealInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  onChange: PropTypes.func,
}

export default MealInput
