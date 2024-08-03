

import {Routes,Route} from 'react-router-dom'
import './App.css';
import {Navbar} from './components/Navbar';
import {Contact} from './components/Contact';
import {About} from './components/About';
// import {Footer} from './components/Footer';
import {Home} from './components/Home'
import {WeatherForecast} from './components/WeatherForecast';
import {Detect} from './components/Detect';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='weatherforecast' element={<WeatherForecast/>}/>
      <Route path='Detect' element={<Detect/>}/>
      
    </Routes>
    {/* <Footer/> */}
    </div>
  );
}
export default App;





























































