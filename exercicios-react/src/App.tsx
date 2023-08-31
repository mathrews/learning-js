
import './AppStyle.css'
import Evento from './components/Evento'
import FormComp from './components/FormComp'

function App() {

  return (
    <>
      <div className="app">

        <Evento numero={1}/>
        <Evento numero={2}/>
        <Evento numero={3}/>

        <FormComp />

      </div>
    </>
  )
}

export default App
