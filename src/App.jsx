import { useState, useContext } from 'react'
import ThemeContextProvider from './components/context/ThemeContextProvider'
import JobAPIContextProvider from './components/context/JobAPIContextProvider'
import Header from './components/header/Header'
import PopFilterSearch from './components/PopFilterSearch'
import ContainerAllJob from './components/ContainerAllJob'
import './App.css'

function App() {

  

  return (               
      <ThemeContextProvider>
        <JobAPIContextProvider>
          <PopFilterSearch />
            <Header />
            <div className='min-w-[375px] h-[full-136px] flex justify-center items-center mx-auto'>
              <ContainerAllJob />
            </div>
        </JobAPIContextProvider>
      </ThemeContextProvider> 
  )
}

export default App
