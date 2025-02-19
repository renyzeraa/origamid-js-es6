// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img')
console.log(todasImagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemSelect = document.querySelectorAll('[src^="assets/imagem"]')
console.log(imagemSelect)

// Selecione todos os links internos (onde o href começa com #)
const linksSelect = document.querySelectorAll('[href^="#"]')
console.log(linksSelect)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2.innerHTML)

// Selecione o último p do site
const selectP = document.querySelectorAll('p')
ultimoP = selectP[selectP.length - 1]
console.log(ultimoP.innerHTML)
