let json = JSON.parse(localStorage.getItem('userData')) || [];

let form1 = document.getElementById('form-cadastro');


function getDataForm () {

  let newData = [];

  [...form1].forEach(el => {

    if(el.id != 'enviar'){

      if(el.id !='trabalha-checkbox'){

        newData.push(`${el.value}`);

      } else {

        newData.push(`${el.checked}`);

      }

    }

  });

  let user = Object.assign({},newData);

  json.push(user);

  return json

}

function saveData(data){

  localStorage.setItem('userData', JSON.stringify(data))

}