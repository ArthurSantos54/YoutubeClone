
var buttonAdd = document.getElementById("Add");
var deleteBtn = document.getElementById("Delete");
var ResearchBtn = document.getElementById("Research");



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
        resultado.innerText = inputAddDados.value;
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
     
    Tasks.notCompleted.forEach((task, index) => {
      
        if(item = task){
            console.log('valor encontrado: ', item );
        }else {
            console.log('valor não encontrado');
        }
    })
}
export const pesquisaNoArrey = (pesquisa) => {
    ResearchBtn.addEventListener('click', () =>{
        pesquisa.value = '';
        PesquisaItemNoArrey(pesquisa);

    });
};

const PesquisaItemNoArrey = (P) => {
    let Pesquisa = P.value;
    Tasks.notCompleted.forEach((task) => {
      
        if(Pesquisa = task){
            console.log('valor encontrado: ', Pesquisa);
        }else {
            console.log('valor não encontrado');
        }
    })
}