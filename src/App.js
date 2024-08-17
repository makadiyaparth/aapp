import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import MiniApps from './components/mini-apps/MiniApps';
import { Container, Stack } from '@mui/material';

function App() {
  return (
    <Router>
      <Stack spacing={4} alignItems="center">
        <Header />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mini-apps" element={<MiniApps />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Stack>
    </Router>
  );
}

export default App;
