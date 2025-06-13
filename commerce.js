import { produtosGatos } from "./produtos.js";

const divProdutos = document.getElementById('div-produtos')
const navRacoes = document.getElementById('racoes')
const navPetiscos = document.getElementById('petiscos')
const navCama = document.getElementById('cama')
const navCaixa = document.getElementById('caixas')
const navRoupas = document.getElementById('roupas')
const liMenorPreco = document.getElementById('menor-preco')
const liMedioPreco = document.getElementById('medio-preco')
const liAltoPreco = document.getElementById('alto-preco')
const liMaximoPreco = document.getElementById('maximo-preco')
const liMarcaUm = document.getElementById('limarca1')


function filtroMarca(marcasSelecionadas) {
    const filtrarMarca = produtosGatos.filter(element => marcasSelecionadas.includes(element.marca));
    
    divProdutos.innerHTML = '';  // Limpa a div antes de renderizar

    filtrarMarca.forEach(produto => {
      divProdutos.innerHTML += `
            <div class="product-card">
                <img src="${produto.imagem}" alt="${produto.nome}" />
                <h2>${produto.nome}</h2>
                <h5>${produto.preco}</h5>
                <p>${produto.descricao}</p>
                <p class="installments">ou 10x de R$ 9,99 sem juros</p>
                <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
            </div>
        `;
    });
    };


function createAllProdutos() {
       divProdutos.innerHTML = '';
        produtosGatos.map(produto => {
        divProdutos.innerHTML += `
            <div class="product-card">
                <img src="${produto.imagem}" alt="${produto.nome}" />
                <h2>${produto.nome}</h2>
                <h5>${produto.preco}</h5>
                <p>${produto.descricao}</p>
                <p class="installments">ou 10x de R$ 9,99 sem juros</p>
                <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
            </div>
        `;
    });
} 

function filtroPreco(n1,n2) {
    const filtrarPreco = produtosGatos.filter(element => element.preco > n1 && element.preco < n2)
        divProdutos.innerHTML = '';
     filtrarPreco.map(produto => {
        divProdutos.innerHTML += `
            <div class="product-card">
                <img src="${produto.imagem}" alt="${produto.nome}" />
                <h2>${produto.nome}</h2>
                <h5>${produto.preco}</h5>
                <p>${produto.descricao}</p>
                <p class="installments">ou 10x de R$ 9,99 sem juros</p>
                <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
            </div>
        `;
    });
}



function todosProdutos(categoria) {
    divProdutos.innerHTML = '';
    const produtosFiltrados = produtosGatos.filter(produto => produto.categoria == categoria);

    produtosFiltrados.map(produto => {
        divProdutos.innerHTML += `
            <div class="product-card">
                <img src="${produto.imagem}" alt="${produto.nome}" />
                <h2>${produto.nome}</h2>
                <h5>${produto.preco}</h5>
                <p>${produto.descricao}</p>
                <p class="installments">ou 10x de R$ 9,99 sem juros</p>
                <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
            </div>
        `;
    });
}

navRacoes.addEventListener('click', () => {
    todosProdutos("Rações");
})
navPetiscos.addEventListener('click', () => {
    todosProdutos("Petiscos");
})
navCama.addEventListener('click', () => {
    todosProdutos("Camas e arranhadores");
})

navCaixa.addEventListener('click', () => {
    todosProdutos("Caixas e areias");
});
navRoupas.addEventListener('click', () => {
    todosProdutos("Roupas");
})

liMenorPreco.addEventListener('click', () => {
    filtroPreco(0,50);
})

liMedioPreco.addEventListener('click', () => {
    filtroPreco(51,100);
})

liAltoPreco.addEventListener('click', () => {
    filtroPreco(101,200);
})

liMaximoPreco.addEventListener('click', () => {
    filtroPreco(200,500);
})

liMarcaUm.addEventListener('click', () => {
    filtroMarca();
})

window.addEventListener('DOMContentLoaded', () => {
    createAllProdutos();
})



