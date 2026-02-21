import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Home from './pages/Home';
import Shipment from './pages/Shipment';
import MessageHistroy from './pages/MessageHistroy';

function App() {
	return (
		<Router>
			<div>
				<NavigationBar />
                <Routes>
					<Route path='/' element={<Home />} />
                    <Route path='/shipment' element={<Shipment />} />
                    <Route path='/messageHistory' element={<MessageHistroy />} />
                </Routes>
			</div>
		</Router>
	);
}

export default App;
