import React from "react";
import { getProjeto } from "../../data";
import { useParams } from "react-router-dom";
import './styles.css'

export default () => {

  let params = useParams()
  let projeto = getProjeto(params.projectId)

  if (projeto == undefined) {
    projeto = getProjeto('001')
  }

  return (
    <div className="project--container">
      <h2>{projeto.name}</h2>
      <img src={projeto.print} alt="Imagem" className="project--image"/>
      <p>{projeto.descricao}</p>
      <a href={projeto.link} target='_blank'>Caso queira ver o código completo clique aqui</a>
    </div>
  )
}
