
let area = prompt('Qual a área você quer seguir, front-end(1) ou back-end(2)? Digite a opção: ');
let linguagem = 0;

if (area == 1){   
    area = 'front-end';
    linguagem = prompt('Qual linguagem você quer aprender, React(1) ou Vue(2)? Digite a opção: ');
    if (linguagem == 1) linguagem = 'react';
    if (linguagem == 2) linguagem = 'vue';

} else if(area == 2){
    area = 'back-end';
    linguagem = prompt('Qual linguagem você quer aprender, C#(1) ou Java(2)? Digite uma opção: ')
    if (linguagem == 1) linguagem = 'C#';
    if (linguagem == 2) linguagem = 'Java';
};

let especialidadeOuFullstack = prompt('Deseja seguir se especializando na área escolhida(1) ou seguir de desenvolvendo para se tornar um Fullstack(2)? Digite uma opção:');
if (especialidadeOuFullstack == 1){
    alert(`Continue estudando ${linguagem} para aperfeiçoar na área de ${area}.`);    
} else if (especialidadeOuFullstack == 2){
    alert(`Para tornar-se um dev FullStack deve-se aprender outras linguagens além de ${linguagem}`);    
};

let pergunta = prompt('Existe mais alguma linguagem que você deseja aprender? (sim ou não)');
while (pergunta == 'sim') {
    let novaLinguagem = prompt('Qual a nova linguagem');
    alert (`A linguagem ${novaLinguagem} é muito interessante!`);
    pergunta = prompt('Existe mais alguma linguagem que você deseja aprender? (sim ou não)');
};
