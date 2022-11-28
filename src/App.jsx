import { useState, useContext } from 'react'
import ThemeContextProvider from './components/context/ThemeContextProvider'
import DataContextProvider from './components/context/JobAPIContextProvider'
import Header from './components/header/Header'
import Job from './components/Job'
import ContainerAllJob from './components/ContainerAllJob'
import './App.css'

function App() {

  

  return (               
      <ThemeContextProvider>
        <DataContextProvider>
            <Header />
            <div className='min-w-[375px] flex justify-center items-center mx-auto'>
              <ContainerAllJob />
            </div>
        </DataContextProvider>
      </ThemeContextProvider> 
  )
}

export default App
