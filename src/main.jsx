import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Firstpage from './assets/Firstpage.jsx' // Sahi path
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/firstpage" element={<Firstpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)