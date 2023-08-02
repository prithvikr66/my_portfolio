import React from 'react'
import { FaConnectdevelop } from "react-icons/fa"

const SkillsCard = () => {
    return (
        <div className=' w-3xl p-5 text-center flex flex-row-reverse sm:flex-col items-center gap-8  '>
            <FaConnectdevelop className=' text-9xl text-textBlue mx-auto' />
            <div><h3 className=' text-2xl font-semibold p-4'>Development</h3>
                <p>Web Development</p>
                <ul>
                    <li>Next.js/React.js</li>
                    <li>TailwindCSS/SASS</li>
                    <li>Node.js/Express.js</li>
                </ul>
                <p>Blockchain Development</p>
                <ul>
                    <li>Solidity</li>
                    <li>Foundry</li>
                    <li>Chainlink</li>
                </ul></div>

        </div>
    )
}

export default SkillsCard