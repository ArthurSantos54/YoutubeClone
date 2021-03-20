
    let json =  JSON.parse(localStorage.getItem("userData")) || [];

    let tabelaEl = document.getElementById("dados-usuario")
    
    console.log(json);

    tabelaEl.innerHTML = `
    <tr> 
    <td>${json[0]}</td>



    
    </tr>
    
    
    
    `;