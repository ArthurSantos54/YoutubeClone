
var inputNome = document.getElementById("nome");
var inputProfissao = document.getElementById("Profissão");
var inputBiografia = document.getElementById("biografia");

var nomeTitulo = document.getElementById("titulo");
var profissao = document.getElementById("profissao");
var bioPerfil = document.getElementById("bio-perfil");

var botaoEl = document.querySelector('.nbtn-enviar')

function inserirValores(
    nomeInput,
    profissaoInput,
    biografiaInput,
    tituloNome,
    profissao,
    perfilBio
    ) {
    if (nomeInput.value != "" && profissaoInput.value != "" && biografiaInput.value != ""){
        tituloNome.innerHTML = nomeInput.value;
        profissao.innerHTML = profissaoInput.value;
        perfilBio.innerHTML = biografiaInput.value;
    }else{
        alert("Por favor preencher todos campos!")
    }
}



botaoEl.addEventListener('click', function (){
    inserirValores(inputNome,inputProfissao,inputBiografia,nomeTitulo,profissao,bioPerfil);
});

botaoEl.addEventListener('keypress', function (e){
    if(e.key == "Enter"){
        inserirValores(inputNome,inputProfissao,inputBiografia,nomeTitulo,profissao,bioPerfil);
    }else{
        console.log(e.key)
    }
})
