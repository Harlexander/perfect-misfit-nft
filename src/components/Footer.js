import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='md:mx-20 mx-5 text-white flex justify-between py-10 md:py-20'>
            <div>
                <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-3xl">PERFECT <br/> MISFITS</p>
                <p className='text-[#6666]'>Copywrite @perfectmisfits 2022</p>
            </div>
            <div className='hidden md:block'>
                <a href='#' className='mx-2'>Home</a>
                <a href='#' className='mx-2'>About</a>
                <a href='#' className='mx-2'>Roadmap</a>
            </div>
            <div>
                  <a href='https://twitter.com/perfect_misfits?t=_imwxg4oHBDM0qKUyKv17g&s=08'><img src='/icons/twitter.png' className='h-5 inline px-5'/></a>
                  <a href='https://discord.gg/chCtXyBQ'><img src='/icons/discord.png' className='h-5 inline'/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer