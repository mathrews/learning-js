import { useState } from 'react'
import './AppStyle.css'
import SeuNome from './components/StateLift/SeuNome'
import Saudacao from './components/StateLift/Saudacao'

function App() {

  const [nome, setNome] = useState<string>()

  return (
    <>
      <div className="app">
        <h1>State Lift</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={`${nome}`}/>
      </div>
    </>
  )
}

export default App
