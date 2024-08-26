import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import HomeBc from './Pages/Home BackUp'
import "./App.css"
import Road from './Components/Road'


const App = () => {
  return (
      <>
          <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path=""  element={<Home/>}/>
                    <Route path="road" element={<Road/>}/>
                    <Route path="bc" element={<HomeBc/>}/>
                </Route>
            </Routes>
          </BrowserRouter>
      </>
  )
}

export default App