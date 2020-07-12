import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  --summergreen: #9AC1B0; 
  --background: #F6F8F7;
  --nandor: #505255;
  --input: var(--nandor);
  --grey: #EEEFEF;
  --placeholder: #7c807e; /* --nandor at 70% opacity */ 
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
  font-size: 1.2rem;
  color: var(--inputnandor);
}
`
