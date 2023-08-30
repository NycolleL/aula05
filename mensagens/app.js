'use strict'
    const usuarios = [
    {
        nome: 'Henry Cavill',
        imagem: 'henry.jpg'
    },
    {
        nome: 'Harry Styles',
        imagem: 'harry.jpg'
    },
    {
        nome: 'Adriana Lima',
        imagem: 'adriana.jpg'
    },
    {
        nome: 'Michele Morrone',
        imagem: 'michele.jpg'
    }
]

function mostrarUsuarios(usuarios){
    const cardContainer = document.getElementById('foto-usuario')
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${usuarios.imagem}`
    imagem.alt = usuario.nome

    const cardDescription = document.createElement('div')
    cardDescription.classList.add('foto-usuario')

    const nome = document.createElement('h2')
    nome.textContent = usuario.nome

    const cargo = document.createElement('p')
    cargo.textContent = usuario.cargo

    cardDescription.replaceChildren(nome, cargo)
    card.replaceChildren(imagem, cardDescription)
    cardContainer.appendChild(card)
}

usuarios.forEach(mostrarCards)