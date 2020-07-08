import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const MealplanTitle = styled.input.attrs({
  type: 'text',
  placeholder: 'Monday',
  name: 'listTitle',
})`
  height: 30px;
  width: 80%;
  margin: 20px 20px 10px 20px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background: none;
  color: var(--placeholder);
  font-size: 1.2rem;
  font-family: 'Shadows Into Light Two';

  :focus {
    outline: 1px solid var(--summergreen);
  }

  :placeholder-shown {
    background: var(--grey);
    font-family: inherit;
    font-size: 0.8rem;
  }
`

MealplanTitle.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MealplanTitle
