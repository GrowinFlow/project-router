import React from 'react'
import NavItems from './preComponent/NavItems'

const Navbar = () => {

    return (
        <div>
            <nav className='container flex gap-4 items-center bg-gray-200 px-4 text-black'>


                <NavItems changeLink="/" linkName="Home"/>
                <NavItems changeLink="/about" linkName="About"/>
                <NavItems changeLink="/product" linkName="Product"/>
                <NavItems changeLink="/user" linkName="User"/>
                <NavItems changeLink="/un/" linkName="User Params"/>
                <NavItems changeLink="/login" linkName="Login"/>

            </nav>
            <br />
        </div>
    )
}

export default Navbar