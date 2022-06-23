/*--SIMULADOR--*/

/*--Eventos que acontecem na pagina--*/
function calcularParte1(){

    document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none";

    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('atividade1').value.replace(",",".").replace("","0"));
    var atividade2 = parseFloat(document.getElementById('atividade2').value.replace(",",".").replace("","0"));
    var atividade3 = parseFloat(document.getElementById('atividade3').value.replace(",",".").replace("","0"));

    /*--aceitar os valores das notas certo--*/
    if (atividade1 <= 10 && atividade2 <= 10 && atividade3 <= 20){
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte1--*/
        var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.trunc(soma * 100) / 100;
        document.getElementById('resultadoParte1').value = somaDecimal.toString().replace(".", ",");
        document.getElementById('Parte1').value = somaDecimal.toString().replace(".", ",");

        /*--Limpar campos de médias e situação--*/
        document.getElementById('mediaFinal').value = "";
        document.getElementById('resultadoMediaFinal').value = "";
        document.getElementById('situacaoMediaFinal').value = "";
    }
    else if (atividade1 > 10 && atividade2 > 10 && atividade3 > 20){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Fórum está entre 0 e 10\n\Atividade Disserativa está entre 0 e 20");
    }
    else if (atividade1 > 10 && atividade2 > 10){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Fórum está entre 0 e 10");
    }
    else if (atividade1 > 10 && atividade3 >20){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Atividade Disserativa está entre 0 e 20");
    }
    else if (atividade2 > 10 && atividade3 >20){
        window.alert("Verifique se as notas de: \n\Fórum está entre 0 e 10\n\Atividade Disserativa está entre 0 e 20");
    }
    else if (atividade1 > 10){
        window.alert("Verifique se a nota de Exercícios está entre 0 e 10");
    }
    else if (atividade2 > 10){
        window.alert("Verifique se a nota de Fórum está entre 0 e 10");
    }
    else if (atividade3 > 20){
        window.alert("Verifique se a nota de Atividade Disserativa está entre 0 e 20");
    }
}

function calcularParte2(){

    document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none";

    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade4 = parseFloat(document.getElementById('atividade4').value.replace(",",".").replace("","0"));
    var atividade5 = parseFloat(document.getElementById('atividade5').value.replace(",",".").replace("","0"));
    var atividade6 = parseFloat(document.getElementById('atividade6').value.replace(",",".").replace("","0"));
    var atividade7 = parseFloat(document.getElementById('atividade7').value.replace(",",".").replace("","0"));

    /*--aceitar os valores das notas certo--*/
    if (atividade4 <= 10 && atividade5 <= 10 && atividade6 <= 10 && atividade7 <= 30){
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte2--*/
        var soma = atividade4 + atividade5 + atividade6 + atividade7;
        var somaDecimal = Math.trunc(soma * 100) / 100;
        document.getElementById('resultadoParte2').value = somaDecimal.toString().replace(".", ",");
        document.getElementById('Parte2').value = somaDecimal.toString().replace(".", ",");

        /*--Limpar campos de médias e situação--*/
        document.getElementById('mediaFinal').value = "";
        document.getElementById('resultadoMediaFinal').value = "";
        document.getElementById('situacaoMediaFinal').value = "";
    }
    else if (atividade4 > 10 && atividade5 > 10 && atividade6 > 10 && atividade7 > 30){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Fórum está entre 0 e 10\n\Simulado está entre 0 e 10\n\Avaliação Final está entre 0 e 30");
    }
    else if (atividade4 > 10 && atividade5 > 10 && atividade6 > 10){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Fórum está entre 0 e 10\n\Simulado está entre 0 e 10");
    }
    else if (atividade4 > 10 && atividade5 > 10){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Fórum está entre 0 e 10");
    }
    else if (atividade4 > 10 && atividade6 >10){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Simulado está entre 0 e 10");
    }
    else if (atividade4 > 10 && atividade7 > 30){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Avaliação Final está entre 0 e 30");
    }
    else if (atividade4 > 10 && atividade7 > 30){
        window.alert("Verifique se as notas de: \n\n\Exercícios está entre 0 e 10\n\Avaliação Final está entre 0 e 30");
    }
    else if (atividade5 > 10 && atividade6 >10){
        window.alert("Verifique se as notas de: \n\Fórum está entre 0 e 10\n\Simulado está entre 0 e 10");
    }
    else if (atividade5 > 10 && atividade7 > 30){
        window.alert("Verifique se as notas de: \n\Fórum está entre 0 e 10\n\Avaliação Final está entre 0 e 30");
    }
    else if (atividade6 > 10 && atividade7 > 30){
        window.alert("Verifique se as notas de:\n\Simulado está entre 0 e 10\n\Avaliação Final está entre 0 e 30");
    }
    else if (atividade4 > 10){
        window.alert("Verifique se a nota de Exercícios está entre 0 e 10");
    }
    else if (atividade5 > 10){
        window.alert("Verifique se a nota de Fórum está entre 0 e 10");
    }
    else if (atividade6 > 10){
        window.alert("Verifique se a nota de Simulado está entre 0 e 10");
    }
    else if (atividade7 > 30){
        window.alert("Verifique se a nota de Simulado está entre 0 e 30");
    }
}


