var formlogin = document.querySelector('#login');
var formcadastro = document.querySelector('#cadastro');
var corbutao = document.querySelector('#corbutao');

document.querySelector('#login').addEventListener('click', () => {
    formlogin.style.left = '25px';
    formcadastro.style.left = '450px';
    corbutao.style.left = '0px';
})

document.querySelector('#cadastro').addEventListener('click', () => {
    formlogin.style.left = '-450px';
    formcadastro.style.left = '25px';
    corbutao.style.left = '110px';
})