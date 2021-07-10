/* Funcao para mover item nao completado
    para o completado quanto o botao check for clicaco
    para pegar o botao check e preciso colocar o id se houver uma task no notcompleted.
 */

var checkBtn = document.getElementById("check");



export const moverTask = () => {

if(checkBtn !== undefined){
    let check = checkBtn.value    
    Tasks.notCompleted.push(check);
    console.log(Tasks.notCompleted);
};
}
