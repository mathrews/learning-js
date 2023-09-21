import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0) //a quantidade de vezes que um hook é chamado, nunca pode mudar
  const [theme, setTheme] = useState('dark')

  // const [state, setState] = useState<object>({
  //   count: 0,
  //   theme: 'light'
  // }) inutil

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  }

  return (
    <>
      <div>
        <h1>{count}</h1>

        <button onClick={incrementCount}>Increment</button>
      </div>
    </>
  )
}

export default App
