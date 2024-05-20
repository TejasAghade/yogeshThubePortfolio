import './App.css'
import Footer from './components/footer'
import HomeFive from './components/home/fifth-section'
import HomeFour from './components/home/fourth-section'
import Hero from './components/home/hero'
import HomeSecond from './components/home/second-section'
import HomeSix from './components/home/sixth-section'
import HomeThird from './components/home/third-section'

function App() {

  return (
    <>
      <div className="home">
        <Hero/>
        <HomeSecond/>
        <HomeThird/>
        <HomeFour/>
        <HomeFive/>
        <HomeSix/>
        <Footer/>
      </div>
      <div className="wp-icon">
        <img src="assets/wp.png" alt="not found" />
        <span className='text-white'>WhatsApp</span>
      </div>
    </>
  )
}

export default App
