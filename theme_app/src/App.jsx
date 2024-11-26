import { useState } from 'react'
import './App.css'
import {DarkModeProvider} from './context/DarkModeContext';
import { Container } from './Container';
import Lightswitch from './Lightswitch';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <DarkModeProvider>
        <Container/>
        <Lightswitch/>
      </DarkModeProvider>
    </div>
  )
}

export default App
