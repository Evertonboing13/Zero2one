function ListaProdutos() {

    const URL = 'http://192.168.25.160:3000/produtos';

    fetch(URL, {
            metodo: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(async response => {
            additem(await response.json());
        })
        .catch(error => {
            console.log(error)
        });

    console.log(`teste`)
}

function additem(jsonItens) {

    var idItemD = this.idItem
    
    document.getElementById("tbody1").innerHTML = ""
    
    for (let index = 0; index < jsonItens.length; index++) {
    
        let strDiv = `            
         
            <td>${index}</td>
            <td>${jsonItens[index].nome}</td>
            <td>${jsonItens[index].qtd}</td>
            <td>0</td>
            <td> <button type="button" class="btn btn-success">Success</button></td>
            <td><button type="button" class="btn btn-danger">Excluir</button></td>
        </tr>            
        </div>                                   
    
        `
    
        var tr = document.createElement("tr");
       // div.setAttribute("class", "item")
       // div.setAttribute("id", "itens_" + index)
       // this.idItem = idItemD + 1
        tr.innerHTML = strDiv;
        document.getElementById("tbody1").appendChild(tr);
        //<button type="button" class="altera" id='${jsonItens[index].codigo}' onclick="">altera</button>
    }
    
    
    }
    

    function Adicionaitem() {


        const nome = document.getElementById("nomeProduto").value
        const qntd = document.getElementById("quantidade").value
        const valor = document.getElementById("Valorproduto").value

      
        const URL = 'http://192.168.25.160:3000/produtos';
    
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    qtd: qntd,
                    valor: valor,
                })
            })
            .then(async response => {
                console.log(await response.json());
            })
            .catch(error => {
                console.log(error)
            });
    
        console.log(`teste`)
    
        ListaProdutos()
    }



