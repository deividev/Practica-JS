let hora = parseInt(prompt('Dame la hora'));
let minuto = parseInt(prompt('Dame los minutos ej 00'));





if (minuto < 59 && minuto > 9)
{
   minuto++;
   horaActual = hora + ":" + minuto;
   
}
if (minuto < 10)
{
   minuto++;
   horaActual = hora + ":"+ "0" + minuto;
  
}
if(minuto == 59)
{
   minuto= 00;
   hora++;
   horaActual = hora + ":"+ "0" + minuto;
}

   alert (horaActual);
   console.log(minuto);