import logo from './logo.svg';
import './App.css';
import TopNavbar from './Component/Navigation/ButtonAppBar';
import TopBanner from './Component/TobBanner/TopBanner';
import Service from './Component/Service/Service';
import MyExperience from './Component/Service/MyExperience';
import ExtraService from './Component/Service/ExtraService';
import HomePage from './Pages/HomePage';
import AppRoute from './AppRoute/AppRoute';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
   <BrowserRouter>
    <AppRoute/>
   </BrowserRouter>
  );
}

export default App;
