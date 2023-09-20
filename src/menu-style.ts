export default class MenuStyle {
  private itemAtivo: HTMLLIElement

  constructor() {
    const botaoHome: HTMLButtonElement = document.querySelector('.buttom__home')
    this.itemAtivo = botaoHome.parentElement as HTMLLIElement
    this.adicionaClasseNovoItem()
  }

  public alterarItemAtivo(novoBotao: HTMLButtonElement): void {
    this.removeClasseDoItemAtual()
    this.itemAtivo = novoBotao.parentElement as HTMLLIElement
    this.adicionaClasseNovoItem()
  }
  
  private removeClasseDoItemAtual(): void {
    this.itemAtivo.classList.remove('header__item__ativo')
  }

  private adicionaClasseNovoItem(): void {
    this.itemAtivo.classList.add('header__item__ativo')
  }
}