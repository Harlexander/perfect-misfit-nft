import React from 'react'

const Team = () => {
    const data = [
        {
            name : 'Ashiru Ola',
            position : "Project Lead",
            gmail : true,
            social : {
                type : "twitter",
                handle : "https://twitter.com/OladipupoAshiru"
                },
            img : "10-min.png"
         },
         {
            name : 'Daisy',
            position : "Nft Designer",
            social : {
                type : "instagram",
                handle : "https://www.instagram.com/the_melaninartist"
                },
                img : "1-min.png"
         }, {
            name : 'Solomon Nwabuoku',
            position : "UI/UX Designer",
            social : {
                type : "linkedin",
                handle : "https://www.linkedin.com/in/solomon-nwabuoku/"
                },
                img : "9-min.png"
         },
         {
            name : 'Peachy',
            position : "Web Developer",
            social : {
                type : "instagram",
                handle : "https://www.instagram.com/harlexander_jr/"
                },
                img : "3-min.png"
         }
    ]
  return (
    <div className='md:mx-40 mx-5 text-white'>
        <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="py-14 text-6xl text-center">MEET THE TEAM</p>

        <div className='grid md:grid-cols-4 gap-1'>
        {
                data.map((member) => (
                    <div className='border p-2 md:p-5'>
                        <img src={`/nft/${member.img}`} className='w-full'/>
                        <div className='flex justify-between py-3'>
                            <div>
                            <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-white text-xl md:text-2xl">{member.name}</p>
                            <p className='font-light text-sm text-white'>{member.position}</p>
                            </div>
                            <a href={`${member.gmail ? "mailto:perfectmisfit123@gmail.com" : "#"}`}>
                                <img src={`/icons/${(member.gmail && "gmail") || (member.social.type === 'twitter' && "twit") || (member.social.type === 'instagram' && "insta") || (member.social.type === 'linkedin' && "linkedin")}.png`} className='self-center h-12 md:h-12 my-auto rounded'/>
                            </a>
                        </div>
                    </div>
                ))
            }
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