var inputNome = document.getElementById("nome");
var inputProfissao = document.getElementById("Profissão");
var inputBiografia = document.getElementById("biografia");
var inputImagem = document.getElementById("Imagem");

var nomeTitulo = document.getElementById("titulo");
var profissao = document.getElementById("profissao");
var bioPerfil = document.getElementById("bio-perfil");

var botaoEl = document.querySelector('.nbtn-enviar')
var imgEl = document.getElementById('img-perfil')
var imagemPadrao = "https://static8.depositphotos.com/1003153/893/v/600/depositphotos_8938809-stock-illustration-example-rubber-stamp.jpg"


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

        document.addEventListener("DOMContentLoaded", function(){
            imgEl.src = novaImagem.value;
         });
        
    }else{
        alert("Por favor preencher todos campos!")
    }
}


document.addEventListener("DOMContentLoaded", function(){
    imgEl.src = imagemPadrao;
 });



botaoEl.addEventListener('click', function (){
    inserirValores(inputNome,inputProfissao,inputBiografia,nomeTitulo,profissao,bioPerfil);
    
});

botaoEl.addEventListener('keypress', function (e){
    if(e.key == "Enter"){
        inserirValores(inputNome,inputProfissao,inputBiografia,nomeTitulo,profissao,bioPerfil);
    }else{
      
    }
})

// const pegarImagem = (imagemAtual, novaImagem) => {      
//     document.addEventListener("DOMContentLoaded", _ => {            
//     if(novaImagem != ""){        
//         imgEl.src = novaImagem.value;
//         console.log(imagemAtual)  
//     }else{        
//         imgEl.src = imagemAtual;  
//     } 
//  }); 
// }




