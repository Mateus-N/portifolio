export default class MenuStyle {
    itemAtivo;
    constructor() {
        const botaoHome = document.querySelector('.buttom__home');
        this.itemAtivo = botaoHome.parentElement;
        this.adicionaClasseNovoItem();
    }
    alterarItemAtivo(novoBotao) {
        this.removeClasseDoItemAtual();
        this.itemAtivo = novoBotao.parentElement;
        this.adicionaClasseNovoItem();
    }
    removeClasseDoItemAtual() {
        this.itemAtivo.classList.remove('header__item__ativo');
    }
    adicionaClasseNovoItem() {
        this.itemAtivo.classList.add('header__item__ativo');
    }
}
