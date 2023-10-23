
// ? Package imports
import { Route, Routes } from "react-router-dom"
// ? Components
import Header from './components/Header';
// ? pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Info from './pages/Info';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>



    </div>
  );
}

export default App;
