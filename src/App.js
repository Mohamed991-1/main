import { Routes, Route } from 'react-router-dom';
// import MainLayout from './pages/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Error from './pages/Error.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
		<Header />
		<Routes>
			<Route path = '/' element = {<Home />}></Route>
			<Route path = '/About' element = {<About />}></Route>
			<Route path = '/Posts' element = {<Posts />}></Route>
			<Route path = '/Products' element = {<Products />}></Route>
			<Route path = '/Products/:ProductId' element = {<SingleProduct />}></Route>
			<Route path = '*' element = {<Error/>}></Route>
		</Routes>



		<Footer />
		</div>
	);
}

export default App;
