import './App.css';
import Navbar from './components/Navbar';
import All from './components/All';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Image Gallery</h1>
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<All cat="all"/>} />
          <Route path="/nature" element={<All cat="nature"/>} />
          <Route path="/city" element={<All cat="city"/>} />
          <Route path="/animals" element={<All cat="animals"/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