function calcularMediaFinal1(){

    document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none";

    /*--Chamar notas das AV's colocadas pelo aluno ou importadas automaticas no evento anterior--*/
    var Parte1 = parseFloat(document.getElementById('Parte1').value.replace(",",".").replace("","0"));
    var Parte2 = parseFloat(document.getElementById('Parte2').value.replace(",",".").replace("","0"));


    var soma = Parte1 + Parte2;
    var somaDecimal = Math.trunc(soma * 100) / 100;

    document.getElementById('resultadoMediaFinal1').value = somaDecimal.toString().replace(".", ","); 
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");

    
    /*--Condição da média do aluno--*/   
    var resultado = parseFloat(document.getElementById('resultadoMediaFinal1').value.replace(",",".").replace("","0"));
    var resultadoDecimal = Math.trunc(resultado * 100) / 100;

    if (resultadoDecimal >= 70) {
        document.getElementById('situacaoMediaFinal1').value = "Aprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#55cb50";
    }
    else if (resultadoDecimal <= 69.99 && resultadoDecimal >= 40) {
        document.getElementById('situacaoMediaFinal1').value = ("Alcançar no Exame Final (" + (120 - resultadoDecimal) + ")").replace(".",",");;
        document.querySelector('#divisaoMediaFinal2').style.display = "grid";
        document.querySelector('#divisaoMediaFinal2Situacao').style.display = "grid";
        document.getElementById('situacaoMediaFinal1').style.color = "#c2a202";
    }
    else{
        document.getElementById('situacaoMediaFinal1').value = "Reprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#c52010";
    }
    
    document.getElementById('mediaFinal1').disabled = true;
}

function calcularMediaFinal2(){
    /*--Chamar nota da AV colocada pelo aluno ou importada automatica no evento anterior--*/
        /*mediaFinal1 = valor do campo anterior*/
    var mediaFinal1 = parseFloat(document.getElementById('resultadoMediaFinal1').value.replace(",",".").replace("","0"));
        /*mediaFinal2 = valor do campo adcionado pelo aluno*/
    var atividade8 = parseFloat(document.getElementById('atividade8').value.replace(",",".").replace("","0"));


    var soma = (mediaFinal1 + atividade8)/2;
    var somaDecimal = Math.trunc(soma * 100) / 100;

    document.getElementById('resultadoMediaFinal2').value = somaDecimal.toFixed(2).toString().replace(".", ",");

     /*--Condição da média do aluno--*/
    var resultado = parseFloat(document.getElementById('resultadoMediaFinal2').value);
    var resultadoDecimal = Math.trunc(resultado * 100) / 100;

    if (resultadoDecimal >= 60) {
        document.getElementById('situacaoMediaFinal2').value = "Aprovado";
        document.getElementById('situacaoMediaFinal2').style.color = "#55cb50";
    }
    else {
        document.getElementById('situacaoMediaFinal2').value = "Reprovado";        
        document.getElementById('situacaoMediaFinal2').style.color = "#c52010";
    }
}

function deletar(){
    /*--Limpar campos de médias e situação--*/
    document.getElementById('atividade1').value = "";
    document.getElementById('atividade2').value = "";
    document.getElementById('atividade3').value = "";
    document.getElementById('atividade4').value = "";
    document.getElementById('atividade5').value = "";
    document.getElementById('atividade6').value = "";
    document.getElementById('atividade7').value = "";
    document.getElementById('atividade8').value = "";
    document.getElementById('Parte1').value = "";
    document.getElementById('Parte2').value = "";
    document.getElementById('resultadoParte1').value = "";
    document.getElementById('resultadoParte2').value = "";
    document.getElementById('mediaFinal1').value = "";
    document.getElementById('resultadoMediaFinal1').value = "";
    document.getElementById('situacaoMediaFinal1').value = "";
    document.getElementById('resultadoMediaFinal2').value = "";
    document.getElementById('situacaoMediaFinal2').value = "";
    document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none";
}



$('#botaoInfo').click(function(){
    window.scrollTo(0, 0);
    $('.conteudoBotao').toggleClass('conteudoBotaoNone');
    $('.conteudoDecricao').toggleClass('conteudoDecricaoExibir');
    $('.conteudoSimulador').toggleClass('conteudoSimuladorNone');
});

$('#botaoInfoFechar').click(function(){
    $('.conteudoDecricao').toggleClass('conteudoDecricaoExibir');
    $('.conteudoBotao').toggleClass('conteudoBotaoNone');
    $('.conteudoSimulador').toggleClass('conteudoSimuladorNone');
});


