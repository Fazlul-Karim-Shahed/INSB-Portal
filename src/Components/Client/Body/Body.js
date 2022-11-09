import React from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router'

export default function Body() {

  let location = useLocation()

  return (
    <div>
      {location.pathname === '/' ? <div>

        Body home

      </div> : <Outlet />}
    </div>
  )
}
