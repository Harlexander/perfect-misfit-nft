import React from 'react'
import { Fade } from 'react-reveal'

const LandingPage = () => {
  return (
    <div>
        <Fade bottom duration={2000}>
         <div className='grid md:grid-cols-4 text-white gap-3 pt-[7rem] px-5 md:px-20'>
            <div className=''>
                <p className='font-light text-grey py-4'>The Perfect Misfits Collection contains 10,000 Hand Made NFT collectables by some of Africa's Most Talented Young Artists, Hosted on the Ethereum Blockchain</p>
                <button className='px-5 mt-8 py-3 font-bold rounded-full bg-[#D90AFA]'>
                    
                    <img src="/nft/1-min.png" className='rounded-full h-8 outline-2 outline mr-[-10px] inline'/>
                    
                    <img src="/nft/2-min.png" className='rounded-full h-8 outline-2 outline mr-[-10px] inline'/>
                    
                    <img src="/nft/3-min.png" className='rounded-full h-8 outline-2 outline mr-3 inline'/>
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
        <Fade
        delay={1000}
        >
            <Collection/> 
            <div className='flex justify-center md:justify-between flex-wrap md:px-[120px] py-14'>
            <img src="/icons/fantom.png" className='h-8 mx-3 md:h-10 my-4'/>
            <img src="/icons/cmc.png" className='h-8 mx-3 md:h-10 my-4'/>
            <img src="/icons/spr.png" className='h-8 mx-3 md:h-10 my-4'/>
            <img src="/icons/opensea.png" className='h-8 mx-3 md:h-10 my-4'/>
        </div>
        </Fade>
        
    </div>
  )
}


const Collection = () => {
    return(
        <>
        <div className='flex mt-24 md:my-20 h-[210px] md:h-[420px] collection1 origin-bottom -rotate-6'>
            
            <img src="/nft/1-min.png" className='h-[200px] md:h-[400px] mx-3'/>
            
            <img src="/nft/2-min.png" className='h-[200px] md:h-[400px] mx-3'/>
            
            <img src="/nft/3-min.png" className='h-[200px] md:h-[400px] mx-3'/>
            
            <img src="/nft/4-min.png" className='h-[200px] md:h-[400px] mx-3'/>
            
            <img src="/nft/5-min.png" className='h-[200px] md:h-[400px] mx-3'/>
            
            <img src="/nft/6-min.png" className='h-[200px] md:h-[400px] mx-3'/>
            
            <img src="/nft/7-min.png" className='h-[200px] md:h-[400px] mx-3'/>
        </div>
        <div className='flex md:my-20 h-[310px] md:h-[620px] collection2 origin-bottom -rotate-6'>
            
            <img src="/nft/9-min.png" className='h-[300px] md:h-[600px] mx-3'/>
            
            <img src="/nft/8-min.png" className='h-[300px] md:h-[600px] mx-3'/>
            
            <img src="/nft/7-min.png" className='h-[300px] md:h-[600px] mx-3'/>
            
            <img src="/nft/6-min.png" className='h-[300px] md:h-[600px] mx-3'/>
            
            <img src="/nft/5-min.png" className='h-[300px] md:h-[600px] mx-3'/>
        </div>

        </>
        
    )
}
export default LandingPage