//Front-End ou Back-End?
let perguntaUm = prompt('Qual área você quer seguir, front-end(1) ou back-end(2)');
let perguntaDois = 0; //declaração para segunda pergunta.
let perguntaTecnologias = 0; //declaração para a pergunta sobre as tecnologias.
let perguntaEspecialidadeOuFullstack = 0;

if (perguntaUm == 1){
    perguntaDois = prompt('Você quer aprender React(1) ou Vue(2)');

} else if (perguntaUm == 2){
    perguntaDois = prompt('Você quer aprender C#(1) ou Java(2)');

} else alert('Você não fez uma escolha válida');
    
perguntaEspecialidadeOuFullstack = prompt('Você deseja se especializar(1) ou seguir para carreira Full-stack(2)?');

if (perguntaEspecialidadeOuFullstack == 1){
    if (perguntaUm == 1 && perguntaDois == 1){
        alert(`Continue estudando React para especializar em Front-End`);
    } else if (perguntaUm == 1 && perguntaDois == 2){
        alert('Continue estudando Vue para especialar em Front-End');
    } else if (perguntaUm == 2 && perguntaDois == 1){
        alert('Continue estudando C# para especilizar em Back-End');
    } else if (perguntaUm == 2 && perguntaDois == 2){
        alert('Continue estudando Java para especilar em Back-End');
    };
}
