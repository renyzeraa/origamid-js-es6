// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a')

menu.forEach(item => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach(item => {
  item.classList.remove('ativo')
})
menu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imgS = document.querySelectorAll('img')

imgS.forEach(img => {
  const possuiAlt = img.hasAttribute('alt')
  console.log(possuiAlt)
})

// Modifique o href do link externo no menu
const linkHref = document.querySelector('a[href^="http"]')

linkHref.setAttribute('href', 'https://google.com')
console.log(linkHref)
