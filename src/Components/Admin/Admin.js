import React from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router'

export default function Admin() {

    let location = useLocation()

    return (
        <div>
            {location.pathname === '/admin' ? <div>

                Admin home

            </div> : <Outlet />}
        </div>
    )
}
