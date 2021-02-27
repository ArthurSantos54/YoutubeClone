






let PrimeiroNome = document.getElementById('PrimeiroNome').value;
let UltimoNome = document.getElementById('UltimoNome').value;
let naturalidade = document.getElementById('naturalidade').value;
let Nascimento = document.getElementById('Nascimento').value;

let NomePai = document.getElementById('NomePai').value;
let NomeMae = document.getElementById('NomeMae').value;

let cidade = document.getElementById('cidade').value;
let endereco = document.getElementById('endereco').value;





const bntEnviar = () => {

  localStorage.setItem('Pnome',PrimeiroNome)

}