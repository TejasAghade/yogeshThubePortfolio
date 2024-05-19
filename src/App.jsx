import './App.css'
import HomeFour from './components/home/fourth-section'
import Hero from './components/home/hero'
import HomeSecond from './components/home/second-section'
import HomeThird from './components/home/third-section'

function App() {

  return (
    <>
      <div className="home mb-96">
        <Hero/>
        <HomeSecond/>
        <HomeThird/>
        <HomeFour/>
      </div>
      
      <div className="wp-icon">
        <img src="assets/wp.png" alt="not found" />
        <span>WhatsApp</span>
      </div>
    </>
  )
}

export default App
