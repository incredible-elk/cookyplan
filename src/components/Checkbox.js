import React from 'react'
import styled from 'styled-components'
import imagePathCheckedCircle from '../images/check-circle.svg'
import imagePathCircle from '../images/circle.svg'

export default function Checkbox({ checked, onChange }) {
  return (
    <label>
      <HideCheckbox
        onChange={onChange}
        checked={checked}
        type="checkbox"
        name="checkbox"
      />
      <StyledCheckbox checked={checked} />
    </label>
  )
}

const HideCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  margin-left: 20px;
  height: 24px;
  width: 24px;
  background: ${(props) =>
    props.checked
      ? `url(${imagePathCheckedCircle})`
      : `url(${imagePathCircle})`};
`
