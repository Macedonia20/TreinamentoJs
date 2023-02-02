const n1 = prompt('Digite um numero');
const n2 = prompt('Digite outro numero');

const x = parseFloat(n1);
const y = parseFloat(n2);

const result1 = x + y
const result2 = x - y
const result3 = x * y
const result4 = x / y

alert (
    `Não precisa se esforça eu resolvo para você. Há soma de ${x} e ${y} é: ${result1},\n
    Não precisa se esforça eu resolvo para você. Há subtração de ${x} e ${y} é: ${result2},\n
    Não precisa se esforça eu resolvo para você. Há multiplicação de ${x} e ${y} é: ${result3},\n
    Não precisa se esforça eu resolvo para você. Há divisão de ${x} e ${y} é: ${result4}`
)