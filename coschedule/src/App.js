import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './pages/Signin/Signin';
import Register from './pages/Signin/Register';
import Calendar from './pages/calendar/Calendar';
import Pricing from './pages/pricing/Pricing';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
       <AllRoutes/>
       <Footer/> */}
       <Pricing/>
    </div>
  );
}

export default App;
