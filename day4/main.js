let numero = Math.floor(Math.random() * (10 + 1));
let venceu = 0;

for (i = 0; i < 3 && !venceu; i++){
    let tentativa = prompt(`Digite um chute de 0 a 10 (tentativa ${i+1} de 3):`);
    if (tentativa == numero){
        alert('Você acertou, parabéns!');
        venceu = true;
    }
    else if (i < 2) alert('Tente outra vez!');    
};

if (!venceu) alert ('Você perdeu!')

