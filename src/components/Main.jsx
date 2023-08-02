import React from 'react'
import Button from './Button'
import Image from 'next/image'
import me from "../../public/me.jpg"
const Home = () => {
    return (
        <section className=' sm:h-screen sm:max-w-7xl mx-auto  px-4 py-5  flex flex-col justify-center'>
            <div className='flex flex-col sm:flex items-center justify-center gap-10 sm:flex-row-reverse '>
                {/* <div className=' border rounded-xl w-96 h-96 border-textBlue relative top-5 left-5'></div> */}
                <Image src={me} alt="" className=' w-64 sm:w-96 rounded-xl' />

                <div>
                    <p className='text-center sm:text-left text-2xl px-2 font-semibold'>Hey, I'm</p>
                    <h2 className='text-center sm:text-left font-black text-textBlue text-6xl sm:text-7xl my-2'>Prithvi</h2>
                    <p className='text-center sm:text-left font-semibold text-3xl sm:text-4xl max-w-2xl my-4'>Designer , Developer & Cybersecurity Enthusiasist.</p>
                    <p className='italic font-light leading-7 tracking-wider text-center sm:text-left'>I'm a Web Developer and UI/UX designer proficient in React.js, Next.js and Figma.<br />I'm also Exploring Blockchain and in the process of learning Solidity and Foundry.<br />Apart from Technical Skills i'm a good observer and a decent cook :p</p>
                    <h3 className=' text-textBlue font-semibold my-2 text-right max-w-2xl px-9'>Learn More..</h3>

                    <div className=' my-4 flex items-center justify-center sm:items-start sm:justify-start'>  <Button text="Check my Projects" link="#" /></div>
                </div>
            </div>
        </section>
    )
}

export default Home