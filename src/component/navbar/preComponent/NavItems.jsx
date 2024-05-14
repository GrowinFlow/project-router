import React from 'react'
import { NavLink } from 'react-router-dom'
const NavItems = ({changeLink, linkName}) => {
    return (
        <>

            <NavLink to={changeLink} className={({ isActive }) => isActive ? "bg-gray-700 text-gray-100 border-b-4 border-gray-400" : "bg-gray-200 hover:border-gray-400 border-b-4 border-transparent"}>
                <li className='p-4 transition-all duration-150 ease-in list-none mx-2'> {linkName}</li>
            </NavLink>

        </>
    )
}

export default NavItems