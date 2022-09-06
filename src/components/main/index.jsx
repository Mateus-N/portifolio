import './styles.css'
import { getProjetos } from "../../data";
import { Outlet, NavLink } from 'react-router-dom'

export default () => {

  let projetos = getProjetos()

  console.log (projetos)

  return (
    <div className="main--container card">
      <h1>Meus projetos</h1>
      <nav className='main--menu'>
        {projetos.map((projeto) => (
          <NavLink
            style={({ isActive }) => {
              return {
                background: isActive ? '#837E9F' : ''
            }}}
            to={projeto.cod}
            key={projeto.cod}
          >
            <img src={projeto.icon} alt='imagem' className='main--iconMenu'/>
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}
