import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BookingDetails from './components/booking/BookingDetails';
import MyBookings from './components/booking/MyBookings';
import Navbar from './components/common/Navbar';
import CreateBooking from './components/CreateBooking';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Profile from './components/profile/Profile';
import Register from './components/Register';
import Support from './components/support/Support';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/create-booking" 
              element={
                <PrivateRoute>
                  <CreateBooking />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/my-bookings" 
              element={
                <PrivateRoute>
                  <MyBookings />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/booking/:id" 
              element={
                <PrivateRoute>
                  <BookingDetails />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/support" 
              element={
                <PrivateRoute>
                  <Support />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;