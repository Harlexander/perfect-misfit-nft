import React from 'react'
import { Slide } from 'react-reveal'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div className='md:mx-40 mx-5 text-white'>
        <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-14 text-6xl text-center">MEET THE TEAM</p>

        <div className='grid md:grid-cols-4 gap-12'>
              <div className='border p-2 md:p-5'>
                <img src="/nft/10-min.png" className='w-full'/>
                <div className='flex justify-between py-3'>
                    <div>
                       <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-xl md:text-2xl">Oladipupo</p>
                       <p className='font-light text-sm'>CEO</p>
                    </div>
                    
                        <img src="/icons/twit.png" className='self-center h-6 md:h-12 my-auto rounded'/>                    
                </div>
            </div>   
              <div className='border p-2 md:p-5'>
                <img src="/nft/2-min.png" className='w-full'/>
                <div className='flex justify-between py-3'>
                    <div>
                       <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-xl md:text-2xl">Daisy</p>
                       <p className='font-light text-sm'>NFT Designer</p>
                    </div>
                    
                        <img src="/icons/twit.png" className='self-center h-6 md:h-12 my-auto rounded'/>                    
                </div>
            </div>   
                <div className='border p-2 md:p-5'>
                <img src="/nft/4-min.png" className='w-full'/>
                <div className='flex justify-between py-3'>
                    <div>
                       <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-xl md:text-2xl">SOLOMON</p>
                       <p className='font-light text-sm'>UI/UX Designer</p>
                    </div>
                    
                        <img src="/icons/twit.png" className='self-center h-6 md:h-12 my-auto rounded'/>                    
                </div>
            </div> 
          <div className='border p-2 md:p-5'>
                <img src="/nft/3-min.png" className='w-full'/>
                <div className='flex justify-between py-3'>
                    <div>
                       <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-xl md:text-2xl">PEACHY</p>
                       <p className='font-light text-sm'>Developer</p>
                    </div>
                    
                        <img src="/icons/linkedin.png" className='self-center h-6 md:h-12 my-auto rounded'/>                    
                </div>
            </div>
            </div>
        <div className='flex justify-center'>
            <a href="/team">
                <button class="learn-more mt-10 mx-auto meet text-center shadow">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-l">Meet The Team</span>
                </button>
            </a>
            
        </div>
        
    </div>
  )
}

export default Team