const myArray = [true, 'Curso', 65, 4, 'javaScript', false];
function string2(myArray)
{
if(myArray[4] > myArray[1])
{
    alert ("javascript es mayor que Curso");
}else
{
    alert ("javascript es menor que Curso");
}
}
string2(myArray);

function operadoresMates(myArray)
{
    ressuma = myArray[2] + myArray[3];
    resresta = myArray[2] - myArray[3];
    resmultiply = myArray[2] * myArray[3];
    resdivision = myArray[2] / myArray[3];
    respotencia =myArray[2] ** myArray[3];
    resmodulo = myArray[2] % myArray[3];

    alert("65 + 4 = " +ressuma);
    alert("65 - 4 = " +resresta);
    alert("65 * 4 = " +resmultiply);
    alert("65 / 4 = " +resdivision);
    alert("65 ** 4 = " +respotencia);
    alert("65 % 4 = " +resmodulo);
}
operadoresMates(myArray);

function operadoresLogicos()
{
    
    
    let vtrue = myArray[0] && myArray[5];
    alert  ("Si vtrue && vfalse nos devuelve" + " " + vtrue);

    let vfalse = myArray[0] || myArray[5];
    alert ("Si vtrue || vfalse nos devuelve" + " " + vfalse);
   
    
}
operadoresLogicos(myArray);
