//let result;

//1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
// let userNumber = prompt ( "Input a number: " );
//userNumber *= userNumber;
//console.log(userNumber);

//2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
//let userNumber1 = prompt ( "Input a first number: " );
//let userNumber2 = prompt ( "Input a second number: " );
//let average =  (userNumber1 + userNumber2)/2;

//console.log(average);

//3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

//let lengthSqr = prompt ( "Input a number: " );
//lengthSqr *= lengthSqr;
//result= lengthSqr;
//console.log(lengthSqr);


//4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
//const kmInMiles = 0.621371;
//kilometer= prompt ("How many :");
//result = kilometer * kmInMiles;
//console.log(result);




//5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.
// let userNumberA = Number(prompt ( "Input number1: " ));
// let userNumberB = Number(prompt ( "Input number2: " ));
// console.log("+:" + (userNumberA + userNumberB));
// console.log("-:" + (userNumberA - userNumberB));
// console.log("*:" + (userNumberA * userNumberB));
// console.log("/:" + (userNumberA / userNumberB));

//6. Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
// let userNumberA = prompt ( "Input a number: " );
// let userNumberB = prompt ( "Input b number: " );
// console.log((0-Number(userNumberB))/Number(userNumberA));
/*

//7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
let userHours = prompt ( "what time is it(hours): ", '0-24' );
let userMinutes = prompt ( "what time is it(minutes): ", '0-60' );
userHours
userMinutes
let  timeHorsResult=23 - +userHours;
let  timeMinutesResult=60 - +userMinutes;

if(timeMinutesResult > 59)
{
    timeHorsResult =  timeHorsResult +1;
    timeMinutesResult = timeMinutesResult - 60;
}
//console.log(timeMinutesResult);
console.log(timeHorsResult + ' hours and ' + timeMinutesResult + ' minutes left until tomorrow');
*/

//8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).

/*let userNumberA = prompt ( "Input a number like '000: " );
let A = userNumberA % 100;  // 56
let B = A % 10; //6
let C = (A - B ) / 10;
console.log(C);*/



//9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).
/*
let userNumberA = prompt ( "Input a number like '00000': " );
let A = userNumberA % 10;  // 56
console.log(A);
let B = (userNumberA - A) / 10 + A * 10000;
console.log(B);
*/

//10. Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
 /*let userNumberA = prompt ( "Input a number: " );
 let A = 250 + userNumberA * 0.1;   // 56
 console.log(A);
 console.log(result);*/