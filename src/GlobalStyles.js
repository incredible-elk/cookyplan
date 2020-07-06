import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --primary: #9AC1B0; 
  --background: #F6F8F7;
  --color: #505255;
  --grey: #979797;
}

* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  background-color: var(--background);
  font-family: ${(props) => props.margin || 'Prompt'};
  font-size: 1rem;
  color: var(--color);
}
`
