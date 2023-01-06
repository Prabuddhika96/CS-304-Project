import 'styles/App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from 'components/Header';
import LandingPage from 'pages/LandingPage';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Footer from 'components/Footer';
import ProviderDetails from 'pages/ProviderDetails';
import Contactus from 'pages/Contactus';
import Services from 'pages/Services';
import Aboutus from 'pages/Aboutus';
import { RouteName } from 'constant/routeName';
import 'styles/styles.css';
// import BookNow from 'components/BookNow';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path={RouteName.Home} caseSensitive={false} element={<LandingPage/>} />
            <Route path={RouteName.Login} caseSensitive={false} element={<Login/>} />
            <Route path={RouteName.Signup} caseSensitive={false} element={<Signup/>} />

            <Route path={RouteName.Services} caseSensitive={false} element={<Services/>} />
            <Route path={RouteName.Aboutus} caseSensitive={false} element={<Aboutus/>} />
            <Route path={RouteName.Contactus} caseSensitive={false} element={<Contactus/>} />

            <Route path={RouteName.ProviderDetails} caseSensitive={false} element={<ProviderDetails/>} />

            {/* <Route path={RouteName.booknow} caseSensitive={false} element={<BookNow/>} /> */}
            
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
