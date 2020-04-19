import React from 'react'
import Routes from './routes.js'
import './global.css'


function Theme(name){
  name = name.toLowerCase()
  if (name === 'material'){
    const box = document.querySelector('html')
    box.style.setProperty('--background-color', 'red')
    const x = 'teste'
  }
  
}

function App() {
  
  return (
    <div>
      <Routes/>
      {Theme('default')}
    </div>
  )
}

export default App;
