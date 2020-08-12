import styled from 'styled-components'
import imagePathBin from '../images/deletebin.svg'
import imagePathLogo from '../images/inverted-logo.svg'
import imagePathPlus from '../images/plus.svg'

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
  border: transparent;
  color: var(--summergreen);
  text-align: start;
  padding: 3px 3px 3px 36px;

  -webkit-tap-highlight-color: transparent;

  :focus {
    border: 1px var(--summergreen) solid;
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
  border: transparent;
  transition: visibility 0.01s ease;

  :focus {
    visibility: visible;
    border: 1px var(--summergreen) solid;
    outline: 1px var(--background) solid;
  }

  input:focus + & {
    visibility: visible;
  }

  :hover {
    visibility: visible;
  }
`

export const NavigationButton = styled(Button)`
  width: 80px;
  height: auto;
  background: url(${imagePathLogo}) no-repeat center var(--summergreen);
  background-position: left 23px top 7px;
  margin: 0;
  padding: 40px 5px 5px 5px;
  border-radius: 20px 20px 0 0;
  box-shadow: 30px 30px 60px #d4d5d4;
  color: var(--background);
`

export const AddOrRemoveFromMealplan = styled(Button)`
  width: auto;
  height: auto;
  margin-right: 10px;
  padding: 5px;
  background: var(--summergreen);
  border: 1px solid var(--summergreen);
  color: var(--background);
  text-align: center;

  -webkit-tap-highlight-color: transparent;

  :focus {
    border: 1px var(--summergreen) solid;
    outline: 1px var(--background) solid;
  }
`

export default Button
