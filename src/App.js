import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainfile from './Mainfile';
import About from './Aboutus';
import Services from './Services';
import Choose from './Choose';
import Quote from './Quote';
import Review from './Review';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 "  />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Mainfile />
                <About />
                <Services />
                <Choose />
                <Quote />
                <Review />
               
              </>
            }
          />
          
          {/* About Route */}
          <Route path="/about" element={<About />} />
          
          {/* Services Route */}
          <Route path="/services" element={<Services />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Quote />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
