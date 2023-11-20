const incrementar = (element, itemId) => {
    let quantidadeElement = element.parentNode.querySelector('input[type="number"]');
    quantidadeElement.value++;

    if (quantidadeElement.value >= 10) {
        quantidadeElement.value = 10;
    }
};

const decrementar = (element, itemId) => {
    let quantidadeElement = element.parentNode.querySelector('input[type="number"]');
    quantidadeElement.value--;

    if (quantidadeElement.value < 0) {
        quantidadeElement.value = 0;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const incrementarButtons = document.querySelectorAll('.incrementar');
    const decrementarButtons = document.querySelectorAll('.decrementar');

    incrementarButtons.forEach(button => {
        button.addEventListener('click', () => incrementar(button));
    });

    decrementarButtons.forEach(button => {
        button.addEventListener('click', () => decrementar(button));
    });
});

// Função para adicionar ao carrinho
const adicionarAoCarrinho = (itemId) => {
    // Obtenha informações do item
    const titulo = document.getElementById(itemId).querySelector('.titulo').innerText;
    const descricao = document.getElementById(itemId).querySelector('.descricao').innerText;
    const precoText = document.getElementById(itemId).querySelector('span').innerText;
    const quantidade = document.getElementById(itemId).querySelector('input[type="number"]').value

    const preco = parseFloat(precoText)

    const newProco = preco * quantidade
    
    const produto = {
        titulo,
        descricao,
        preco: newProco,
        quantidade,
    }
    const listaCarrinho = document.getElementById("listaCarrinho");
    const name = document.createElement('h1');
    const quantidadetext = document.createElement('h1');
    const valortext = document.createElement('h1');
    const Container = document.createElement('div');

    name.innerHTML = titulo;
    quantidadetext.innerHTML = quantidade
    valortext.innerHTML = newProco

   
    Container.appendChild(name);
    Container.appendChild(quantidadetext);
    Container.appendChild(valortext);
    listaCarrinho.appendChild(Container);



};
