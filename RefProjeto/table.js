//Carregar os dados na tabela
let json = JSON.parse(localStorage.getItem('userData')) || [];

let tabelaEl = document.getElementById("dados-usuarios-table")

console.log(json);


tabelaEl.innerHTML = `
    <tr>
      <td>${json[0]}</td>
      <td>${json[1]}</td>
      <td>${json[2]}</td>
      <td>${json[3]}</td>
      <td>${json[4]}</td>
      <td>${json[5]}</td>
      <td>${json[6]}</td>
      <td>${json[7]}</td>
      <td>${json[9] == "on"? "Sim" : "Não"}</td>

    </tr>
  `;



