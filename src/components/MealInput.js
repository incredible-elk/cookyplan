import styled from 'styled-components'
import PropTypes from 'prop-types'

const MealInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Rice with beans',
  name: 'mealInput',
})`
  height: 30px;
  width: 70%;
  margin-left: 10px;
  padding: 5px;
  background: none;
  border: none;
  border-bottom: solid 2px var(--summergreen);
  color: var(--placeholder);
  font-size: 1rem;
  font-family: 'Shadows Into Light Two';
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};

  :focus {
    outline: 1px solid var(--summergreen);
  }

  :placeholder-shown {
    font-family: inherit;
    font-size: 0.8rem;
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
