import Tasks from "./data.js";

export const pegarDados = (input) => {
    let valorDoInput = input.value    
    salvarDados(valorDoInput);      
   input.value = '';  
   return valorDoInput;
};

const salvarDados = (dados) => {
    Tasks.notCompleted.push(dados);
    console.log(Tasks.notCompleted);
};