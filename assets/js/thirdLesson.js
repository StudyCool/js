'use strict';
/*
■ Задания, в которых необходимо использовать WHILE.
1. Вывести # столько раз, сколько указал пользователь.
2. Пользователь ввел число, а на экран вывелись все числа
от введенного до 0.
3. Запросить число и степень. Возвести число в указанную
степень и вывести результат.

■ Задания, в которых необходимо использовать DO WHILE.
1. Предлагать пользователю решить пример 2 + 2 * 2 до тех
пор, пока он не решит его правильно.
2. Делить число 1000 на 2 до тех пор, пока не получится число
меньше 50. Вывести это число и сколько делений произвели.
■ Задания, в которых необходимо использовать FOR.
3. Вывести все числа от 1 до 100, которые кратные указанному
пользователем числу.
4. Вывести каждый 4-й элемент из указанного пользователем
диапазона. Пользователь указывает минимальное и мак-
симальное значения диапазона.
5. Запросить число и проверить, простое ли оно. Простое
число делится без остатка только на себя и на единицу.*/

//4 Запросить 2 числа и найти все общие делители.
/*
const x = prompt('Input first number: ');
const y = prompt('Input second number: ');
const firstNumber = +x;
const secondNumber = +y;

let min = (secondNumber < firstNumber) ? secondNumber : firstNumber;

let i = 1;

while (i <= min) {
    if (firstNumber % i === 0 && secondNumber % i ===0 ){
        console.log("сommon divider is: " + i);
    }

    i++;
}
console.log("complete");
*/

/*
//5. Посчитать факториал введенного пользователем числа.

const x = Number(prompt('Input first number: '));
let i = 1;

let factorial = 1;
while (i < x){
    i++
    factorial = factorial * i;
}
console.log(factorial);

*/
/*
//■ Задания, в которых необходимо использовать DO WHILE.
//1. Предлагать пользователю решить пример 2 + 2 * 2 до тех
пор, пока он не решит его правильно.

const resultExample = 2 + 2 * 2;
let userResult;
    do {
    userResult= prompt('Calculate example: 2+2*2 = ');
    userResult = +userResult;
}
    while (userResult != resultExample);
    console.log('Excelent!');

*/

/*
//Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.

const y = 2;
let result = 1000;
let count = 0;
do {
    count++;
    result = result /y;

}
while (result >= 50);
console.log('Result: ' + result);
console.log('Iterations: ' + count);
*/


/*
//Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
let x = prompt('Input first number of array: ');
let y = prompt('Input second number of array: ');
let min = +x ;
let max = +y ;
for (let i = min+4 ; i <= max ; i = i+4){

        console.log("4th element of array:" + i );
}
*/

// Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.
/*
let userValue = prompt('Input a number: ');
let x = Number(userValue);
let i = 1;
let count = 0;
for (i = 1; i <= x; i++) {
     let resultDivision = x % i;
         if (resultDivision === 0) {
         count = count+1;
     }  
          }
if (count>2){
    console.log ('It`s not a simple number');
} else {
    console.log ('It`s a simple number');
}

 
*/

