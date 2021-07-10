import Tasks from "./data.js";
let tasks = JSON.parse(localStorage.getItem('tasks')) || Tasks;

export const pegarDados = (input) => {
    let valorDoInput = input.value    
    salvarDados(valorDoInput);      
   input.value = '';  
   return valorDoInput;
};

const salvarDados = (dados) => {


    Tasks.notCompleted.push(dados);


    localStorage.setItem('tasks', JSON.stringify(Tasks))
    console.log(Tasks.notCompleted);
};


