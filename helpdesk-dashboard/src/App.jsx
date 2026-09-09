import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="dashboard-container">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
