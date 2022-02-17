import React from 'react'
import { Chrono } from 'react-chrono'
import { Zoom } from 'react-reveal';
import { Africa } from './AfricaSvg'

const Roadmap = () => {
    const items = [
        {},
        {},
        {},
        {},
        {},
    ];
    
  return (
    <div className='my-24 py-10 md:px-20 px-5 relative'>

    <div className='h-96 absolute w-96 top-2/4 right-0 bg-[#DC14F3] rounded-full blur-circle'>
    </div>
    <div className='h-80 absolute w-80 top-2/4 left-[35%] right-[50%] bg-[#FFEF66] rounded-full blur-circle'>
    </div>
    <div className='h-60 absolute w-60 top-2/4  left-0 bg-[#E9757E] rounded-full blur-circle'>
    </div>

        <div className='container bg-black relative py-20 text-center text-white rounded-lg text-center'>
            <Africa/>
            <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-5 text-5xl">ROADMAP</p>

            <div className="mx-auto py-5 md:w-[800px] ">
            <Chrono
                mode="VERTICAL_ALTERNATING"
                slideShow
                hideControls
                theme={{ 
                    cardBgColor: "transparent",
                    cardForeColor: "white",
                    titleColor: "red"
                  }}
                >
                <div className="chrono-icons">
                    <img
                    src="/icons/Union.png"
                    alt="twitter"
                    />
                    <img
                    src="/icons/Union.png"
                    alt="twitter"
                    />
                    <img
                    src="/icons/Union.png"
                    alt="twitter"
                    />
                    <img
                    src="/icons/Union.png"
                    alt="twitter"
                    />
                    <img
                    src="/icons/Union.png"
                    alt="twitter"
                    />
                </div>   
                <Zoom>
                   <div>
                    <p  style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-3 text-lg md:text-3xl">
                    METAVERSE COMMUNITY
                    </p>
                    <p>Holders of the perfect misfits nft get free access to the metaverse communities that would be available after launch</p>
                    </div> 
                </Zoom>
                <Zoom>
                   <div>
                        <p  style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-3 text-lg md:text-3xl">
                        MISFIT AIRDROP
                        </p>
                        <p>The top 5 biggest holders get airdroped a one of one painting</p>
                    </div> 
                </Zoom>
                <Zoom>
                    <div>
                    <p  style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-3 text-lg md:text-3xl">
                    METAVERSE COMMUNITY
                    </p>
                    <p>Holders of the perfect misfits nft get free access to the metaverse communities that would be available after launch</p>
                    </div>
                </Zoom>
                <Zoom>
                     <div>
                    <p  style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-3 text-lg md:text-3xl">
                    JUST FOR YOU
                    </p>
                    <p>Anyone who owns 5 perfect misfits nft is encardTitled to Custom design piece...a perfect misfits nft that looks just like you</p>
                    </div>
                </Zoom>
                <Zoom>
                   <div>
                    <p  style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-3 text-lg md:text-3xl">
                    "???????"
                    </p>
                    <p>We are leaving this part for you what would you want this collection to add to its roadmap</p>
                    </div>  
                </Zoom>
                   
                     
                </Chrono>
            </div>
        </div>
    </div>
  )
}

export default Roadmap