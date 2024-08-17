import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import MiniApps from './components/mini-apps/MiniApps';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mini-apps" element={<MiniApps />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
