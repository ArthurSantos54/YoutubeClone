//**************************Identificar cada elemento no html de onde peguei os id.

//Aqui peguei os elementos imput que receberam os numeros
var inputNumero1 = document.getElementById('num1');
var inputNumero2 = document.getElementById('num2');

var botaoCalcular = document.getElementById('calculo');

//Aqui peguei só os elemento que irão receber texto e resultado
var Descricao = document.getElementById('descrcao');
var resultadoElemento = document.getElementById('result');
//Colocar texto na tag <h3>, isso é só um exemplo
Descricao.innerHTML = `Digite dois numero e clique no botão Calcular`
//resultado inicia com zero
resultadoElemento.innerHTML = `Resultado: ${0}`



//Função de soma
function soma (primeiroNumero, segundoNumero){

  if(primeiroNumero.value && segundoNumero.value != ""){
  
    let resultado = parseInt(primeiroNumero.value) + parseInt( segundoNumero.value);

    resultadoElemento.innerHTML = `Resultado: ${resultado}`

  }else{
    resultadoElemento.innerHTML = `Resultado: ${0}`
  }
  // limpar imputs
  primeiroNumero.value = ''
  segundoNumero.value = ''

}

// ====> parseInt() serve para transformar o texto '1' em numero

function subtrair (num1, num2){

  let resultado = num1 - num2;

  return  resultado
}
