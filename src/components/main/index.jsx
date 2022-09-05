import './styles.css'
import { getProjeto } from "../../data";

export default () => {

  let projeto = getProjeto(1)

  return (
    <div className="main card">
      <h2>{projeto.name}</h2>
      <img src={projeto.print} alt="Imagem" />
    </div>
  )
}
