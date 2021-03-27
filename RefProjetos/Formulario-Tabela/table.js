//Carregar os dados na tabela
let json = JSON.parse(localStorage.getItem('userData')) || [];

let tabelaEl = document.getElementById("dados-usuarios-table")

 //console.log(json)

for (let user of json){

  row = `
      <tr>
        <td>${user[0]}</td>
        <td>${user[1]}</td>
        <td>${user[2]}</td>
        <td>${user[3]}</td>
        <td>${user[4]}</td>
        <td>${user[5]}</td>
        <td>${user[6]}</td>
        <td>${user[7]}</td>
        <td>${user[8] == "true"? "Sim" : "Não"}</td>
      </tr>`

  tabelaEl.innerHTML += row

}



