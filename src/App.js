import React from 'react'
import Header from './components/Header'
import Checkbox from './components/Checkbox'
import styled from 'styled-components'

function App() {
  return (
    <AppGrid className="App">
      <Header />
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 80px, auto;
  height: 100vh;
`
