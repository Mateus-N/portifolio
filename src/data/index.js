let projetos = [
  {
    cod: 1,
    name: 'Netflix Clone',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png',
    print: '../../data/images/print-netflix.png',
    link: 'https://github.com/Mateus-N/netflix-clone'
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
