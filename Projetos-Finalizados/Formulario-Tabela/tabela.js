    let json =  JSON.parse(localStorage.getItem("userData")) || [];

    let tabelaEl = document.getElementById("dados-usuario-tabela")
    console.log(json);

    
    for (let user of json){

        let row = `
        <tr> 
            <td>${user[0]}</td>
            <td>${user[1]}</td>
            <td>${user[2]}</td>
            <td>${user[3]}</td>
            <td>${user[4]}</td>
            <td>${user[5]}</td>
            <td>${user[6]}</td>
            <td>${user[7]}</td>
        </tr>`

    tabelaEl.innerHTML += row
    }