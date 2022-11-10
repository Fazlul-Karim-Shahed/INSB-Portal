import React from 'react'
import Admin from './Admin/Admin'
import Login from './Client/Body/Authentication/Login'
import { Routes, Route } from 'react-router'
import Client from './Client/Client'


export default function MainComponents() {


  let admin =
    <Route path={'/admin'} element={<Admin />}>
      <Route path='about' element={'Admin About'} />
    </Route>

  let client =
    <Route path={'/'} element={<Client />}>
      <Route path='about' element={'About'} />
      <Route path='login' element={<Login />} />
      <Route path='contact' element={'Contact'} />
    </Route>

  return (
    <div>
      <Routes>
        {client}
        {admin}
      </Routes>
    </div>
  )
}
