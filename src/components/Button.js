import styled from 'styled-components'
import imagePathPlus from '../images/plus.svg'
import imagePathBin from '../images/deletebin.svg'

const Button = styled.button`
  margin: 10px 0 0 20px;
  padding: 5px;
  width: 75%;
  height: 30px;
  background: var(--summergreen);
  opacity: 90%;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-family: var(--app);
  font-size: 1rem;
  color: var(--background);
  cursor: pointer;
`

export const AddButton = styled(Button)`
  background: url(${imagePathPlus}) no-repeat;
  background-position: left 5px top 7px;
  color: var(--summergreen);
  text-align: start;
  padding-left: 36px;

  :focus {
    outline: 1px var(--background) solid;
  }
`

export const DeleteButton = styled(Button)`
  visibility: hidden;
  margin: 0 0 0 10px;
  padding: 0;
  width: 7%;
  background: url(${imagePathBin}) no-repeat center;
  opacity: 100%;
  transition: visibility 0.01s ease;

  :focus {
    visibility: visible;
    outline: 1px var(--background) solid;
  }

  input:focus + & {
    visibility: visible;
  }

  :hover {
    visibility: visible;
  }
`

export default Button
