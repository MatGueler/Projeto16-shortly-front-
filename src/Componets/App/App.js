
// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// functions
import Login from '../Login/Login';

function App() {
  return (
    <BrowserRouter>
      {/* <TokenContext.Provider value={{ token, setToken, myName, setMyName }}> */}
      <Routes>

        <Route path='/' element={<Login />} />

      </Routes>
      {/* </TokenContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
