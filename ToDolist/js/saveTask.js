import Tasks from "./data.js";
const Ltasks = JSON.parse(localStorage.getItem('tasks'))


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
let tasksk = localStorage.getItem('tasks') !== null ? Ltasks : []
export const local = () => {
    localStorage.setItem('tasks', JSON.stringify(tasksk))
}
// export const verificar = () => {

//     let newData = [];
  
    
//     [...salvarDados].forEach(el => {
 
//         if(el.id != 'acao'){
  
//         newData.push(`${el.value}`);
  
//         }
  
//     });
//         let user = Object.assign({},newData);
//         tasks.push(user);
     
//       //console.log(json);
     
//         return tasks
//     };
    
 
  
  
  



