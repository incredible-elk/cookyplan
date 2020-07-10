import React from 'react'
import styled from 'styled-components'
import imagePathCheckedCircle from '../images/check-circle.svg'
import imagePathCircle from '../images/circle.svg'

export default function Checkbox({ checked, onChange, id }) {
  return (
    <label>
      <HiddenCheckbox
        checked={checked}
        id={id}
        name="checkbox"
        onChange={onChange}
      />
      <StyledCheckbox checked={checked} />
    </label>
  )
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  height: 24px;
  width: 24px;
  opacity: 0;
`

const StyledCheckbox = styled.div`
  height: 24px;
  width: 24px;
  background: ${(props) =>
    props.checked
      ? `url(${imagePathCheckedCircle})`
      : `url(${imagePathCircle})`};
`
