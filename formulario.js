function enviar(){

   let  primeiroNome = document.getElementById('PrimeiroNome').value;
   localStorage.setItem('Primeiro nome ',primeiroNome)

   let DataNascimento = document.getElementById('DataNascimento').value;
   localStorage.setItem('Data Nascimento',DataNascimento)

   let UltimoNome = document.getElementById('UltimoNome').value;
   localStorage.setItem('Ultimo Nome',UltimoNome)

   let NomePai = document.getElementById('NomePai').value;
   localStorage.setItem('Nome do Pai',NomePai)

   let NomeMae = document.getElementById('NomeMae').value;
   localStorage.setItem('Nome da Mae',NomeMae)

   let Cidade = document.getElementById('Cidade').value;
   localStorage.setItem('Cidade',Cidade)

   let Endereco = document.getElementById('Endereco').value;
   localStorage.setItem('Endereco',Endereco)

   let naturalidade = document.getElementById('naturalidade').value;
   localStorage.setItem('Naturalidade',naturalidade)

}


