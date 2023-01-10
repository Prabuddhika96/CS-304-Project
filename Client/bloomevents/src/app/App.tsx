import 'styles/App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from 'components/Header/Header';
import LandingPage from 'pages/LandingPage';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Footer from 'components/Footer/Footer';
import ProviderDetails from 'pages/ProviderDetails';
import Contactus from 'pages/Contactus';
import Services from 'pages/Services';
import Aboutus from 'pages/Aboutus';
import { RouteName } from 'constant/routeName';
import 'styles/styles.css';
import MyEvents from 'pages/Logged User/MyEvents';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <div className='flex items-center min-h-[650px]'>
            <Routes>
              <Route path={RouteName.Home} caseSensitive={false} element={<LandingPage/>} />
              <Route path={RouteName.Login} caseSensitive={false} element={<Login/>} />
              <Route path={RouteName.Register} caseSensitive={false} element={<Signup/>} />

              <Route path={RouteName.Services} caseSensitive={false} element={<Services/>} />
              <Route path={RouteName.Aboutus} caseSensitive={false} element={<Aboutus/>} />
              <Route path={RouteName.Contactus} caseSensitive={false} element={<Contactus/>} />

              <Route path={RouteName.ProviderDetails} caseSensitive={false} element={<ProviderDetails/>} />

              <Route path={RouteName.MyEvents} caseSensitive={false} element={<MyEvents/>} />
              
            </Routes>
          </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
