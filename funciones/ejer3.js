const radio = parseFloat(prompt('Introduce el radio:'));
const radioElevado = Math.pow(radio,2);


function area(radio)
{
   alert("El area del circulo es" + radioElevado* Math.PI);
}
function perimetro(radio)
{
   alert(2 * Math.PI * radio);
}
area(radio);
perimetro(radio);