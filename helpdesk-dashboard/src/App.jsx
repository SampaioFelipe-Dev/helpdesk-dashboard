import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { useState } from 'react'
import './App.css'

function App() {
const [perfil, setPerfil] = useState('user');
  return (
    <div className="dashboard-container">
      <Sidebar perfil={perfil} setPerfil={setPerfil} />
      <MainContent perfil={perfil} />
    </div>
  )
}

export default App