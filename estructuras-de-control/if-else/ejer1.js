const num1 = parseInt(prompt('Numero 1:'));
const num2 = parseInt(prompt('Numero 2:'));

let resultado = num1 - num2;

if (resultado < 0)
{
   alert ("El resultado es menos que 0");
}else
{
   alert ("El restulado es" + " " + resultado);
}
