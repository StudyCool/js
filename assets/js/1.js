'use strict';
//■ Задания, в которых необходимо использовать IF.

//1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
/*
const userNumber = prompt('Input a number: ');
const userValue = +userNumber;

if (isNaN(userValue)){
    console.log('Not a number! Please, Input a number');
} else if (userValue>0){
    console.log('Your number is pozitive!');
} else if (userValue<0){
    console.log('Your number is negative!');
} else{
    console.log('Your number is 0!');
}*/

//2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
/*
const userAge = prompt('Input your age: ');
const userValue = +userAge;
let correctAge = ((userValue > 0) && (userValue < 120)) ? true : false;

if (isNaN(userValue)) {
    console.log('Not a number!');

} else if (correctAge) {
    console.log('correct');

} else {
    console.log('not correct!');
}*/

//3. Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).

/*const userNumber = prompt('Input a number: ');
const userValue = +userNumber;

if (isNaN(userValue)){
    console.log('Not a number! Please, Input a number');
} else {
    console.log(Math.abs(userValue));
}*/

//4. Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.
/*
function timeValid(moment) {

    const userValueMoment = +moment;


    if (isNaN(userValueMoment)) {
        console.log('Not a number! Please, Input a number');
    } else {
        if (((userValueMoment > 0) && (userValueMoment < 60)) ? true : false){
            console.log('Correct!');
        }
        else {
            console.log('Not correct!');
        }
    }
}
const hours = prompt('Input hours: ');
const userValueHours = +hours;

if (isNaN(userValueHours)) {
    console.log('Not a number! Please, Input a number');
} else {
    if (((userValueHours > 0) && (userValueHours < 24)) ? true : false){
        console.log('Correct!');
    }
    else {
        console.log('Not correct!');
    }
}
const minutes = prompt('Input minutes: ');
timeValid(minutes);

const seconds = prompt('Input seconds: ');
timeValid(seconds);
*/


//5. Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.

/*
//Cartesian coordinate system
const x = prompt('Input a number (x-coordinate): ');
const y = prompt('Input a number (y-coordinate): ');
const userValueX = +x;
const userValueY = +y;
if (!isNaN(userValueX) && !isNaN(userValueY)){
   if (((userValueX > 0) && (userValueY > 0)) ? true : false){
           console.log('The I quadrants of a Cartesian coordinate system');
   }
   else if (((userValueX < 0) && (userValueY > 0)) ? true : false) {
       console.log('The II quadrants of a Cartesian coordinate system');
   }
   else if (((userValueX < 0) && (userValueY < 0)) ? true : false) {
       console.log('The III quadrants of a Cartesian coordinate system');
   }
   else if (((userValueX > 0) && (userValueY > 0)) ? true : false) {
       console.log('The IV quadrants of a Cartesian coordinate system');
   }
   else if (((userValueX === 0) && (userValueY > 0) && (userValueY < 0)) ? true : false) {
       console.log('Your point belongs to the axis X');
   }
   else if (((userValueY === 0) && (userValueX > 0) && (userValueX < 0)) ? true : false) {
       console.log('Your point belongs to the axis Y');
   }
   else{
       console.log('Your point belongs to the origin (0,0)');
   }
}
*/

//■ Задания, в которых необходимо использовать SWITCH.
//1. Запросить у пользователя номер месяца и вывести на экран его название.

/*
const month = prompt('Input number of a month: ');
const userValue = +month;
if (!isNaN(userValue) && (userValue > 0) && (userValue < 13) ){
   switch (userValue) {
       case 1: {
           console.log('January!');
       }
       break;
       case 2: {
           console.log('February!');
       }

       break;
       case 3: {
           console.log('March!');
       }
       break;
       case 4: {
           console.log('April!');
       }

       break;
       case 5: {
           console.log('May!');
       }

       break;
       case 6: {
           console.log('June!');
       }
       break;
       case 7: {
           console.log('July!');
       }
       break;
       case 8: {
           console.log('August!');
       }
       break;
       case 9: {
           console.log('September!');
       }
       break;
       case 10: {
           console.log('October!');
       }
       break;
       case 11: {
           console.log('November!');
       }
       break;
       case 12: {
           console.log('December!');
       }

   }
}
else{
    console.log('Not correct!');
}
*/


//2. Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.

const firstValue = prompt('Please, input first number: ');
const firstUserValue = +firstValue;
const secondValue = prompt('Please, input second number: ');
const secondUserValue = +secondValue;

function sum(a, b) {
    return a + b;
}

function substraction(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function division(a,b){
    return a / b;
}

if (!isNaN(firstUserValue) && !isNaN(secondUserValue)) {
    const mark = prompt('Please, make a choise:', '/ or * or + or - ');
    switch (mark) {
        case '+': {
            alert(sum(firstUserValue, secondUserValue));
        }
            break;
        case '-': {
            alert(substraction(firstUserValue, secondUserValue));
        }
            break;
        case '*': {
            alert(multiply(firstUserValue, secondUserValue));
        }
            break;
        case '/': {
            alert(division(firstUserValue, secondUserValue));
        }
            break;
    }
}
else {
    alert('Not correct data input!');
}