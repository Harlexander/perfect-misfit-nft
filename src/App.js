import { Fade } from 'react-reveal'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import ColorCombo from './components/ColorCombo'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Team from './components/Team'

const Home = () => {
  return(
    <div className='h-100'>
     <LandingPage/>
     <About/>
     <Roadmap/>
     <Team/>
     <FAQ/>   
    </div>
 
  )
 }

 const Teams = () => {
     const team = [
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
         },
         {
            name : 'Michael',
            position : "Developer",
            social : {
                type : "instagram",
                handle : "https://www.instagram.com/michaelcosj"
                },
                img : "4-min.png"
         },
         {
            name : 'Emmanuella Ogbuagu',
            position : "Illustrator",
            social : {
                type : "instagram",
                handle : "https://www.behance.net/xever24"
                },
                img : "5-min.png"
         },
         {
            name : 'Ahonsi clever',
            position : "Illustrator/Artist ",
            social : {
                type : "instagram",
                handle : "https://www.instagram.com/ahonsi_art"
                },
                img : "2-min.png"
         },
         {
            name : 'Divine Odigili ',
            position : "Artist",
            social : {
                type : "twitter",
                handle : "https://instagram.com/demigod_stello?utm_medium=copy_link"
                },
                img : "6-min.png"
         },
         {
            name : 'Tife',
            position : "Promoter",
            social : {
                type : "twitter",
                handle : "https://twitter.com/Tifeofhermommyspot"
                },
                img : "7-min.png"
         },
         {
            name : 'Manny',
            position : "Team Ideator",
            social : {
                type : "instagram",
                handle : "https://instagram.com/elkardon?utm_medium=copy_link"
                },
                img : "8-min.png"
         },
    ]
  return(
    <>
    <Fade bottom>
         <div className='grid md:grid-cols-4 text-white gap-3 pt-[7rem] px-5 md:px-20'>
            <div className='md:col-span-3 md:px-3'>
                <p className='md:text-7xl text-7xl' style={{fontFamily : 'Luckiest Guy, cursive'}}>
                MEET THE TEAM
                </p>
            </div>
        </div>
        </Fade>
      <div className='mx-5 my-10'>
      <div className='grid md:grid-cols-3 gap-12'>
            {
                team.map((member) => (
                    <div className='border p-2 md:p-5'>
                        <img src={`/nft/${member.img}`} className='w-full'/>
                        <div className='flex justify-between py-3'>
                            <div>
                            <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-white text-xl md:text-2xl">{member.name}</p>
                            <p className='font-light text-sm text-white'>{member.position}</p>
                            </div>
                            <a href={`${member.gmail ? "mailto:perfectmisfit123@gmail.com" : "#"}`}>
                                <img src={`/icons/${(member.gmail && "gmail")  || (member.social.type === 'twitter' && "twit") || (member.social.type === 'instagram' && "insta") || (member.social.type === 'linkedin' && "linkedin")}.png`} className='self-center h-12 md:h-12 my-auto rounded'/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </>
    
  )
}
export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ColorCombo/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="team" element={<Teams/>}/>
      </Routes>
       <Footer/>
    </div>
  )
}

