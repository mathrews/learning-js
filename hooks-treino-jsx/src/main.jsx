import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginProvider } from './context/LoginContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginProvider>

    <App />
  </LoginProvider>
)
