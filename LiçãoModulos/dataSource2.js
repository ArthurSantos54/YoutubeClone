
var buttonAdd = document.getElementById("Add");
var deleteBtn = document.getElementById("Delete");
var pesquisaBtn = document.getElementById("Pesquisa-btn");
var resultadoEl = document.getElementById("resultado");


export let Tasks ={
    notCompleted: [],
    completed: [],
};

export const pegarDados = (inputAddDados) => {
    buttonAdd.addEventListener('click', () => {
        if (inputAddDados.value != ""){
            resultadoEl.innerText = inputAddDados.value;
            salvarDados(inputAddDados);  
            inputAddDados.value = '';
        }else{
            resultadoEl.innerHTML = 'Por favor preencher esse campo!';       
        }
    })
}
;

const salvarDados = (dados) => {
    Tasks.notCompleted.push(dados.value);
    console.log(Tasks.notCompleted);
};

// //Usar essa função para mover o item do arrey notcompleted para o completed
// export const excluirDados = (inputDeleteDados) => {
//     deleteBtn.addEventListener('click', () =>{
//         console.log(inputDeleteDados.value);
        
//         var valor = inputDeleteDados.value;
        
//         var indice =  Tasks.notCompleted.indexOf(valor);
//         while(indice >= 0){
//             Tasks.notCompleted.splice(indice);
//             indice = Tasks.notCompleted.indexOf(valor);
//         }
        
//         console.log(indice );
//          inputDeleteDados.value = '';
//          removerDoArrey(inputDeleteDados);
        
//         resultado.innerText = " Valor removido do arrey"
//     });
    
// };

// const removerDoArrey = (valor) => {
//     let item = valor.value;
    
//     Tasks.notCompleted.forEach((task, index) => {
        
//         if(item == task){
//             console.log('valor encontrado: ', item );
//         }else {
//             console.log('valor não encontrado');
//         }
//     })
// }



export const pesquisaNoArrey = (pesquisa) => {
    pesquisaBtn.addEventListener('click', () =>{        
      let resultadoDaPesquisa =  PesquisaItemNoArrey(pesquisa,Tasks);

      if(resultadoDaPesquisa){
          resultadoEl.innerHTML = resultadoDaPesquisa;
        } else {
          resultadoEl.innerHTML = 'Valor não encontrado!';
      }

          pesquisa.value = '';
    });         
};

const PesquisaItemNoArrey = (valorProcurado, arrey) => {
    let valorDaPesquisa = valorProcurado.value;
    let {notCompleted} = arrey;
    
    if (valorDaPesquisa !== ''){
        let resultado = notCompleted.filter( item => {
            return  item == valorDaPesquisa       
            
        });
        return resultado;
    }
}

export const removerItemDoArrey = (pesquisa) => {
    deleteBtn.addEventListener('click', () =>{        
      let resultadoDaPesquisa =  excluirDoArrey(pesquisa,Tasks);

      if(resultadoDaPesquisa){
          resultadoEl.innerHTML ='Item foi removido';
        } else {
          resultadoEl.innerHTML = 'Item não foi removido';
      }
      pesquisa.value = '';
    });         
};

const excluirDoArrey = (valorProcurado, arrey) => {
    let valorDaPesquisa = valorProcurado.value;
    let {notCompleted} = arrey;

    if (valorDaPesquisa !== ''){
        let resultado = notCompleted.filter( item => {
            return  item !== valorDaPesquisa       
            
        });

        Tasks.notCompleted = resultado;
        console.log( Tasks.notCompleted)

        return resultado;
    }


}