// import { Route, Routes } from 'react-router';
// import { Router } from 'react-router-dom';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from 'components/Footer';
// import './App.css';
import Header from 'components/Header';
import LandingPage from 'components/LandingPage';
import Services from 'components/Services';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Aboutus from 'components/Aboutus';
import Contactus from 'components/Contactus';
import ProviderDetails from 'components/ProviderDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path="/" caseSensitive={false} element={<LandingPage/>} />
            <Route path="/login" caseSensitive={false} element={<Login/>} />
            <Route path="/signup" caseSensitive={false} element={<Signup/>} />

            <Route path="/services" caseSensitive={false} element={<Services/>} />
            <Route path="/aboutus" caseSensitive={false} element={<Aboutus/>} />
            <Route path="/contactus" caseSensitive={false} element={<Contactus/>} />

            <Route path="/providerdetails" caseSensitive={false} element={<ProviderDetails/>} />

            
          </Routes>
        <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
