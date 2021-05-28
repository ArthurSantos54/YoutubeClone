const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
//Todas as const pegar todos os input e button com o id ou class

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.key === 'Enter' ? addList(e): null);
})
// O btn.addEventListener e o serve para adiciona um evento que nesse caso foi o click,keyup e a
// Arrow function executar todos esses eventos, e o e.key e para colocar a tecla que vc quer 
// Que o usuario clica sobre ela para acontece algo nesse caso era para adicionar uma tarefa.

function addList(e){
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.completed');
// Essas const esta pegando os lugar que vai ficar as tarefas

    const newLi = document.createElement('li');
// essa const e para adicionar as linhas quando for adiconado uma tarefa
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
// e a delBtn e para apagar a tarefa e o checkBtn colocar como finalizado

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    
    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn)
        newLi.appendChild(delBtn)       
    }
//  NewLi adiciona uma linha, input.value = '' limpa o input,  
//notCompleted.appendChild(newLi) ele adiciona e os check,del e para adiconar os button
    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
     
    });
    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });
}
// Aqui os Button check e del começa a ser executado