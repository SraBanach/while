// numeros primos sao tosos aquele que e divisivel por 2 e por ele mesmo
console.log ("Imprima todos os números primos de 1 a 50 utilizando um laço de repetição.") 

cont = 0 
while (cont <= 50){ 
    if (cont % 2 == 0 && cont % cont == 0)
    console.log (cont)
cont = cont + 1 
}
