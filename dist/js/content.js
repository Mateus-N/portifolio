import { academicData } from "./academic-data.js";
import ConsultaGithub from "./consulta-github.js";
import { OpcoesContent } from "./opcoes-content.js";
import { profissionalData } from "./profissional-data.js";
export default class Content {
    container;
    reposPage;
    repos;
    academic = academicData;
    profissional = profissionalData;
    constructor() {
        this.container = document.querySelector('.content');
        this.home();
    }
    changeContent(opcao) {
        if (opcao == OpcoesContent.Home) {
            this.home();
        }
        else if (opcao == OpcoesContent.Projetos) {
            this.projetos();
        }
        else if (opcao == OpcoesContent.Academico) {
            this.academico();
        }
        else if (opcao == OpcoesContent.Profissional) {
            this.Profissional();
        }
    }
    home() {
        this.container.innerHTML = `<p class="apresentacao">
      Olá, me chamo Mateus, atuo como desenvolvedor de software full-stack, com maior experiência em .NET e Angular, mas também tenho contato com Java, Spring e outras tecnologias.</br></br>
      Estou cursando o Tecnólogo em Análise e Desenvolvimento de Sistemas, nas abas Projetos, Acadêmico e Profissional você poderá conhecer um pouco mais sobre mim e minhas experiências.
    </p>`;
    }
    async projetos() {
        this.reposPage = 1;
        this.repos = await ConsultaGithub.realizaConsulta(this.reposPage);
        this.adicionaEstruturaParaProjetos();
        this.adicionaReposAoContainer(this.repos);
    }
    async carregarMaisProjetos() {
        this.reposPage++;
        const newRepos = await ConsultaGithub.realizaConsulta(this.reposPage);
        if (newRepos.length > 0) {
            this.adicionaReposAoContainer(newRepos);
        }
        else {
            const containerBotaoCarregarMais = document.querySelector('.carregar-mais');
            containerBotaoCarregarMais.innerHTML = `Não há mais repositórios.`;
        }
    }
    adicionaEstruturaParaProjetos() {
        this.container.innerHTML = `<h2 class="titulo__projetos">Confira meus repositórios no GitHub.</h2>
      <div class="projetos"></div>`;
        this.criarBotaoCarregarMais();
    }
    adicionaReposAoContainer(newRepos) {
        const projetosContainer = this.container.querySelector('.projetos');
        newRepos.forEach(repo => {
            projetosContainer.innerHTML += `<div class="projetos__card">
        <h2>${repo.name}</h2>
        <a href="${repo.html_url}" target="_blank">Link</a>
      </div>`;
        });
    }
    criarBotaoCarregarMais() {
        this.container.innerHTML += `<div class="carregar-mais">
      <button class="carregar-mais__botao">
        Carregar mais
      </button>
    </div>`;
        const carregarMaisProjetos = document.querySelector('.carregar-mais');
        carregarMaisProjetos.addEventListener('click', () => {
            this.carregarMaisProjetos();
        });
    }
    adicionaEstruturaParaAcademico() {
        this.container.innerHTML = `<div class="academic"></div>`;
    }
    academico() {
        this.adicionaEstruturaParaAcademico();
        const academicContainer = this.container.querySelector('.academic');
        this.academic.forEach(acad => {
            academicContainer.innerHTML += `<div class="academic__card">
        <div>
          <h2>${acad.instituicao}</h2>
          <p>${acad.curso}</p>
        </div>
        <p>${acad.inicio} - ${acad.final}</p>
      </div>`;
        });
    }
    adicionaEstruturaParaProfissional() {
        this.container.innerHTML = `<div class="jobs__container"></div>`;
    }
    Profissional() {
        this.adicionaEstruturaParaProfissional();
        const jobsContainer = this.container.querySelector('.jobs__container');
        this.profissional.forEach(job => {
            jobsContainer.innerHTML += `<div class="jobs">
        <div class="jobs__company">
          <h2>${job.empresa}</h2>
          <p>${job.inicio} - ${job.final}</p>
        </div>
        <ul class="jobs__details__${job.id}"></ul>
      </div>`;
            const detailsContainer = this.container.querySelector(`.jobs__details__${job.id}`);
            job.detalhes.forEach(detail => {
                detailsContainer.innerHTML += `<li> - ${detail}</li>`;
            });
        });
    }
}
