
let form1 = document.getElementById('form-cadastro');

function getDataForm () {

  let itemInput = [];
  let json ='';

  [...form1].forEach(el => {

      if(el.id != 'enviar' && el.id != 'trabalha-checkbox'){

        itemInput.push(`${el.id}: ${el.value}`);

      }

      json = JSON.stringify(itemInput);

  });

  return json

}

function saveData(data){

  localStorage.setItem('userData', data)

}