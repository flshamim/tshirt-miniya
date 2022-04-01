
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Compotent/About/About';
import Header from './Compotent/Header/Header';
import Home from './Compotent/Home/Home';
import OrderRivew from './Compotent/OrderRivew/OrderRivew';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path ='/orderrivew' element={<OrderRivew></OrderRivew>} />
    <Route path='/about' element={<About></About>} />

    </Routes>
    </div>
  );
}

export default App;
