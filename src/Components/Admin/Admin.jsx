import React from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router'

export default function Admin() {

    let location = useLocation()

    return (
        <div>
            {location.pathname === '/admin' || location.pathname === '/admin/' ? <div>

                <h1 className='py-5 text-center text-danger'>Admin Panel</h1>

            </div> : <Outlet />}
        </div>
    )
}
