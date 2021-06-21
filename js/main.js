'use strict'

function abrirModal(modalId){
    const modal = document.getElementById(modalId);
    if(modal){
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalId || e.target.id == 'cancelar'){
            modal.classList.remove('mostrar');
        }
      });
    }
}

const botaoPrecos = document.querySelector('#preco');
botaoPrecos.addEventListener('click', () => abrirModal('modalPreco'));

