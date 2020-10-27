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
 var var1UpperCase = (var1.toUpperCase());
 /* Item b */
 var weather = "thunderstorm";
 var today = (weather.substring(5,0));
 /* Item c */
 var weather2 = "thunderstorm";
 var day = (weather2.substring(12,9));
 /* Item d */
 var org = "organization"; 
 var orgNew = (org.substring(0,1).toUpperCase()+ org.substring(1).toLowerCase());
 /* Item e */
 var name = "my name is Martina";
 var blank = (name.indexOf(" "));
 /* Item f */
 var varf = "international goverment";
 var varfI = varf.substring(0,1).toUpperCase();
 var varfIrest = varf.substring(1,varf.indexOf("g")).toLowerCase();
 var varfG = varf.substring(varf.indexOf("g"),15).toUpperCase();
 var varfGrest = varf.substring(15).toLowerCase();
 var final = varfI + varfIrest + varfG + varfGrest;
 console.log(final)
 
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

/* If/Else */
 /* Item a */
 var number = (Math.random());
 if (number >= 0.5){
    alert("Greater than 0,5");
 } else{
    alert("Lower than 0,5");
 }
 /* Item b */
 var age = 25;
 if (age<2){
    alert ("Bebe");
 } else if (age>=2 && age<=12){
    alert ("Niño");
    } else if (age>=13 && age<=19){
        alert("Adolescente");
        } else if (age>=20 && age<=30){
            alert("Joven");
            } else if (age>=31 && age<=60){
                alert ("Adulto");
                } else if (age>=61 && age<=75){
                    alert("Adulto mayor");
                    } else{
                        alert("Anciado");
                    }

/* For */
/* Item a */
var words = ["hello", "goodbay", "love", "peace","happy"];
for (var i=0;i<words.length;i++){
    alert(words[i]);
}
/* Item b */
for (var i=0;i<words.length;i++){
    wordsUppercase= words[i].substring(0,1).toUpperCase()+ words[i].substring(1).toLowerCase();
    alert("Uppercase modified: " + wordsUppercase);
}
/* Item c */
var sentence = "";
for (var i=0;i<words.length;i++){
    sentence = sentence + " " + words[i];
}
alert (sentence)
console.log(sentence)

/* Item d */
var empty = [];
for (var i=0;i<10;i++){
    empty [i]= i;
}
console.log(empty);

/* Function */
/* Item a */
function suma(num1,num2){
    return num1 + num2;
}
var rtdo= suma(22,10);
console.log(rtdo);
/* Item b */
function suma(num1,num2){
    if (isNaN(num1) || isNaN(num2)){
        alert ("Not a number");
        return NaN;
    }
    return num1 + num2;
}
/* Example to check if the function works.
var rtdo= suma("hola",10);
console.log(rtdo);*/
/* Item c */
function validateInteger(x){
    if (Number.isInteger(x)){
        return "True";
    }
}
/* Item d */
function suma(num1,num2){
    if (isNaN(num1) || isNaN(num2)){
        alert ("Not a number");
        return NaN;
    } else if (Number.isInteger(num1) && Number.isInteger(num2)){
        return num1 + num2;
    } else {
        alert ("The numbers aren't integers");
        return Math.round(num1,num2);
    }
}
/* Example to check if the function works.
var rtdo= suma(10.7,10);
console.log(rtdo);*/
/* Item e */
function validateNaN(num1,num2){
    if (isNaN(num1) || isNaN(num2)){
        alert ("Not a number");
        return NaN;
    } else{
        return "The parameters are numbers";
    }
}
function suma(num1,num2){
    var result = validateNaN(num1,num2);
    if (result === "The parameters are numbers"){
        return num1 + num2;
    } else{
        return "The parameters aren't numbers";
    }
}
/* Example to check if the function works.
var output = suma("hola",3);
console.log(output); */
