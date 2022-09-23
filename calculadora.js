var positionOpe = 0;
var positionNum = 0;
var resultado;
const size = 5;
const pilhaNum = new Array(size);
const pilhaOpe = new Array(size);
var numeros = ['0','1','2','3','4','5','6','7','8','9'];
var operadores = ['+','-','*','/','%'];
var psNum1 = 0;
var psNum2 = 0;
var psOpe1 = 0;
var psOpe2 = 0;
var caixaTexto = document.getElementById('caixaTexto');
var acumulador = document.getElementById('acumulador');

function insert(num){
    caixaTexto.innerHTML += num;
}

function limparCaixaTexto(){
    caixaTexto = "";
}

function limparAcumulador(){
    acumulador = "";
    caixaTexto = "";
}

function insertOperador(op){
    var numerorecebido = caixaTexto.innerHTML;
    caixaTexto.innerHTML = ""; 
    acumulador.innerHTML += numerorecebido + "\n" + op;

        if (positionOpe < size){
            pilhaOpe[positionOpe] = op;
            positionOpe++;
        }else{
            positionOpe = size;
            alert("pilha estourada");
        }

        if(positionNum < size){
            pilhaNum[positionNum] = parseInt(numerorecebido);
            positionNum++;
        }else{
            positionNum = size;
            alert("pilha estourada");
        }

    calcular(op);
}

    function calcular(op){
        if(positionOpe < 2 || positionNum < 2){
            return;
        }

        let opAnterior = pilhaOpe[positionOpe - 2];
        let num = pilhaNum[positionNum - 1];
        let num2 = pilhaNum[positionNum - 2];

        console.log(num, num2)
        console.log("op" + op, opAnterior)

        function verificaProc(){
            if(opAnterior == "%" || opAnterior == "/" || opAnterior == "*"){
                if(op == "+" || op == "-"){
                    resolver(opAnterior)
                }else{
                    resolver(op);
                }  
            }else{
                resolver(opAnterior);
            }
        }verificaProc();

        function resolver(opAnterior){
            if(opAnterior == "/"){
                pilhaNum[positionNum - 2] = num2 / num;
                positionNum--;
                pilhaOpe[positionOpe - 1] = pilhaOpe[positionOpe - 1];              
                positionOpe--;
                console.log(pilhaNum + "\n" + pilhaOpe);
                calcular(pilhaOpe[positionOpe - 1]);
                
                
            }else if(opAnterior == "*"){
                pilhaNum[positionNum - 2] = num2 * num;
                positionNum--;
                pilhaOpe[positionOpe - 2] = pilhaOpe[positionOpe - 1];
                positionOpe--;
                console.log(pilhaNum + "\n" + pilhaOpe);
                calcular(pilhaOpe[positionOpe - 1]);
                
            }else if(opAnterior == "%"){
                pilhaNum[positionNum - 2] = num2 % num;
                positionNum--;
                pilhaOpe[positionOpe - 2] = pilhaOpe[positionOpe - 1];
                positionOpe--;
                console.log(pilhaNum + "\n" + pilhaOpe);
                calcular(pilhaOpe[positionOpe - 1]);
                
            }else if(opAnterior == "-"){
                pilhaNum[positionNum - 2] = num2 - num;
                positionNum--;
                pilhaOpe[positionOpe - 2] = pilhaOpe[positionOpe - 1];
                positionOpe--;
                console.log(pilhaNum + "\n" + pilhaOpe);
                calcular(pilhaOpe[positionOpe - 1]);
                
            }else if(opAnterior == "+"){
                pilhaNum[positionNum - 2] = num2 + num;
                positionNum--;
                pilhaOpe[positionOpe - 2] = pilhaOpe[positionOpe - 1];
                positionOpe--;
                console.log(pilhaNum + "\n" + pilhaOpe);
                calcular(pilhaOpe[positionOpe - 1]);
                
            }

        }

        return acumulador.innerHTML = pilhaNum[0];
    }

    function insertCalcular(){
        insert(caixaTexto.innerHTML);
    }
  
    /* var numeros = document.getElementById('insert');
    var operadores = document.getElementById('insertOperador');

        //Add os numeros na pilha
        if (numeros == true){
            pilhaNum.push(numeros);
        }
        //Add os operadores na pilha
        else{
            (operadores == true)
                pilhaOpe.push(operadores);
        }
        //Verifica se a 1° OPeração é uma '/' ou '*'
        /* if (n1 "estiver preenchido"){
            
        } */
             //verifica o que está na caixa texto
    //     if (caixaTexto === numeros){
    //         pilhaNum.unshift(numeros)
    //         console.log(pilhaNum)
    //     }
    //     else (caixaTexto === operadores);{
    //         pilhaOpe.unshift(operadores)
    //         console.log(pilhaOpe)
    //     }

    //     if(psOpe1 === '*'){
    //         //ele vai calcular psNum1 multiplicado por psNum2

    //     }
    //     else(psOpe1 === '/');{
    //         //ele vai calcular psNum1 dividido por psNum2
    //     }
        
    // }