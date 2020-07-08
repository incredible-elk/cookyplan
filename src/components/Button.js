import styled from 'styled-components'
import imagePathPlus from '../images/plus.svg'

const Button = styled.button`
  margin: 10px 0 0 20px;
  padding: 5px;
  width: 75%;
  height: 30px;
  background: var(--summergreen);
  opacity: 80%;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 0.8rem;
  color: var(--nandor);
`

export const AddButton = styled(Button)`
  background: url(${imagePathPlus}) no-repeat;
  background-position: left 5px top 7px;
  color: var(--summergreen);
  text-align: start;
  padding-left: 36px;
`

export default Button
