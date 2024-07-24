import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
            <h1 className="brand">React</h1>
          
          </div>

          <nav className='nav nav-pills'>
           <Link to="/"> Home</Link>
            <Link to="/About"> About</Link>
            <Link to="/Posts"> Posts</Link>
            <Link to="/Products"> Products</Link>
     
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header