import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Film from '../view/Film';
import Cinema from '../view/Cinema';
import Center from '../view/Center';
export default function MRouter() {
  return (
    <div>
         {/* Route 必须包裹在Routes中 */}
      <Routes>
        <Route path='/film' element={<Film></Film>}></Route>
        <Route path='/cinema' element={<Cinema></Cinema>}></Route>
        <Route path='/center' element={<Center></Center>}></Route>
      </Routes>
    </div>
  )
}
