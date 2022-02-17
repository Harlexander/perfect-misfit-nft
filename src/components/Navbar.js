/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]


export default function Navbar() {
    const [show, setShow] = useState(false);

    const toggler = () => {
        setShow(!show)
    }
  return (

    <div className='fixed bg-[rgba(15, 15, 15, 0.01)] w-full z-10 nvnv'>
        <div className='flex justify-between text-white items-center py-5 px-5 md:mx-20'>
                 <div>
                    <p style={{fontFamily : 'Luckiest Guy, cursive'}} className="text-l text-[#FCD377]">PERFECT <br/> MISFITS</p>
                </div>
                <div className='md:block hidden'>
                    <a href='#' className='mx-5 hover:text-[#FCD377]'>Home</a>
                    <a href='#' className='mx-5 hover:text-[#FCD377]'>About</a>
                    <a href='#' className='mx-5 hover:text-[#FCD377]'>Roadmap</a>
                </div>
                <div  className='md:block hidden'>
                    <img src='/icons/twitter.png' className='h-5 inline px-5'/>
                    <img src='/icons/discord.png' className='h-5 inline'/>
                </div>
                        <MenuIcon 
                        className='h-10 md:hidden'
                        onClick={toggler}
                        />
                    
        </div>
        <div className={`collapse-container w-full pt-5 pb-10 ${!show && "hidden"}`} style={{transition : "all linear 1ms"}}>
                    <div className=''>
                        <a href='#' className='mx-5 focus:text-[#FCD377] block border-b py-5 text-xl text-white'>Home</a>
                        <a href='#' className='mx-5 focus:text-[#FCD377] block border-b py-5 text-xl text-white'>About</a>
                        <a href='#' className='mx-5 focus:text-[#FCD377] block border-b py-5 text-xl text-white'>Roadmap</a>
                    </div>
                </div>
    </div>
  )
}
