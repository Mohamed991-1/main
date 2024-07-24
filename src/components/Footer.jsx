
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>

        <nav className='d-flex justify-content-center'>
            
    
        <Link to="/"> Home</Link>
            <Link to="/About"> About</Link>
            <Link to="/Posts"> Posts</Link>
            <Link to="/Products"> Products</Link>
        </nav>
        
      </div>
    </footer>
  )
}

export default Footer