import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;

// Does the Little Lemon web app match the UI/UX from the Figma mockup and wireframe? --DONE
// Using the web browser developer tools, does the web app using semantic HTML tags appropriately? --DONE
// Using the web browser developer tools, does the web app layout correctly for both mobile and desktop devices? --DONE
// Are there appropriate meta tags and Open Graph Protocol tags used? --DONE
// Is the BookingForm component a child component?
// Is the state of the available times managed from the parent component of BookingForm?
// Does the booking form implement client-side validation?
// Are there unit tests added for form component and validation?
// Do the unit tests pass successfully?
