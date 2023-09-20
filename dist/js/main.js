import Content from "./content.js";
import MenuStyle from "./menu-style.js";
const botoesMenu = document.querySelectorAll('.header__buttom');
const contentGenerator = new Content();
const menuItems = new MenuStyle();
botoesMenu.forEach(botao => {
    botao.addEventListener('click', () => {
        menuItems.alterarItemAtivo(botao);
        contentGenerator.changeContent(botao.textContent);
    });
});
