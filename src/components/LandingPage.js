import React from 'react'
import { Fade } from 'react-reveal'

const LandingPage = () => {
  return (
    <div>
        <div className='h-96 absolute w-96 top-[-120px] right-0 bg-[#DC14F3] rounded-full blur-circle'>
        </div>
        <div className='h-80 absolute w-80 left-[35%] right-[50%] top-[-120px] bg-[#FFEF66] rounded-full blur-circle'>
        </div>
        <div className='h-60 absolute w-60 top-[-120px] left-0 bg-[#E9757E] rounded-full blur-circle'>
        </div>

        <Fade bottom>
         <div className='grid md:grid-cols-4 text-white gap-3 pt-[7rem] px-5 md:px-20'>
            <div className=''>
                <p className='font-light text-grey py-4'>The Perfect Misfits Collection contains 10,000 Hand Made NFT collectables by some of Africa's Most Talented Young Artists, Hosted on the Ethereum Blockchain</p>
                <button className='px-5 mt-8 py-3 font-bold rounded-full bg-[#D90AFA]'>
                    <img src="/nft/1.jfif" className='rounded-full h-8 outline-2 outline mr-[-10px] inline'/>
                    <img src="/nft/2.jfif" className='rounded-full h-8 outline-2 outline mr-[-10px] inline'/>
                    <img src="/nft/3.jfif" className='rounded-full h-8 outline-2 outline mr-3 inline'/>
                Collect
                </button>

            </div>
            <div className='md:col-span-3 md:px-3'>
                <p className='md:text-7xl text-5xl' style={{fontFamily : 'Luckiest Guy, cursive'}}>The All New NFT
                Collection Celebrating
                Youth Culture
                </p>
            </div>
        </div>
          
        </Fade>
        <Collection/> 

        <div className='flex justify-center md:justify-between flex-wrap md:px-[120px] py-14'>
            <img src="/icons/fantom.png" className='h-8 mx-3 md:h-10 my-4'/>
            <img src="/icons/cmc.png" className='h-8 mx-3 md:h-10 my-4'/>
            <img src="/icons/spr.png" className='h-8 mx-3 md:h-10 my-4'/>
            <img src="/icons/opensea.png" className='h-8 mx-3 md:h-10 my-4'/>
        </div>
    </div>
  )
}


const Collection = () => {
    return(
        <>
        <div className='flex mt-24 md:my-20 collection1 origin-bottom -rotate-6'>
            <img src="/nft/1.jfif" className='h-[200px] md:h-[400px] mx-3'/>
            <img src="/nft/2.jfif" className='h-[200px] md:h-[400px] mx-3'/>
            <img src="/nft/3.jfif" className='h-[200px] md:h-[400px] mx-3'/>
            <img src="/nft/4.jfif" className='h-[200px] md:h-[400px] mx-3'/>
            <img src="/nft/5.jfif" className='h-[200px] md:h-[400px] mx-3'/>
            <img src="/nft/6.jfif" className='h-[200px] md:h-[400px] mx-3'/>
            <img src="/nft/7.jfif" className='h-[200px] md:h-[400px] mx-3'/>
        </div>
        <div className='flex md:my-20 collection2 origin-bottom -rotate-6'>
            <img src="/nft/9.jfif" className='h-[300px] md:h-[600px] mx-3'/>
            <img src="/nft/8.jfif" className='h-[300px] md:h-[600px] mx-3'/>
            <img src="/nft/7.jfif" className='h-[300px] md:h-[600px] mx-3'/>
            <img src="/nft/6.jfif" className='h-[300px] md:h-[600px] mx-3'/>
            <img src="/nft/5.jfif" className='h-[300px] md:h-[600px] mx-3'/>
        </div>

        </>
        
    )
}
export default LandingPage