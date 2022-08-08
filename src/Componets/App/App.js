
// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// functions
import Login from '../Login/Login';
import Register from '../Register/Register';
import Menu from '../Menu/Menu';
import Ranking from '../Ranking/Ranking';
import TokenContext from '../Contexts/TokenContext'
import { useState } from 'react';
import Open from '../Open/Open';

function App() {

  const [token, setToken] = useState('')
  const [infos, setInfos] = useState([])

  return (
    <BrowserRouter>
      <TokenContext.Provider value={{ token, setToken, infos, setInfos }}>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/acessar' element={<Open />} />
          <Route path='/ranking/geral' element={<Ranking />} />

        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
