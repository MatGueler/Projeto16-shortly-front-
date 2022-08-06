
// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// functions
import Login from '../Login/Login';
import Register from '../Register/Register';
import Menu from '../Menu/Menu';

function App() {
  return (
    <BrowserRouter>
      {/* <TokenContext.Provider value={{ token, setToken, myName, setMyName }}> */}
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Register />} />
        <Route path='/menu' element={<Menu />} />

      </Routes>
      {/* </TokenContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
