let position = 0;
let xuxu;

function insert(num){
    var numero= document.getElementById('caixaTexto').innerHTML;
    xuxu = document.getElementById('caixaTexto').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('caixaTexto').innerHTML = "";
    document.getElementById('acumulador').innerHTML = "";
}

function insertAcumulador(num){
    document.getElementById('caixaTexto').innerHTML = " ";
    const size = 100;
    var numeros = new Array(size);
        var operador = document.getElementById('acumulador').innerHTML;
        document.getElementById('acumulador').innerHTML = operador + "\n" + xuxu + "\n" + num;
        if (position < size){
            numeros[position] = num;
            position++;
        }else{
            alert("pilha estourada");
        }
        cont++;
}