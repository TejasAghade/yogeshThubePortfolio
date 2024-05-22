import './App.css'
import Home from './components/home/home'

function App() {

  return (
    <>
      <div className="home">
        <Home/>
      </div>
      <div className="wp-icon">
        <img src="assets/wp.png" alt="not found" />
        <span className='text-white'>WhatsApp</span>
      </div>
    </>
  )
}

export default App
