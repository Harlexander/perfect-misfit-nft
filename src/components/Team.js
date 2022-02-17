import React from 'react'

const Team = () => {
  return (
    <div className='md:mx-40 mx-5 text-white'>
        <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-14 text-6xl text-center">MEET THE TEAM</p>

        <div className='grid md:grid-cols-3 gap-12'>
            <div className='border p-2 md:p-5'>
                <img src="/nft/1.jfif" className='h-45'/>
                <div className='flex justify-between py-3'>
                    <div>
                       <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-xl md:text-2xl">Oladipupo</p>
                       <p className='font-light text-sm'>CEO</p>
                    </div>
                    
                        <img src="/icons/linkedin.png" className='self-center h-6 md:h-12 my-auto'/>
                    
                </div>
            </div>
            <div className='border p-2 md:p-5'>
                <img src="/nft/2.jfif" className='h-45'/>
                <div className='flex justify-between py-3'>
                    <div>
                       <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-xl md:text-2xl">SOLOMON N.</p>
                       <p className='font-light text-sm'>Designer</p>
                    </div>
                    
                        <img src="/icons/linkedin.png" className='self-center h-6 md:h-12 my-auto'/>
                    
                </div>
            </div>
            <div className='border p-2 md:p-5'>
                <img src="/nft/3.jfif" className='h-45'/>
                <div className='flex justify-between py-3'>
                    <div>
                       <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-xl md:text-2xl">JANE ZIGGY</p>
                       <p className='font-light text-sm'>Developer</p>
                    </div>
                    
                        <img src="/icons/linkedin.png" className='self-center h-6 md:h-12 my-auto'/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team