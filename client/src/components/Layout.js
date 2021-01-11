import React, {useState} from 'react'
import Navbar from './navbar/index'
import Sidebar from './sidebar/index'

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </div>
    )
}

export default Layout
