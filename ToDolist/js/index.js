var inputAdicionar = document.getElementById("Adicionar");




import {Tasks,pegarDados} from "./data.js";

[Tasks].push( ({Adicionar}) =>{
     
    Adicionar.forEach( item =>  console.log(item) )      
    
});
pegarDados(inputAdicionar);
// import addList from "./List.js";
// addList();