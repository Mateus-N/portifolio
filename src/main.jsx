import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Project from './components/project'
import Home from './pages/Home'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Project />} />
        <Route path=':projectId' element={<Project />} />
      </Route>
      <Route path='*' element={
        <main style={{ padding: "1rem" }}>
          <p>Não tem nada aqui</p>
        </main>
      } />
    </Routes>
  </BrowserRouter>
)
