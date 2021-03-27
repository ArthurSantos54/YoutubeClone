let json = JSON.parse(localStorage.getItem('userData')) || [];

let formularioCadastro = document.getElementById('formulario-cadastro')



function getDataFormulario () {

   let newData = [];
 
   [...formularioCadastro].forEach(el => {
 
       if(el.id != 'acao'){
 
       newData.push(`${el.value}`);
 
       }
 
   });

   let user = Object.assign({},newData);
   json.push(user);

 //console.log(json);

   return json
 
 }
 
 function saveData(data){
 
   localStorage.setItem('userData', JSON.stringify(data))
 
 }














