import { useState } from 'react'
import { MyContext } from './components/MyContext'
import Header from './components/Header'
import Devjob from './components/Devjob'
import BodyDevjobs from './components/BodyDevjobs'
import './App.css'

function App() {
 const test = {
  name:'joanny'
};
  return (               
    <MyContext.Provider name={test}>
    <div className="App">
        <div>
            <Header />
            <div className='min-w-[375px] flex justify-center items-center mx-auto'>
              <BodyDevjobs />
            </div>
        </div>
    </div>
    </MyContext.Provider>             
  )
}

export default App
