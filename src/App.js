import logo from './logo.svg';
import './App.css';
import TopNavbar from './Component/Navigation/ButtonAppBar';
import TopBanner from './Component/TobBanner/TopBanner';
import Service from './Component/Service/Service';
import MyExperience from './Component/Service/MyExperience';
import ExtraService from './Component/Service/ExtraService';
import AboutMe from './Component/About/AboutMe';


const bodyStyle={

}

function App() {
  return (
    <div >
      <TopNavbar/>
      <TopBanner/>
      <Service/>
      <MyExperience/>
      <ExtraService/>
      <AboutMe/>
    </div>
  );
}

export default App;
