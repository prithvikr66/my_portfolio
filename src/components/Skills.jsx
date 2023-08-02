import React from 'react'
import SkillsCard from './SkillsCard'

const Skills = () => {
    return (
        <section className=' max-w-7xl sm:h-screen mx-auto p-4 flex flex-col items-center justify-center'>
            <h2 className=' font-black text-center text-4xl text-textBlue'>Skills</h2>
            <p className='text-xl sm:text-2xl font-light text-center p-4 text-gray-200'>A random humurous line for introduction here</p>
            <div className=' mx-auto sm:flex sm:items-center sm:gap-10'>
                <SkillsCard />
                <div class=" hidden sm:block sm:mt-10 sm:w-px sm:h-60 sm:bg-white sm:bg-opacity-50 sm:lex sm:items-center  "></div>
                <SkillsCard />
                <div class=" hidden sm:block sm:mt-10 sm:w-px sm:h-60 sm:bg-white sm:bg-opacity-50 sm:lex sm:items-center  "></div>
                <SkillsCard />

            </div>

        </section>
    )
}

export default Skills