function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}   
function multiplicacao(a, b) {
    return a * b;
}       
function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }   
    return a / b;

    console.log("Resultado da soma: " + soma(10, 5));
    console.log("Resultado da subtração: " + subtracao(10, 5));
    console.log("Resultado da multiplicação: " + multiplicacao(10, 5));
    console.log("Resultado da divisão: " + divisao(10, 5));
}