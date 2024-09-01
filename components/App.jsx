
import './app.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Bodycontent from './Bodycontent'

const App = () => {
  return (
    // <button className="btn btn-primary rounded-pill px-3">Hello there!!</button>
    <div>
    <Navbar/>
    <Header/>
    <Bodycontent/>
    <Footer/>
    </div>
  )
}

export default App