//Carregar os dados na tabela
let json = JSON.parse(localStorage.getItem('userData')) || [];
console.table(json);