let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)
/*quando se cria uma varivel e adiciona o conteudo dela entre {},
 você cria um objeto, que faz a mesma função dos vetores, porém tem mais funcionalidades, 
 como poder colocar o nome que você quisar para as posições e adicionar functions dentro de uma variavel
 */