import React from 'react'

const Skills = () => {
    return (
        <div className='container pt-10'>
        <div className='grid md:grid-cols-2 gap-20 item-center'></div>
    <div>
         <h1> Skills </h1>
         <h2 className='text-2xl md:text-2xl'>I work with</h2>
         <p className='text-gray-500 pt-2'>
            i'm  web developer.i stay updated my skills.i 'm specilizin in'
         </p>
    </div>
    <div>
    <div className='grid grid-cols-3 text=accent text-5xl'>
     <div className='space-y-2'>
      <h3>Typescript</h3>
      <h3>React.jz</h3>
      <h3>Next.js</h3>
    </div>
    <div className='space-y-2'>
      <h3>Tailwind</h3>
      <h3>CSS</h3>
      <h3>html</h3>
      </div>
        </div>
    </div>
    </div>
    )
}

export default Skills
