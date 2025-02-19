const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primaryValue = comidas.shift();
const lastValue = comidas.pop();
console.log(primaryValue, lastValue);

comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');
console.log('Comidas =>', comidas);

/* -------------------- */
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort().reverse();
console.log(estudantes.map(names => names.toLowerCase()).indexOf('joana') > 0);
console.log(estudantes.map(names => names.toLowerCase()).indexOf('Juliana') > 0);
console.log('Estudantes =>',estudantes);

/* -------------------- */
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul').split('div').join('li')
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros.slice();

carros.pop();

console.log(carros);
console.log(carrosCopia);