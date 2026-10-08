import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const usuariosPermitidos = [
    { email: 'admin@teste.com', senha: 'admin123', perfil: 'admin' },
    { email: 'user@teste.com', senha: 'user123', perfil: 'user' }
  ];
  const tentarLogin = () => {
    setErro('');
    const usuarioEncontrado = usuariosPermitidos.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );
    if (usuarioEncontrado) {
      onLogin(usuarioEncontrado.perfil);
    } else {
      setErro('Email ou senha incorretos.');
    }
  };
  return (
    <div className="formC">
      <h2 className="title">Bem Vindo!</h2>
      
      <div className="form-wrapper">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label>Senha</label>
        <input type="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        
        {erro !== '' && (
          <p style={{ color: '#ff0000', fontSize: '0.085rem', marginTop: '10px' }}>{erro}</p>
        )}
        <button className="btn-login" onClick={tentarLogin}>Entrar</button>
      </div>
      
      <div className="bottom">
        <a href="#" className="Dblock">Forget password?</a>
      </div>
      <div classNAme="test-credentials">
        <p>Contas para teste:</p>
        <p>Admin: admin@teste.com / admin123</p>
        <p>Usuário: user@teste.com / user123</p>
      </div>
    </div>
  );
}

export default Login;