/* N1
 Сделайте функцию, которая отнимает от первого числа второе и делит на 
третье. Числа передаются параметром. */

let algebra = function (a, b, c) {

    return (a - b) / c;   
}

console.log(algebra(11, 7, 1));



/* №2 
Сделайте функцию, которая возвращает куб числа и его квадрат. Число 
передается параметром. */

function algebra2(a) {

    let square = Math.sqrt(a);
    let cube = Math.pow(a,3);

    return 'Квадрат числа равен ' + square + ', куб числа = ' + cube;
}

console.log(algebra2(9));



/* №3 
Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b. */

function minMax(a,b) {

    let min = Math.min(a,b);
    let max = Math.max(a,b);

    return 'Минимальное число = ' + min + ', максимальное число =  ' + max;
}

console.log(minMax(27,44));


/* №4 
Напишите две функции: первая ф-ция должна возвращать массив с 
числовыми значениями, диапазон которых должен вводиться пользователем 
с клавиатуры; вторая – выводить полученный массив. */


function inputNumber() {
    
    let inp = [];   

    for (;;) {
        
        let value = prompt('Введите несколько чисел');
       
        if (value == '' || value == null) break;

        if (isNaN(value) || value == false ) {
            alert('Нужно ввести число');
            continue;
        }

        inp.push(value);       
    }

    return inp;
} 

let input = inputNumber();

let outputNumber = function () {
    console.log(input);
}

outputNumber();


/* №5
Сделайте функцию isEven() (even - это четный), которая параметром 
принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
функция возвращает true, если нечетное — false. */


function isEven(digit) {

    if (digit % 2 == 0) return true;
    else return false;
}

console.log(isEven(6));


/* №6 
Напишите ф-цию, в которую передается массив с целыми числами. 
Верните новый массив, где останутся лежать только четные из этих чисел. 
Для этого используйте вспомогательную функцию isEven из предыдущей 
задачи. */


let array = [4, 8, 9];

function evenNumb(arr) {

    let massif = [];

    for (let i = 0; i < arr.length; i++) {
        
        let x = isEven(arr[i]);

        if (x) massif.push(arr[i]);
        }
        
    return massif;
}

let x = evenNumb(array);

console.log(x);


/* №7
Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные 
циклы):
1 
22 
333 
4444 
55555 
666666 
7777777 
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. 
параметр, непредусмотренный ф-цией по умолчанию - один любой символ, 
кроме пробела, то пирамида должна быть нарисована этим символом, 
например: 
* 
** 
*** 
**** 
***** 
****** 
******* 
******** 
********* 
*/

function pyramid(x,v = " ") {

    if (x != isNaN(x) && v == " ") {

        for (let i = 1; i <= x; i++) {    

            for (let j = 1; j <= i; j++) {

                document.write(i); 
            }

            document.write('<br>'); 
        }
    } 
    
    if (x = isNaN(x) || v != " ") {

        for (let i = 1; i <= 9; i++) {    

            for (let j = 1; j <= i; j++) {

                document.write('*'); 
            }

            document.write('<br>'); 
        }
    }
}

pyramid(8);


/* №8 
Напишите ф-цию, которая рисует равнобедренный треугольник из 
звездочек:
    * 
   *** 
  ***** 
 ******* 
********* 
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник. */

function fir(inp) {

    for (let i = 0; i < inp; i++) {
        
        let res = "";

        for (let j = inp; i < j; j--) {

            res += " ";
        }
        for (let j = 0; j <= i; j++) {

            res += "* ";
        }

        console.log(res + '\n');
    }

}

fir(5);

console.log(" ");

// Перевернутый вариант

function triangle(inp) {

    for (let i = 0; i < inp; i++) {
        
        let res = "";

        for (let j = 0; j < i; j++) {

            res += " ";
        }
        for (let j = inp; j > i; j--) {

            res += " *";
        }

        console.log(res + '\n');
    }

}

triangle(5);


/* №9 
Напишите ф-цию, которая возвращает массив заполненный числами 
Фибоначи от 0 до 1000. */

let n = 0;
let z = 1;

function fibon() {

    let y = n + z;

    n = z;
    z = y;
    
    console.log(y);

    if (y < 1000) fibon();
}

fibon()

// Решение через цикл

let m = 0;  
let y = 1;  
z = 0; 

while(z < 1000) {

    z = m + y;

    y = m;    
    m = z;    
        
    console.log(z);
}


/* №10
10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее). Исп. Рекурсию. */

let number = 79;

let sum = '';

let summNumb = function(i) { 

    if (i > 9) {

    let a = String(i);   
        
    sum = +a[0] + +a[1];

    } else {

        console.log('Нужно ввести чиcло более 9');
    }

    if (sum > 9) { 
        
    sum += sum;

    console.log('Полученные суммы до результата меньше 9 равна ' + sum);

    summNumb(sum);

    }

    if (sum <= 9 && sum != false) console.log('Сумма меньше 9 после рекурсии равна ' + sum);    
           
} 

summNumb(number);


/* № 11
Дан массив с числами (передается параметром). Выведите 
последовательно его элементы, используя рекурсию и не используя цикл. */

array = [5, 6, 7, 8, 9];

i = 0;

function output(a) {

    if (i < a.length) {
        
        console.log(a[i]);

        i++;

        output(a);    
    }
}

output(array);


/* №12
Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер 
группы студента и выводящую введённые данные в следующем виде:
***************************** 
* Домашняя работа: «Функции» * 
* Выполнил: студент гр. W4017 * 
* Иванов Иван Иванович * 
***************************** 
Размер рамки должен определятся автоматически по самой длинной строке. 
Рамку вывести в консоль. */

function homeWork() {

let name = prompt('Ваше ФИО');
let num = prompt('Ваша группа');

num = 'Выполнил: ' + num;

star = '';
star2 = '';


if (name.length > num.length) {

    max = name.length;
    textMax = name;
    min = num.length;
    textMin = num;
} else {

    max = num.length;
    textMax = num;
    min = name.length;
    textMin = name;
}  

let diff = max - min;

if (max > 26) {
 
    textMax += ' *';
    textMin += "*".padStart(diff + 2, " ");
    star = new Array(max - 25).join('*');
    star2 = " ".repeat(max - 26);
} else {

    textMax += "*".padStart(28 - max, " ");
    textMin += "*".padStart(28 - min, " ");
}

switch (true) {

    case (max == name.length):

    console.log(
        `
        ******************************${star}
        * Домашняя работа: «Функции» ${star2}* 
        * ${textMin}                     
        * ${textMax}                    
        ******************************${star}
        `
    );
    break;

    case(max == num.length):

    console.log(
        `
        ******************************${star}
        * Домашняя работа: «Функции» ${star2}* 
        * ${textMax}                   
        * ${textMin}                     
        ******************************${star}
        `
    );
}

}

homeWork();






