function cadPessoa(Nome, Idade, Pais){
    var dados = document.getElementById("dados");
    var qtdLinhas = dados.rows.length;
    var linha = dados.insertRow(qtdLinhas);

    var cellNome = linha.insertCell(0);
    var cellIdade = linha.insertCell(1);
    var cellPais = linha.insertCell(2);

    cellNome.innerHTML = Nome;
    cellIdade.innerHTML = Idade;
    cellPais.innerHTML = Pais;

}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
})
function limpa() {
    if(document.getElementById('campo').value!="") {
    document.getElementById('campo').value="";
    document.getElementById('campo2').value="";
    document.getElementById('campo3').value="";
    }
    }