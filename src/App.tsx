import { useState, FC } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SingleMovie from './components/SingleMovie'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const App: FC = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/movies/movie/:id' element={<SingleMovie />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
