import React from 'react'
import './global.css'
import Logon from './pages/Logon'

function Theme(name){
  name = name.toLowerCase()
  if (name === 'material'){
    const box = document.querySelector('html')
    box.style.setProperty('--background-color', 'red')
  }
  
}

function App() {
  
  return (
    <div>
      <Logon/>
      {Theme('default')}
    </div>
  )
}

export default App;
