import React from 'react'
import { Zoom } from 'react-reveal'

const About = () => {
  return (
    <div className='py-20 my-10 text-center relative md:px-[100px] md:mx-[100px] mx-5' id="about">
        <Zoom  >
          <p className='md:text-5xl text-3xl text-white mx-2' style={{fontFamily : 'Luckiest Guy, cursive'}}>
        10,000 Hand Made NFT collectables by some of Africa's Most Talented Young Artists
        </p>   
        </Zoom>
       
        <img src="/icons/frame 572.png" className='mx-auto md:h-14 h-12 my-4'/>

        <img src="/icons/person1.png" className='absolute  hidden md:block top-1 left-36 h-10'/>
        <img src="/icons/person2.png" className='h-8 absolute hidden md:block top-1 right-40'/>
        <img src="/icons/person3.png" className='h-14 absolute bottom-0 hidden md:block right-40'/>
        <img src="/icons/person4.png" className='h-10 absolute bottom-0 hidden md:block left-40'/>
        <img src="/icons/person5.png" className='h-18 absolute top-2/4 hidden md:block left-0'/>
        <img src="/icons/person6.png" className='h-18 absolute top-2/4 hidden md:block right-0'/>
    </div>
  )
}

export default About
