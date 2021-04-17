var inputNome = document.getElementById("nome");
var inputIdade = document.getElementById("idade");
var inputPais = document.getElementById("pais");
var tabelaDados = document.getElementById("dados-usuarios-table");

function cadPessoa(tabela,nome,idade,pais){
    if(nome.value && idade.value && pais.value !=""){        
        let linha = `
            <tr>
                <td>${nome.value}</td>
                <td>${idade.value}</td>
                <td>${pais.value}</td>            
            </tr>`
         tabela.innerHTML += linha;        
    } else{
        alert("Por favor preencher todos os campos!")
    }
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
})

