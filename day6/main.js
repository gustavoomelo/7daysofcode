let inserirComida = prompt('Você deseja adicionar uma comida na sua lista de compras? (1) SIM ou (2) NÃO. Digite uma opção:');
while (inserirComida != 1 && inserirComida !=2) inserirComida = prompt('Você deve escolher a opção 1 ou 2, tente novamente:\nVocê deseja adicionar uma comida na sua lista de compras? (1) SIM ou (2) NÃO. Digite uma opção:');

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

while (inserirComida == 1){
    let comida = prompt('Qual comida você deseja inserir?');
    let categoria = prompt ('Qual categoria essa comida se encaixa? Frutas(1); laticínios(2); congelados(3); doces(4) e outros(5)');
    if (categoria == 1) frutas.push(comida);
    else if (categoria == 2) laticinios.push(comida);
    else if (categoria == 3) congelados.push(comida);    
    else if (categoria == 4) doces.push(comida);
    else if (categoria == 5) outros.push(comida);

    inserirComida = prompt('Você deseja adicionar uma comida na sua lista de compras? (1) SIM ou (2) NÃO, ou (3)Remover algum item da lista.\nDigite uma opção:');
    while (inserirComida != 1 && inserirComida != 2 && inserirComida!=3) inserirComida = prompt('Voce deve escolher a opção 1, 2 ou 3. Tente novamente:\nVocê deseja adicionar uma comida na sua lista de compras? (1) SIM ou (2) NÃO, ou (3)Remover algum item da lista.\nDigite uma opção:');

    while (inserirComida==3){
        let produtoRemover = prompt(`Essa é a lista atual:\n\nFrutas: ${frutas.join(', ')}\nLaticínios: ${laticinios.join(', ')}\nCongelados: ${congelados.join(', ')}\nDoces: ${doces.join(', ')}\nOutros: ${outros.join(', ')}.\n\nDigite o nome do produto que deseja remover, ou digite  (1) para inserir um novo produto ou (2) para finalizar`);
        

        if (produtoRemover == 1) inserirComida = 1
        else if(produtoRemover == 2) inserirComida = 2
        else if(frutas.indexOf(produtoRemover) >= 0) frutas.splice(frutas.indexOf(produtoRemover), 1)
        else if(laticinios.indexOf(produtoRemover) >= 0) laticinios.splice(laticinios.indexOf(produtoRemover), 1)
        else if(congelados.indexOf(produtoRemover) >= 0) congelados.splice(congelados.indexOf(produtoRemover), 1)
        else if(doces.indexOf(produtoRemover) >= 0) doces.splice(doces.indexOf(produtoRemover), 1)
        else if(outros.indexOf(produtoRemover) >= 0) outros.splice(outros.indexOf(produtoRemover), 1)
        else alert('Esse produto não foi encontrado!');     
    };
};



alert(`Lista final de compras:\n\n\nFrutas: ${frutas.join(', ')}\nLaticínios: ${laticinios.join(', ')}\nCongelados: ${congelados.join(', ')}\nDoces: ${doces.join(', ')}\nOutros: ${outros.join(', ')}.`);



