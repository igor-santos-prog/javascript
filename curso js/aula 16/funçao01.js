function parimpar (n) { //O (n) É O PARÂMETRO
    if (n%2 == 0) { // AQUI É A AÇÃO
        return 'Par!'
    } else { 
        return 'Impar!' //E O RETORNO
    }
        
}

let res = parimpar(20) // CHAMADA A FUNÇÃO
console.log(res)

/* Neste caso o parametro é o valor de (n), que como esta está na chamada é 20, 
sendo assim foi usado o if com a ação de verificar se 20, no caso, dividido por dois daria sobra de 0 ou 1, 
se o resultado fosse == 0, retorna 'Par!' senão (else) retorna 'Impar!' 
por fim é adicionado o retorno da função parimpar, neste caso o nome da fnção representada acima, a variavel res.
então se eu mando mostrar res, ele ira mostrar o retorno desta função, neste caso Par!
*/