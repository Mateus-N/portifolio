import { ProfissionalCard } from "./Profissional-card.js";

export const profissionalData: ProfissionalCard[] = [
  {
    id: 1,
    empresa: 'Infortech Automação',
    inicio: 'Mar 2018',
    final: 'Out 2022',
    detalhes: [
      'Lider de suporte para automação comercial e certificado digital',
      'Realização de treinamentos para emissão de certificado digital',
      'Acompanhamento de cliente para uso de cerificados digitais',
      'Realização de auditorias para manter integridade da emissão de certificados'
    ]
  },
  {
    id: 2,
    empresa: 'Framework Digital',
    inicio: 'Out 2022',
    final: 'Atualmente',
    detalhes: [
      'Experiência em desenvolvimento de aplicações com .NET CORE',
      'Experiência em desenvolvimento de aplicações com Angular',
      'Sustentação de aplicações em .NET Full Framework (3.5, 4.x)',
      'Sólidos conhecimentos em Orientação a Objetos',
      'Experiência de desenvolvimento e consumo de Rest API',
      'Experiência com persistência de dados aplicando Repository Pattern com os bancos de dados: SQL Server, MySql e Postgresql (Entity Framework)',
      'Vivencia diária com as tecnologias: Docker, git, JWT, TypeScript, SOLID, TDD, Scrum, REDIS e Linux',
    ]
  }
]