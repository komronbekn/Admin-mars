import React from 'react'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Students from './Pages/Students'
import Guruhlar from './Pages/Guruhlar'
import Magazin from './Pages/Magazin'
import Mentorlar from './Pages/Mentorlar'
import Sms from './Pages/Sms'
import Coins from './Pages/Coins'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/students' element={<Students />} />
          <Route path='/groups' element={<Guruhlar />} />
          <Route path='/shop' element={<Magazin />} />
          <Route path='/mentors' element={<Mentorlar />} />
          <Route path='/sms' element={<Sms />} />
          <Route path='/coins' element={<Coins />} />
        </Routes>
      </div>

    </div>
  )
}

export default App