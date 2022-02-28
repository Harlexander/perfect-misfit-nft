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
    <>
     <LandingPage/>
     <About/>
     <Roadmap/>
     <Team/>
     <FAQ/>   
    </>
 
  )
 }

 const Teams = () => {
     const team = [
         {
            name : 'Ashiru Ola',
            position : "Founder",
            social : {
                type : "twitter",
                handle : "@OladipupoAshiru"
                },
            img : "10-min.png"
         },
         {
            name : 'Daisy',
            position : "Nft Designer",
            social : {
                type : "instagram",
                handle : "@the_melaninartist"
                },
                img : "1-min.png"
         }, {
            name : 'Solomon Nwabuoku',
            position : "UI/UX Designer",
            social : {
                type : "twitter",
                handle : "@dozibe"
                },
                img : "9-min.png"
         },
         {
            name : 'Peachy',
            position : "Web Developer",
            social : {
                type : "linkedin",
                handle : "@alexander_dunkwu"
                },
                img : "3-min.png"
         },
         {
            name : 'Michael',
            position : "Developer",
            social : {
                type : "instagram",
                handle : "@michaelcosj"
                },
                img : "4-min.png"
         },
         {
            name : 'Emmanuella Ogbuagu',
            position : "Illustrator",
            social : {
                type : "instagram",
                handle : "@ella2498"
                },
                img : "5-min.png"
         },
         {
            name : 'Ahonsi clever',
            position : "Illustrator/Artist ",
            social : {
                type : "instagram",
                handle : "@ahonsi_art"
                },
                img : "2-min.png"
         },
         {
            name : 'Divine Odigili ',
            position : "Artist",
            social : {
                type : "twitter",
                handle : "@demigod_stello"
                },
                img : "6-min.png"
         },
         {
            name : 'Tife',
            position : "Promoter",
            social : {
                type : "twitter",
                handle : "Tifeofhermommyspot"
                },
                img : "7-min.png"
         },
         {
            name : 'Julius Imasuen',
            position : "Social Media Promoter",
            social : {
                type : "instagram",
                handle : "@elkardon"
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
                                <img src={`/icons/${(member.social.type === 'twitter' && "twit") || (member.social.type === 'instagram' && "insta") || (member.social.type === 'linkedin' && "linkedin")}.png`} className='self-center h-6 md:h-12 my-auto rounded'/>
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
      <Navbar/>
      <ColorCombo/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="team" element={<Teams/>}/>
      </Routes>
       <Footer/>
    </div>
  )
}

