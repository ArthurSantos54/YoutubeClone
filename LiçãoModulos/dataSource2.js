
var buttonAdd = document.getElementById("Add");
var deleteBtn = document.getElementById("Delete");
var pesquisaBtn = document.getElementById("Pesquisa-btn");
var resultadoEl = document.getElementById("resultado");



// function arrey(Adicionar){
//     if(Adicionar.value !=""){        
//         [Tasks].map( ({Adicionar}) =>{
     
//             Adicionar.forEach( item =>   console.log(item) )      
             
//          });
//     } else{
        
//     }
// }
 


export let Tasks ={
    notCompleted: [],
    completed: [],
};

export const pegarDados = (inputAddDados) => {
    buttonAdd.addEventListener('click', () => {
        resultadoEl.innerText = inputAddDados.value;
        salvarDados(inputAddDados);  
        inputAddDados.value = '';
        
    })
};

const salvarDados = (dados) => {
    Tasks.notCompleted.push(dados.value);
    console.log(Tasks.notCompleted);
};

export const excluirDados = (inputDeleteDados) => {
    deleteBtn.addEventListener('click', () =>{
        
        console.log(inputDeleteDados.value);
        inputDeleteDados.value = '';
        removerDoArrey(inputDeleteDados);
        
        resultado.innerText = " Valor removido do arrey"
    });
    
};

const removerDoArrey = (valor) => {
    let item = valor.value;
    
    var valor = "a";
    var indice =  Tasks.notCompleted.indexOf(valor);
    while(indice >= 0){
        Tasks.notCompleted.splice(indice);
        indice = Tasks.notCompleted.indexOf(valor);
    }

    console.log(indice );
    Tasks.notCompleted.forEach((task, index) => {
        
        if(item == task){
            console.log('valor encontrado: ', item );
        }else {
            console.log('valor não encontrado');
        }
    })
}

export const pesquisaNoArrey = (pesquisa) => {
    pesquisaBtn.addEventListener('click', () =>{        
      let resultadoDaPesquisa =  PesquisaItemNoArrey(pesquisa,Tasks);
        pesquisa.value = '';
        resultadoDaPesquisa.map(result => {
            if (result !== false) {
                resultadoEl.innerText = 'Valor encontrado: ' + result;            
            }
        });  
        
    });
};

const PesquisaItemNoArrey = (valorProcurado, arrey) => {
    let valorDaPesquisa = valorProcurado.value;
    let {notCompleted} = arrey;
    let resultado = notCompleted.map((task) => {
        if(valorDaPesquisa == task){            
            return valorDaPesquisa;
        }
    });
    return resultado;
}