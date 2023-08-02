import Link from 'next/link'
import React from 'react'

const Button = ({ text, link }) => {
    return (
        <Link href={link}>  <button className=' border px-4 py-2 rounded font-semibold border-textBlue hover:bg-hoverColor'>{text}</button></Link>
    )
}

export default Button