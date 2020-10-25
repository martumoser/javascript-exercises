/* Variables y Operadores */
 /* Item a */
 var number1 = 12;
 var number2 = 20;
 var sum = number1 + number2;
 /* Item b */
 var string1 = "Hi, my name is ";
 var string2 = "Martina";
 var miName = string1 + string2; 
 /* Item c */
 var str1 = "Dog";
 var str2 = "Cat";
 var petLength = str1.length + str2.length;
 
/*Strings*/
 /* Item a */
 var var1 = "environment";
 var var1UpperCase = (var1 .toUpperCase());
 /* Item b */
 var weather = "thunderstorm";
 var today = (weather.substring(5,0));
 /* Item c */
 var weather2 = "thunderstorm";
 var day = (weather2.substring(12,9));
 /* Item d */
 var org = "organization"; 
 var orgNew = (org.substring(0,1).toLocaleUpperCase()+ org.substring(1).toLowerCase());
 /* Item e */
 var name = "my name is Martina";
 var blank = (name.indexOf(" "));
 /* Item f */
 
/* Arrays */
 /* Item a */
 var months = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
 console.log(months[4],months[10]);
 /* Item b */
 months.sort();
 console.log (months);
 /* Item c */
 var months = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
 months.push("last");
 months.unshift("first");
 console.log(months);
 /* Item d */
 months.pop();
 months.shift();
 console.log(months);
 /* Item e */
 months.reverse();
 console.log(months);
 /* Item f */
 var months = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
 elements = (months.join("-"));
 console.log(elements);
 /* Item g */
 var copy = months.slice(4,-1);
 console.log (copy);

