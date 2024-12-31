import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import  HomePage from '../src/Pages/home.page'
import SignInPage from '../src/Pages/signIn'
import SignUpPage from '../src/Pages/signUp'
import Tab from '../src/Tab'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/category/:categoryName" element={<HomePage />} />
      </Routes>
    </BrowserRouter>

)
