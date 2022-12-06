import { useState } from 'react'
import ThemeContextProvider from './components/context/ThemeContextProvider'
import JobAPIContextProvider from './components/context/JobAPIContextProvider'
import Header from './components/header/Header'
import LockBackground from './components/LockBackground'
import PopFilterSearch from './components/PopFilterSearch'
import JobsContainer from './components/JobsContainer'
import './App.css'

function App() {



  return (               
      <ThemeContextProvider>
        <JobAPIContextProvider>
          <PopFilterSearch enableScrolling/>
          <LockBackground />
            <Header />
            <JobsContainer />
        </JobAPIContextProvider>
      </ThemeContextProvider> 
  )
}

export default App
