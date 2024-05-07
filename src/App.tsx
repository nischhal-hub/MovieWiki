import { useState, FC } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SingleMovie from './components/SingleMovie'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Mylist from './components/Mylist'

const App: FC = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/movies/movie/:id' element={<SingleMovie />}/>
            <Route path='/mylist' element={<Mylist />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
