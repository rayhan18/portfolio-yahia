import logo from './logo.svg';
import './App.css';
import TopNavbar from './Component/Navigation/ButtonAppBar';
import TopBanner from './Component/TobBanner/TopBanner';
import Service from './Component/Service/Service';


function App() {
  return (
    <div >
      <TopNavbar/>
      <TopBanner/>
      <Service/>
    </div>
  );
}

export default App;
