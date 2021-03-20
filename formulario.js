let formularioCadastro = document.getElementById('formulario-cadastro')


//let json = JSON.parse(localStorage.getItem('userData')) || [];

function getDataFormulario () {

   let itemInput = [];
 
   [...formularioCadastro].forEach(el => {
 
       if(el.id != 'acao'){
 
         itemInput.push(` ${el.value}`);
 
       }
 
       json = itemInput;
 
   });
 
   return json
 
 }
 
 function saveData(data){
 
   localStorage.setItem('userData', JSON.stringify(data))
 
 }














