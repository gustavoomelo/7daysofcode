
let nome = prompt('Qual é o seu nome?');
let idade = prompt('Qual é a sua idade?');
let linguagem = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}.`);

let gostar = prompt(`Você gosta de estudar ${linguagem}? (Responda com o número 1 para SIM ou 2 para Não)`);

if (gostar == 1){
    alert('Muito bom! continue estudando e você terá muito sucesso.');
} else {
    if (gostar == 2){
        alert('Ahh que pena... Já tentou arender outras linguagens?');    
    } else {
        alert('Sua resposta não foi uma escolha válida!');
    }
}
