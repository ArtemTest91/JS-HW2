//Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let c = 2;
let s = 1;
for (let result=--c; s<=10; s++) {
    console.log (result *=2)
}
//Вариант второй
let a = 2;
    for (let b = 1; b <= 10; b++) {
     console.log(a**b);
 }
//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
let m = 2;
let b = 1;
function stepen (m,b) {
    for (b; b <= 10; b++) {
        console.log(m**b);
    }
    }
    stepen (m,b);
    
/*  Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)*/

let v=':)';
for (let a=1; a <= 5; a++) {
    console.log(v.repeat(a));
};

/*  Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), 
а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)*/

let k=':)';
let u=1;
function smile(k,u)    {
    for (; u <= 5; u++) {
        console.log(k.repeat(u));
}
    }
    smile(k,u)

    /*  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, 
и сколько согласных букв. e.g. function getWordStructure(word) В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'*/

function getWordStructure (word) {
    let a = 'euioaEUIOA';
    let b = 'QWRTPSDFGHJKLZXCVBNMqwrtpsdfghjklzxcvbnm';
    let count_1 = 0;
    let count_2 = 0;
    let z = word.split ('');
    
    for (let x=0; x<z.length; x++) {
    if (a.indexOf (z[x]) !== -1) {
        count_1++;
    }
    if (b.indexOf (z[x]) !==-1) {
        count_2++;
    }
    }
    return (`${count_1} ${count_2}`);
}
    console.log (getWordStructure ('Check-List'));
    console.log (getWordStructure ('case'));
    console.log (getWordStructure ('Case'));

/*  4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba'    */

function isPalindrom (word) {
    return word.toLowerCase().split('').reverse().join('') == word.toLowerCase();
}
console.log (isPalindrom ('abba'));
console.log (isPalindrom ('Abba'));
console.log (isPalindrom ('321123'));