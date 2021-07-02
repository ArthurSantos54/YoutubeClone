

var buttonaddButton = document.getElementById("addButton");
var li = document.createElement("li");
console.log(li)

export let Tasks = {
    notCompleted: [],
    completed: [],
};

export const pegarDados = (inputAddDados) => {
    buttonaddButton.addEventListener('click', () => {
        if (inputAddDados.value != ""){
            li.innerText = inputAddDados.value;
            salvarDados(inputAddDados);  
        }else{
            resultadoEl.innerHTML = 'Por favor preencher esse campo!';       
        }
        inputAddDados.value = '';
    })
}
;

const salvarDados = (dados) => {
    Tasks.notCompleted.push(dados.value);
    console.log(Tasks.notCompleted);
};
