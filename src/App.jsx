import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {

  return (
    <main>
      <SideNav />
      <Main />
      <Work />
      <Projects />
    </main>
  )
}

export default App
