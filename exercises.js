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
 console.log(var1 .toUpperCase());

 /* Item b */
 var weather = "thunderstorm";
 var today = (weather.substring(5,0));
 console.log(today);

 /* Item c */
 var weather2 = "thunderstorm";
 var day = (weather2.substring(12,9));
 console.log(day);

 /* Item d */
 var org = "orGanIzaTion"; /* I put some letters in uppercase in the middle to check if the toLowerCase works ok*/
 var orgNew = (org.substring(0,1).toLocaleUpperCase()+ org.substring(1).toLowerCase());
 console.log(orgNew);

 /* Item e */
 var name = "my name is Martina";
 var blank = (name.indexOf(" "));
 console.log(blank);

 /* Item f */
 