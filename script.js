//это значит, что мы используем let, а не var
"use strict" ;

//массив в js
const arr = ['a', 'b', 'c'];
console.log(arr[1]);

console.log(typeof(arr)); //узнаём тип переменной (массив = это случай объекта)

//объект в js - это свойство (либо ключ - это string): значение
const arrObj ={
    a: [1, 2, 3], //в свойстве а значение - это массив
    b: {s:'second'}, //в свойстве b значение - это объект
    c: 'third'
};

console.log(arrObj);

//два вывода значения у свойства b идентичны
console.log(arrObj['b']);
console.log(arrObj.b);

//добавления в объект нового свойства двумя способами
arrObj.d = 'forth';
arrObj['f'] = 'fifth';

console.log(arrObj.d);
console.log(arrObj['f']);

console.log(arrObj);

//добавление нового, заранее созданного свойства, в объект
const sixth = 'g';
arrObj[sixth] = 'sixth'; //задание значения новому свойству g
console.log(arrObj);

//интерполяция строк
const category = 'toys';
console.log(`https://url.com/${category}`);

//превращение строки (sting)'5' в число (int)5
console.log(4+ +'5');

//сравнение постфиксного и префиксного инкремента
let incr = 10,
    decr = 10;
/*
console.log(incr++); //10
console.log(decr--); //10
*/
console.log(++incr); //11
console.log(--decr); //9

//5%2 = 1 (остаток от деления)

console.log(2*4 == '8'); //true, т.к. это нестрогое сравнение (учитывается только содержание)
console.log(2*4 === '8'); //false, т. к. это строгое сравнение, учитывающее тип

