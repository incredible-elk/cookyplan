import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  --summergreen: #9AC1B0; 
  --background: #F6F8F7;
  --nandor: #505255;
  --input: var(--nandor);
  --grey: #EEEFEF;
  --placeholder: rgba(124, 128, 126, 70);
  --falcon: #876277;
  --accent: var(--falcon);
  --app: 'Prompt', sans-serif;
  --user: 'Shadows Into Light Two', cursive;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  background-color: var(--background);
  font-family: var(--app);
  font-size: 1rem;
  color: var(--inputnandor);
}
`
