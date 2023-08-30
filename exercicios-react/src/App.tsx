import './AppStyle.css'
import Pessoa from "./components/Pessoa"

function App() {

  return (
    <>
      <div className="app">
        <Pessoa 
          nome="Mateus"
          idade={15}
          profissao="Dev"
          foto='https://minhasaude.proteste.org.br/wp-content/uploads/2022/10/muitas-laranjas.png'
        />
      </div>
    </>
  )
}

export default App
