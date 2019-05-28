function additem(jsonItens) {

var idItemD = this.idItem

document.getElementById("divItens").innerHTML = ""

for (let index = 0; index < 3; index++) {

    let strDiv = `            
                                            
    <div id="Contador">                      
        <h3 id="codigo_${index}>item:${jsonItens[index].id}</h3>                     
    </div>                                   
                                            
    <div id="produtos">                      
        <h3 id="nome_${index}" >nome:${jsonItens[index].nome}</h3>    
    </div>                                   
                                            
    <div id="valor">                         
        <h3 id="Valor_${index}" >qntd:${jsonItens[index].qtd}</h3>                    
    </div>                                   

    `

    var div = document.createElement("div");
    div.setAttribute("class", "item")
    div.setAttribute("id", "itens_" + index)
    this.idItem = idItemD + 1
    div.innerHTML = strDiv;
    document.getElementById("divItens").appendChild(div);
    //<button type="button" class="altera" id='${jsonItens[index].codigo}' onclick="">altera</button>
}


}



function ListaProdutos() {

        const URL = 'http://www.mocky.io/v2/5cec87cc330000239b6d7ac4';
    
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
    


    function alteraProdutos() {

        document.getElementById("divItens").innerHTML = ""

        for (let index = 0; index < 3; index++) {

          
            const produto = document.getElementById('nome_'+index).value;
            const quantidade = document.getElementById("valor_"+index).value



            let strDiv = `            
                                                    
            <div id="Contador">                      
                <h3 id="codigo_${index}>item:${index}</h3>                     
            </div>                                   
                                                    
            <div id="produtos">                      
                <h3 id="nome_${index}" >nome:${produto}</h3>    
            </div>                                   
                                                    
            <div id="valor">                         
                <h3 id="Valor_${index}" >qntd:${quantidade}</h3>                    
            </div>                                   
        
            `
           if (quantidade > 0)
           {
                var div = document.createElement("div");
                div.setAttribute("class", "item")
                div.setAttribute("id", "itens_" + index)
                div.innerHTML = strDiv;
                document.getElementById("divItens").appendChild(div);
                //<button type="button" class="altera" id='${jsonItens[index].codigo}' onclick="">altera</button>
            } 
        }
    
        
    }


