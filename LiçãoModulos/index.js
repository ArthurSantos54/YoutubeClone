var inputAdicionar = document.getElementById("Adicionar");
var inputExcluir = document.getElementById("Excluir");

import { Tasks, pegarDados, excluirDados} from "./dataSource2.js";



[Tasks].push( ({Adicionar}) =>{
     
    Adicionar.forEach( item =>  console.log(item) )      
    
});
// console.log(Tasks);

pegarDados(inputAdicionar);

excluirDados(inputExcluir);