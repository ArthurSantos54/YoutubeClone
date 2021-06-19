var inputAdicionar = document.getElementById("Adicionar");
var inputExcluir = document.getElementById("Excluir");
var inputPesquisa = document.getElementById("Pesquisa-input");

import { Tasks, pegarDados, removerItemDoArrey, pesquisaNoArrey} from "./dataSource2.js";


[Tasks].push( ({Adicionar}) =>{
     
    Adicionar.forEach( item =>  console.log(item) )      
    
});
// console.log(Tasks);


pesquisaNoArrey(inputPesquisa);

pegarDados(inputAdicionar);

removerItemDoArrey(inputExcluir);