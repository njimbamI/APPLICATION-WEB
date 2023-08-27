import './App.css';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Notfound } from './pages/Notfound';
import { Registrer } from './pages/Registrer';
import { Login } from './pages/Login';
import { Ressource } from './pages/Ressource';
import { Detail } from './pages/Detail';




function App() {
  return (
    <div className='container mt-5'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="inscription" element={<Registrer />} />
          <Route path="connexion" element={<Login />} />
          <Route path="ressource" element={<Ressource />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
