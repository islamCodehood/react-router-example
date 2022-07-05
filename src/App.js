import './App.css';
import CardsList from './cardsList';
import {TheContextProvider} from './context'

function App() {
	
	return (
		<TheContextProvider>
			<div>Hello </div>
			<CardsList />
		</TheContextProvider>
	);
}

export default App;
