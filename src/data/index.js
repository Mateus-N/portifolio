let projetos = [
  {
    cod: '001',
    name: 'Netflix Clone',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png',
    print: 'https://github.com/Mateus-N/portifolio/blob/master/src/data/images/print-netflix.png?raw=true',
    link: 'https://github.com/Mateus-N/netflix-clone',
    descricao: 'Projeto desenvolvido para estudo e prática do ReactJS, utilizando fetch, React Router, consulta de API, entre outras funcionalidades'
  },
  {
    cod: '002',
    name: 'Primeiro projeto com ReactJS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    print: 'https://github.com/Mateus-N/portifolio/blob/master/src/data/images/print-react.png?raw=true',
    link: 'https://github.com/Mateus-N/portifolio',
    descricao: 'Primeiro projeto desenvolvido por mim utilzando ReactJS, faz uso de fetch, useState, useEffect, consulta de API, entre outras funcionalidades'
  }
]

export function getProjetos() {
  return projetos
}

export function getProjeto(cod) {
  return projetos.find(
    (projeto) => projeto.cod === cod
  )
}
