import { useState } from 'react';

function Sidebar({ perfil, setPerfil, sairDoSistema }) {
  const [aberta, setAberta] = useState(true);

  return (
    <aside className={aberta ? 'sidebar' : 'sidebar fechada'}>
      <div className="sidebar-top">
        <button className="btn-toggle" onClick={() => setAberta(!aberta)}>
          ☰
        </button>
        <h2>Barra Lateral</h2>
        
        <div className="user-profile">
          <p>Olá, <strong>{perfil}</strong></p>
        </div>
      </div>
      <div className="sidebar-footer">
      <nav className="sidebar-nav">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
        </nav>
        <button className="btn-sair" onClick={sairDoSistema}>Sair</button>
      </div>
    </aside>
  );
}

export default Sidebar;