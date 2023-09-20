export default class ConsultaGithub {
    static perPage = 4;
    static async realizaConsulta(page) {
        const reposPromisse = await fetch(`https://api.github.com/users/Mateus-N/repos?page=${page}&per_page=${this.perPage}`);
        const repos = await reposPromisse.json();
        return repos;
    }
}
