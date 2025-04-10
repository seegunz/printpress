import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Body, Footer } from './components'

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Body />}/>
      </Routes>
      <Footer />
    </Router>
  )
}
