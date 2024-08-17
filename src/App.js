import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Homepage from './components/Homepage';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
