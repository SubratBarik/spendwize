import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Expenses from './pages/Expenses';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard  title="Dashboard"/>} />
				<Route path="/categories" element={<Categories title="Categories" />} />
				<Route path="/expenses" element={<Expenses title="Expenses" />} />
				<Route path="/profile" element={<Profile title="Profile" />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
