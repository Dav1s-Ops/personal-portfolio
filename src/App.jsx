import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <main>
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  )
}

export default App
