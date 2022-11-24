
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/checkout' element={[<Header/>,<Checkout/>]}></Route>
        <Route path="/" element={[<Header/>,<Home/>]}> </Route>  
        
        
        
        
       
    
       
      </Routes>
    </Router>
     </div>
  );
}

export default App;
