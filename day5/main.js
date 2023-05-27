let inserirComida = prompt('Você deseja adicionar uma comida na sua lista de compras? (1) SIM ou (2) NÃO. Digite uma opção:');
if (inserirComida == 1) inserirComida = true;
if (inserirComida == 2) inserirComida = false;

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

while (inserirComida){
    let comida = prompt('Qual comida você deseja inserir?');
    let categoria = prompt ('Qual categoria essa comida se encaixa? Frutas(1); laticínios(2); congelados(3); doces(4) e outros(5)');
    if (categoria == 1) frutas.push(comida);
    else if (categoria == 2) laticinios.push(comida);
    else if (categoria == 3) congelados.push(comida);    
    else if (categoria == 4) doces.push(comida);
    else if (categoria == 5) outros.push(comida);

    inserirComida = prompt('Você deseja adicionar uma comida na sua lista de compras? (1) SIM ou (2) NÃO. Digite uma opção:');
    if (inserirComida == 1) inserirComida = true;
    if (inserirComida == 2) inserirComida = false;
}

alert(`Lista de compras:\n\n\nFrutas: ${frutas.join(', ')}\nLaticínios: ${laticinios.join(', ')}\nCongelados: ${congelados.join(', ')}\nDoces: ${doces.join(', ')}\nOutros: ${outros.join(', ')}.`);



