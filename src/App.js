import './App.css';
import Login from "./Container/Login";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import MainPage  from './Container/MainPage';

function App() {
  return (
  // <Login />
  <BrowserRouter>
    {/* <Switch> */}
    <Routes>
         <Route exact path="/login" element={<Login/>}></Route>
         <Route path='/home' element={<MainPage/>}></Route>
    {/* </Switch> */}
    </Routes>
   </BrowserRouter>
  );
}

export default App;
