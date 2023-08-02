import React from 'react'
import Image from 'next/image'
import Logo from "../../public/Logo.png"
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {

    const nav = [{
        name: "About",
        route: "#about"
    },
    {
        name: "Skills",
        route: "#skills"
    },
    {
        name: "Experiences",
        route: "#experiences"
    },
    {
        name: "Projects",
        route: "#projects"
    },
    {
        name: "Contact",
        route: "#contact"
    },
    ]
    return (
        <header className=' bg-inherit shadow-xl'
        >
            <diiv className="sm:max-w-7xl sm:mx-auto sm:h-20 sm:flex sm:p-4 sm:items-center sm:justify-between h-24 ">
                <div>
                    <Image className="w-16 m-4" src={Logo} alt="" ></Image>
                </div>
                <div className=' hidden sm:display-block font-semibold '>
                    {
                        nav.map(i => (
                            <Link className='my-2 hover:text-textBlue' href={i.route}>{i.name}</Link>
                        ))
                    }
                    <Button text="Resume" link="#" />
                </div>

            </diiv>
        </header>
    )
}

export default Navbar