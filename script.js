const button = document.getElementById('button')
const page = document.querySelector('main')
const nav = document.querySelector('body')
const lista = document.getElementById('lista')


button.addEventListener('click', ()=>{
    page.classList.toggle('modo-noturno')
    page.style.transition = '0.7s';
    if(page.className == 'modo-noturno'){
        button.textContent = "Desativar"
    }else{
        button.textContent = "Modo Noturno"
    }
    nav.classList.toggle('navegador')
    nav.style.transition = '0.7s';
    lista.classList.toggle('lista')
    lista.style.transition = '0.7s';
})