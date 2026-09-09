import { useState } from 'react'
function MainContent() {
    const [chamados, setChamados] = useState([{id: 1, titulo: 'Chamado 1', descricao: 'Descrição do chamado 1', status: 'aberto'},
    {id: 2, titulo: 'Chamado 2', descricao: 'Descrição do chamado 2', status: 'em andamento'},
    {id: 3, titulo: 'Chamado 3', descricao: 'Descrição do chamado 3', status: 'fechado'}]); 
    const [filtro, setFiltro] = useState('todos');
    const todos = chamados;
    const abertos = chamados.filter(chamado => chamado.status === 'em andamento' || chamado.status === 'aberto');
    const fechados = chamados.filter(chamado => chamado.status === 'fechado');
   const chamadosFiltrados = filtro === 'todos' ? todos : filtro === 'abertos' ? abertos : fechados;
   const totalChamados = chamados.length;
   const totalChamadosAbertos = abertos.length;
   const totalChamadosFechados = fechados.length;
    return (
    <main className="main-content">
      <h1>Área Central</h1>
      <p>Esta é a área Central.</p>
      <div>
        <h2>Total de Chamados: {totalChamados}</h2>
        <h2>Total de Chamados Abertos: {totalChamadosAbertos}</h2>
        <h2>Total de Chamados Fechados: {totalChamadosFechados}</h2>
      </div>
      <div>
        <button onClick={() => setFiltro('todos')}>Todos</button>
        <button onClick={() => setFiltro('abertos')}>Abertos</button>
        <button onClick={() => setFiltro('fechados')}>Fechados</button>
      </div>
      {chamadosFiltrados.map ((chamado) => (
        <div key={chamado.id}>
          <h2>{chamado.titulo}</h2>
          <p>{chamado.descricao}</p>
          <span className={`status ${chamado.status}`}>{chamado.status}</span>
        </div>
      ))}
    </main>
  )  
}
export default MainContent