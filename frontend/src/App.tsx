import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Home from './pages/Home';
import ShipmentSearch from './pages/ShipmentSearch';
import ShipmentEdit from "./pages/ShipmentEdit";
import EdiHistroy from './pages/EdiHistroy';
import EdiHistroyDetail from './pages/EdiHistroyDetail';

function App() {
	return (
		<Router>
			<div>
				<NavigationBar />
                <Routes>
					<Route path='/' element={<Home />} />
                    <Route path='/shipments' element={<ShipmentSearch />} />
					<Route path='/shipments/new' element={<ShipmentEdit />} />
					<Route path='/shipments/:id' element={<ShipmentEdit />} />
                    <Route path='/edi/history' element={<EdiHistroy />} />
					<Route path='/edi/history/:id' element={<EdiHistroyDetail />} />
                </Routes>
			</div>
		</Router>
	);
}

export default App;
