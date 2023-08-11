let form= document.getElementById('form-contato'); 
let  resetaAgenda = document.querySelector('.reset');
let  nome = [];
let numero = [];

let linhas = " ";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    somaNumerosagregados();
    somaTotalContatos();
    
});

function adicionaLinha() {
    const cadastroNome = document.getElementById("nome-Contato");
    const cadastroNumeroTelefone = document.getElementById("numero-telefonico");

    if (nome.includes(cadastroNome.value)) {
    alert(`O Nome ${cadastroNumeroTelefone.value} já foi cadastrado`);
    } else {
    nome.push(cadastroNome.value);
    numero.push(cadastroNumeroTelefone.value);

    let linha = "<tr>";
    linha += `<td>${cadastroNome.value}</td>`;
    linha += `<td>${cadastroNumeroTelefone.value}</td>`;
    linha += `<td>${document.write= '<img src="./imagens/lapiz.png" alt="celular"/>'} </td>`;

    linha += "</tr>";

    linhas += linha;
    }
    cadastroNome.value = "";
    cadastroNumeroTelefone.value = "";
    
}
function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
function somaNumerosagregados() {
    const cantidadeContato = somaTotalContatos();
    document.getElementById("nagregados").innerHTML = cantidadeContato;
}

function somaTotalContatos() {
    let somaDeTudo=0;

    for(let i=0; i< numero.length; i++){
        somaDeTudo+=numero[i];
        const tot = numero.length;
    }
    return numero.length;
    
}