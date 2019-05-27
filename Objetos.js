const casa = {

    cor:'branco',
    corPorta:'Amarelo',
    corTelhado:'Vermelho',
    altura:4,
    largura:3
}

//console.log (casa)

console.log('casa', JSON.stringify(casa))


console.log(casa.cor)

casa['corPorta'] = 'azul'

console.log('casa', JSON.stringify(casa))