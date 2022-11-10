import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='bg-light'>
            <div className='p-3 d-flex justify-content-between container'>
                <h3>Logo</h3>
                <div>
                    <Link className='px-3' to={'/about'}>About</Link>
                    <Link className='px-3' to={'/contact'}>Contact</Link>
                    <Link className='px-3' to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    )
}
