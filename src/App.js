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

// Does the Little Lemon web app match the UI/UX from the Figma mockup and wireframe? --DONE
// Using the web browser developer tools, does the web app using semantic HTML tags appropriately? --DONE
// Using the web browser developer tools, does the web app layout correctly for both mobile and desktop devices? --DONE
// Are there appropriate meta tags and Open Graph Protocol tags used? --DONE
// Is the BookingForm component a child component? --DONE
// Is the state of the available times managed from the parent component of BookingForm? --DONE
// Does the booking form implement client-side validation?
// Are there unit tests added for form component and validation?
// Do the unit tests pass successfully?
