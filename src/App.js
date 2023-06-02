import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/success' element={<ConfirmedBookingPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
