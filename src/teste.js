const paises = [
    {nome: 'Brazil'},
    {nome: 'Cuba'},
    {nome: 'França'}
]

const paiz = 'Cuba'

const find = paises.find((
    item)=> item.nome === paiz )

console.log(find)

const filter = paises.filter((
    item)=> item.nome === paiz )


console.log(filter)

const nome = "genildo"
console.log(nome[0].toUpperCase() + nome.slice(1))