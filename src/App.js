import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Expenses from './pages/Expenses';
import Profile from './pages/Profile';
import Version from './pages/Version';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/dashboard" element={<Dashboard  title="Dashboard"/>} />
				{/* <Route path="/categories" element={<Categories title="Categories" />} /> */}
				<Route path="/expenses" element={<Expenses title="Expenses" />} />
				<Route path="/profile" element={<Profile title="Profile" />} />
				<Route path="/version" element={<Version title="Version" />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
