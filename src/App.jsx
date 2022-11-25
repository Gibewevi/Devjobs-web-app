import { useState } from 'react'
import Header from './components/Header'
import Devjob from './components/Devjob'
import BodyDevjobs from './components/BodyDevjobs'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
          <Header />
          <div className='min-w-[375px] flex justify-center items-center mx-auto'>
             <BodyDevjobs />
          </div>
      </div>

    </div>
  )
}

export default App
