import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Usercard from './Component/Usercard';


// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
<Usercard/>
  </StrictMode>,
);
