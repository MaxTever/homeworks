/* 
Написать по 2 примера создания примитивных значений 
(если есть несколько способов - использовать) (string, number, boolean, null, undefined, symbol, bigInt)
*/

// String
const userName = 'Max'; 
let age = "23";
let country = String('Russia'); // создает примитвную строку
let strWithNew = new String('строка'); // создает объект обертку string 
const stringWithVariables = `user - ${userName}, ${age}, ${country}` // используются шаблонные строки

console.log(stringWithVariables); // user - Max, 23, Russia
console.log(strWithNew); // [String: 'строка']

// Number 
const num1 = 5;
let num2 = 6;
const num3 = new Number(7); // создает объект обертку Number
const num4 = Number('8');  // создает примитивное число
let num5 = +'9' // унарный плюс преобразует строку в число
let num8 = 1e6; // экспоненциальная запись
let hexNum = 0xFF; // шестнадцитиричная запись
let binaryNum = 0b1010; // бинарная запись
let octalNum = 0o744; // восьмиричная запись

console.log( num4); 
console.log(num3);

// Bollean

let isTrue = true;
let isFalse = false;

let isTrueWithConstructor = Boolean(1);

let anotherTruthy = 4 < 5; // с использованием выражения

let anotherTruthy2 = !!"строка" // используется двойное отрицание для 

// использование логических операций
let and = true && true; // true 
let or = false || true; // true 
let not = !false; // true

// использование тернарного оператора 
let isAdult = age >= 18 ? true : false;


// Null

let data = null;
let user = null;

// Возврат значения из функции 

function getValue(){
return null;
}


// Undefined

let value = undefined; // явное присваивание
let variable; // Объявление переменной без инициализации

// Также стоит отметить, если функция не содержит оператора return, по умолчанию возвращает undefined.


// Symbol

let sym1 = Symbol();

let sym2 = Symbol("description"); // символ с описанием

// BigInt

let bigInt1 = 1234567890123456789012345678901234567890n;

let bigInt2 = BigInt("9007199254740991");


// Решить

const res = "B" + "a" + (1 - "hello"); 
console.log(res); // BaNan

/* 
- В данном примере 'B' и 'a' - строки, результатом их сложения будет строка 'Ba'.
- Результатом (1-'hello') будет NaN так как строка 'hello' не может быть приведена к числу.
- 'Ba' + Nan, в результате конкатенации будет строка 'BaNan'
*/

const res2 = (true && 3) + "d"; 
console.log(res2); // 3d

/* 
- `(true && 3)` — оператор `&&` возвращает значение второго операнда, 
    если первый операнд истинный, иначе возвращает первый. Здесь `true && 3` дает `3`.
- `3 + "d"` — это сложение числа и строки, которое приводит к конкатенации, и результат будет строкой `"3d"`.
*/


const res3 = Boolean(true && 3) + "d"; 
console.log(res3); // trued

/* 
- `(true && 3)` — как и раньше, результат `3`.
- `Boolean(3)` — `Boolean` возвращает `true` для всех значений, кроме `0`, `null`, `undefined`, `NaN` и `""`. Поскольку `3` является истинным значением, `Boolean(3)` даст `true`.
- `true + "d"` — `true` приводится к строке `"true"`, и результат — строка `"trued"`.
*/