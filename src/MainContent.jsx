import { useState } from 'react'
function MainContent({ perfil }) {
  console.log("O perfil do usuário logado é:", JSON.stringify(perfil));
    const [chamados, setChamados] = useState([{id: 1, titulo: 'Chamado 1', descricao: 'Descrição do chamado 1', status: 'aberto'},
    {id: 2, titulo: 'Chamado 2', descricao: 'Descrição do chamado 2', status: 'em andamento'},
    {id: 3, titulo: 'Chamado 3', descricao: 'Descrição do chamado 3', status: 'fechado'}]); 
  const [filtro, setFiltro] = useState('todos');
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const todos = chamados;
  const abertos = chamados.filter(chamado => chamado.status === 'em andamento' || chamado.status === 'aberto');
  const fechados = chamados.filter(chamado => chamado.status === 'fechado');
  const chamadosFiltrados = filtro === 'todos' ? todos : filtro === 'abertos' ? abertos : fechados;
  const totalChamados = chamados.length;
  const totalChamadosAbertos = abertos.length;
  const totalChamadosFechados = fechados.length;
  const fecharChamado = (id) => {
    setChamados(chamados.map(chamado => chamado.id === id ? {...chamado, status: 'fechado'} : chamado));
   }
    return (
    <main className="main-content">
      <h1>Área Central</h1>
      <p>Esta é a área Central.</p>
      <h2>Adicionar Novo Chamado</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const novoId = chamados.length + 1;
        setChamados([...chamados, { id: novoId, titulo: novoTitulo, descricao: novaDescricao, status: 'aberto' }]);
        setNovoTitulo('');
        setNovaDescricao('');
      }}>
        <input className="input" type="text" placeholder="Título" value={novoTitulo} onChange={(e) => setNovoTitulo(e.target.value)} />
        <textarea className="textarea" placeholder="Descrição" value={novaDescricao} onChange={(e) => setNovaDescricao(e.target.value)}></textarea>
        <button className="adicionar-chamado" type="submit">Adicionar Chamado</button>
      </form>
      <div>
        <div className="total-chamados">         
          {filtro === 'todos' && <h2>Todos os Chamados: {totalChamados}</h2> }
          {filtro === 'abertos' && <h2>Chamados Abertos: {totalChamadosAbertos}</h2>}
          {filtro === 'fechados' && <h2>Chamados Fechados: {totalChamadosFechados}</h2>}
        </div>
      </div>
      <div>
        <button onClick={() => setFiltro('todos')}>Todos</button>
        <button onClick={() => setFiltro('abertos')}>Abertos</button>
        <button onClick={() => setFiltro('fechados')}>Fechados</button>
      </div>
      {chamadosFiltrados.map ((chamado) => (
        <div key={chamado.id} className="card-chamado">
          <h2>{chamado.titulo}</h2>
          <p>{chamado.descricao}</p>
          <span className={`status ${chamado.status}`}>{chamado.status}</span>
          {perfil === 'admin' && chamado.status !== 'fechado' && (
            <button className="fechar-chamado" onClick={() => fecharChamado(chamado.id)}>Fechar Chamado</button>
          )}
        </div>
      ))}
    </main>
  )  
}
export default MainContent