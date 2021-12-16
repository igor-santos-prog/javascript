let num = [5,8,2,9,3] //vetor
num.push(1) // Adiciona um valor ao vetor na ultima posição (o numero (1) é o valor que será adicionado, não a posição dele)
num.sort() //coloca os valores do vetor em ordem
console.log(num) 
console.log(`O vetor tem ${num.length} posiçôes`) // o length é usado para mostrar qual o comprimento do vetor, ou seja, quantas posiçôes ele tem
console.log(`O primeiro valor do vetor é ${num[0]}`) // Mostra qual é o primeiro valor do vetor, lembrando que o vetor COMEÇA NA POSIÇÃO 0 


let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)
/* O .indexOf() procura o valor que esta entre parentes e mostra qual é a posição dele,
 neste caso como o .short está colocando os valores em ordem o 8 se encontra na posição 4 */



 let pos = num.indexOf(4)
 if (pos == -1) {
    console.log('O valor não foi encontrado!')
 } else {
    console.log(`O valor 8 esta na posição ${pos}`)  
 }
 // Quando o .indexOf não encontra o valor, ele determina como -1, então neste caso foi usado o if para que quando o valor for -1 ele mostrar a mensagem

