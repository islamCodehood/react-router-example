import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import CardDetails from './pages/cardDetails'

function App() {
  
  const cards = [
		{ cardTitle: 'Card One', id: '1', body: 'lorem ipsum dolo est 1..' },
		{ cardTitle: 'Card Two', id: '2', body: 'lorem ipsum dolo est 2..' },
		{ cardTitle: 'Card Three', id: '3', body: 'lorem ipsum dolo est 3..' },
	];

	return (
		<div className='p-4'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home cards={cards} />} />
				<Route path='/about' element={<About />} />
				<Route path="/card/:id" element={<CardDetails cards={cards} />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
