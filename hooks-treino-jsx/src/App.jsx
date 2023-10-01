import './App.css'
import Ways from './routes/Ways'

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <Ways/>
    </div>
  )
}

export default App
