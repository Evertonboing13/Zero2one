const pessoas = ['Rodolfo','Jose', 'Matheus','joana','Maria','Roberta'];


let index  = pessoas.indexOf('Rodolfo');
pessoas.splice(index,  1);
 
let index2 = pessoas.indexOf('Jose');
pessoas.splice(index2, 1);

let index3 = pessoas.indexOf('Maria');
pessoas.splice(index3, 1);


pessoas.push("Renata");
pessoas.pop()
pessoas.shift()


//let filtered = pessoas.filter(isBigEnough);
//let filtro = pessoas.filter(pessoas => pessoas.includes("O"));

let pessoasO = []
let novoIndice = 0 

function filtra(item, indice) {
    

    if (pessoas[indice].indexOf("O") == 0) {
        pessoasO[novoIndice] = pessoas[indice];
        novoIndice++
    }
}
pessoas.forEach(filtra);

console.log(pessoasO)






