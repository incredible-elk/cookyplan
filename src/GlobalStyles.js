import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  --summergreen: #9AC1B0; 
  --background: #F6F8F7;
  --inputnandor: #505255;
  --grey: #EEEFEF;
  --placeholder: rgba(124, 128, 126, 70);
  --accentfalcon: #876277;
}

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  height: 100vh;
  background-color: var(--background);
  font-family: 'Prompt', sans-serif;
  font-size: 1rem;
  color: var(--inputnandor);
}
`
