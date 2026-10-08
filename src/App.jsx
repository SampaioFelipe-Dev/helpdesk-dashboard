import { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Login from './login';
import './App.css';

function App() {
  const [perfil, setPerfil] = useState(() => {
    return localStorage.getItem('perfil') || 'admin';
  });
  const [logado, setLogado] = useState(() => {
    return localStorage.getItem('logado') === 'true' || false;
  });
  const entrarNoSistema = (tipoUsuario) => {
    setPerfil(tipoUsuario);
    setLogado(true);
    localStorage.setItem('perfil', tipoUsuario);
    localStorage.setItem('logado', 'true');
    window.location.reload();
  }
  if (!logado) {
    return <Login onLogin={entrarNoSistema} />;
  }
  const sairDoSistema = () => {
    localStorage.removeItem('logado');
    localStorage.removeItem('perfil');
    setLogado(false);
    window.location.reload();
  }
  return (
    <div className="dashboard-container">
      <Sidebar perfil={perfil} setPerfil={setPerfil} sairDoSistema={sairDoSistema} />
      
      <div className="content-wrapper">
        <MainContent perfil={perfil} />
      </div>
    </div>
  );
}

export default App;