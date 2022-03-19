import React from 'react'
import { Chrono } from 'react-chrono'
import { Zoom } from 'react-reveal';
import { Africa } from './AfricaSvg'

const Roadmap = () => {
  return (
    <div className='my-24 md:px-20 px-5 relative' id='roadmap'>

    <div className='h-96 absolute w-96 top-2/4 right-0 bg-[#DC14F3] rounded-full blur-circle'>
    </div>
    <div className='h-80 absolute w-80 top-2/4 left-[35%] right-[50%] bg-[#FFEF66] rounded-full blur-circle'>
    </div>
    <div className='h-60 absolute w-60 top-2/4  left-0 bg-[#E9757E] rounded-full blur-circle'>
    </div>

    <div className='container relative py-20 overflow-hidden text-white rounded-lg'>
    <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-5 text-5xl text-center">RoadmapS are cliché</p>

    <div className="md:grid md:grid-cols-4 gap-4 py-20">
        <div className="col-span-2 px-10" style={{fontFamilt : "inter", fontWeight : "400", fontStyle : 'normal' , color : '#b4b4b4'}}>
            Welcome traveller to the perfect world of misfits; a place for those who feel like they don't belong.
            <br/><br/>
            Here, you will find 10,000 Nfts hand crafted by some of Africa's most talented artist and it's all hosted on the Ethereum Blockchain.
            <br/><br/>
            These pieces detail what it's all like to live in this generation; it captures the euphoric feelings, the lows, the feelings of not good enough, and the joy of overcoming all our fears and obstacles to become at peace with ourselves and society. 
            <br/><br/>
            With this project, we have great faith that it'll become much more than an Nft into a thriving community. So grab an Nft or two, sit back and let build the utopia of our dreams; a community of perfect Misfits.
        </div>
        <div className="col-span-2 pt-6 md:pt-0">
            <img src="/icons/Mask group.png" className="rounded-full h-80 mx-auto"/>
        </div>
    </div> 
    
    <div className='container bg-black relative py-10 overflow-hidden text-white rounded-lg'>
            {/* <Africa/> */}
            <div className='md:grid md:grid-cols-2 gap-3 py-5 px-5' style={{zIndex : 1}}>
                 <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="grid-col-1 text-3xl px-10 md:text-6xl pr-20" >
                    Pros of joining our community
                 </p>
                 <div>
                     <ul className='list-unstyled pt-12 md:pt-0 space-y-3 pr-5' style={{fontFamily : 'Luckiest Guy, cursive'}}>
                         <li className='grid grid-cols-10'><img src="/icons/union.png" className='col-span-1 pr-5 inline md:h-5'/> <p className='col-span-8'> Holders of 3 and above Nfts gets access to a customised Nft piece</p>  </li>
                         <li className='grid grid-cols-10'><img src="/icons/union.png" className='col-span-1 pr-5 inline md:h-5'/> <p className='col-span-8'> 20% of the total funds gotten from this project will ve donated to mental health related charities</p> </li>
                         <li className='grid grid-cols-10'><img src="/icons/union.png" className='col-span-1 pr-5 inline md:h-5'/> <p className='col-span-8'> All Nft holders get access to our metaverse community  after launch</p>  </li>
                         <li className='grid grid-cols-10'><img src="/icons/union.png" className='col-span-1 pr-5 inline md:h-5'/> <p className='col-span-8'> Lastly, the community will vote on what you want us to do next.</p> </li>
                     </ul>
                 </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Roadmap 