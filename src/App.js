import './App.css'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Team from './components/Team'


export default function App() {
  return (
    <div className="relative bg-white overflow-hidden">
       <Navbar/>
       <LandingPage/>
       <About/>
       <Roadmap/>
       <Team/>
       <FAQ/>
       <Footer/>
    </div>
  )
}