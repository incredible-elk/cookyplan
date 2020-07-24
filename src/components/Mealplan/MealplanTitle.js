import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const MealplanTitle = styled.input.attrs({
  type: 'text',
  placeholder: 'e.g. "Monday", "Dinner"',
  name: 'listtitle',
})`
  height: 30px;
  width: 84%;
  margin: 20px 20px 10px 20px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background: none;
  color: var(--placeholder);
  font-size: 1.4rem;
  font-family: var(--user);

  :focus {
    outline: 1px solid var(--summergreen);
  }

  /* Placeholder color was displayed a lot darker in Chrome than in the other Browsers */
  ::-webkit-input-placeholder {
    color: #a3a8a5;
  }

  :placeholder-shown {
    background: var(--grey);
    font-family: inherit;
    font-size: 1rem;
  }
`

MealplanTitle.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MealplanTitle
