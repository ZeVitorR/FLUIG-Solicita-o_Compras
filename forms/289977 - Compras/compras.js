var controleCampo = 0;
var valorDespesas = 0;
var valorAntes = 0;
var array = [];
quantidade=0;
$(document).ready(function(){
    var data1 = document.getElementById('dataAtual2');
    var atividadeAtual;
    document.getElementById('totalG').value = document.getElementById('valorTotal').value;
    atividadeAtual = getWKNumState();
	console.log(atividadeAtual);
	if( atividadeAtual == "0" ){
		const dataAtual = new Date();
		const dia = atualizaData(dataAtual.getDate());
		const mes = atualizaData(dataAtual.getMonth() + 1);
		const ano = dataAtual.getFullYear();
		const horas = atualizaData(dataAtual.getHours());
		const minutos = atualizaData(dataAtual.getMinutes());
		data1.value = dia+"/"+mes+"/"+ano+"	"+horas+":"+minutos;
	    console.log(data1.value);
        var user = getWKUser();
        document.getElementById('solici').value = user;
    }
	document.getElementById("dataAtual").innerHTML= data1.value;
    

    document.body.onresize = function() {
        if (document.body.clientWidth < 800) {
            //executar o código aqui dentro
            $("#remove").remove();
        }
    };
})




function adicionarLinha() {
    controleCampo++;
    quantidade++;
    campo= controleCampo-1;


    if(quantidade < 11){
        wdkAddChild('tabledetailname1');
        array.push(controleCampo);
        console.log(array[0]);
        document.getElementById('column1_1___'+controleCampo).value = quantidade; 
    }else{
        FLUIGC.message.error({
            title: 'Limite ultrapassado',
            message: 'Oops, voce ultrapassou o limite de 10 linhas de despresas!',
            details: 'No formulário voce pode inserir apenas vinte linhas, para inserir mais coloque nos anexos as despesas no excel e na primeira linha das despresa coloque o total.'
        });
    }
}


function verificaExistencia() {
    atividadeAtual2 = getWKNumState();
    
    if( atividadeAtual2 == "0" ){
        console.log("atividadeAtual2: "+atividadeAtual2);
        for (let index = 1; index <= controleCampo; index++) {
            array.forEach(function (item) {
                if(item == index){
                    despresa = document.getElementById('column3_1___'+index);
                    contem = document.body.contains(despresa);
                    console.log(contem);
                    if(contem == false){
                        quantidade--;
                        var pos = array.indexOf(index);
                        array.splice(pos,1);
                        SomaTotal();
                        if(quantidade == 0){
                            adicionarLinha();
                        }
                    }
                }
            });
        }
    }
}

function SomaTotal(){
    soma = 0;
    for (let index = 1; index <= controleCampo; index++) {
        var possui = 0;
        array.forEach(function (item) {
            if(item == index){
                possui = 1;
            }
        });
        if(possui == 1){
            var num = parseFloat(document.getElementById('column5_1___'+index).value);
            soma += num;
        }
        
    }
    document.getElementById('valorTotal').value = soma;
    document.getElementById('totalG').value = document.getElementById('valorTotal').value;
}
function SomaUn(id){
    console.log(id)
    let arr = id.split('');
    var qtd = parseInt(document.getElementById('column3_1___'+arr[12]).value);
    var valorUn = parseFloat(document.getElementById(id).value);
    document.getElementById('column5_1___'+arr[12]).value = qtd * valorUn; 
    SomaTotal();
}
function atualizaData(data){
    var i = parseInt(data)
    if(i < 10){
        i = '0'+i;
    }
    return i;
}

function atualizaData(data){
    var i = parseInt(data)
    if(i < 10){
        i = '0'+i;
    }
    return i;
}