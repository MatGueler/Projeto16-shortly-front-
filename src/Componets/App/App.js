
// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// functions
import Login from '../Login/Login';
import Register from '../Register/Register';
import Menu from '../Menu/Menu';
import Ranking from '../Ranking/Ranking';
import TokenContext from '../Contexts/TokenContext'
import { useState } from 'react';

function App() {

  const [token, setToken] = useState('')

  return (
    <BrowserRouter>
      <TokenContext.Provider value={{ token, setToken }}>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/ranking/geral' element={<Ranking />} />

        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
