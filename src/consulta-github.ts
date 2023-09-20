import { Repositorio } from "./repositorio";

export default class ConsultaGithub {
  private static perPage: number = 4

  public static async realizaConsulta(page: number): Promise<Repositorio[]> {
    const reposPromisse = await fetch(`https://api.github.com/users/Mateus-N/repos?page=${page}&per_page=${this.perPage}`)
    const repos: Repositorio[] = await reposPromisse.json()
    return repos
  }
}