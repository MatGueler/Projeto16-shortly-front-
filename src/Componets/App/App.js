
// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// functions
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <BrowserRouter>
      {/* <TokenContext.Provider value={{ token, setToken, myName, setMyName }}> */}
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Register />} />

      </Routes>
      {/* </TokenContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
