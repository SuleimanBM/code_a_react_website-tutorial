import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'exact Component={Home} />
          <Route path='/Menu'exact Component={Menu} />
          <Route path='/About'exact Component={About} />
          <Route path='/Contact'exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
