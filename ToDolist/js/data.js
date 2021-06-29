

var buttonaddButton = document.getElementById("addButton");


export let Tasks = {
    notCompleted: [],
    completed: [],
};

export const pegarDados = (inputAddDados) => {
    buttonaddButton.addEventListener('click', () => {
        if (inputAddDados.value != ""){
            
            salvarDados(inputAddDados);  
        }
        inputAddDados.value = '';
    })
}
;

const salvarDados = (dados) => {
    Tasks.notCompleted.push(dados.value);
    console.log(Tasks.notCompleted);
};