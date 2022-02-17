import React from 'react'
import Container from './Disclosure'

const FAQ = () => {
  return (
    <div className='container my-40 px-5 md:mx-20 text-white'>
        <div className='md:grid md:grid-cols-4'>
            <div>
            <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-5 text-3xl px-10 md:text-6xl">FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <div className='md:col-span-3'>
                <Container/>
            </div>

        </div>
    </div>
  )
}

export default FAQ