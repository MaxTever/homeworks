### homeWork_05

#### Код в файле homeWork_05.js

Пример 1

```
let promiseTwo = new Promise((resolve, reject) => {  
   resolve("a");  
});  
  
promiseTwo  
.then((res) => {  
   return res + "b";   // на данном этапе res = "ab"
})  
.then((res) => {   // на данном этапе res = "abc"
   return res + "с";  
})  
.finally((res) => {   
   return res + "!!!!!!!";  
})                     
.catch((res) => {  
   return res + "d";  
})  
.then((res) => {  
   console.log(res);  
});
```

**Шаги:** 
1. Сначала создается промис и сразу же резолвится со значением 'a'
2. В первый .then попадает 'a' и происходит конкатенация, что вернет 'ab'
3. Во втором .then, res равен ab и вернет abc
4. В finally не будет ничего так как finally используется для выполнения сайд-эффектов и не передает результат дальше по цепочке
5. В catch блок не выполняется, так как промис не реджектится 

**Ответ: abc**

Пример 2

```
function doSmth() {  
   return Promise.resolve("123");  
}  
  
doSmth()  
.then(function (a) {  
   console.log("1", a); //  123
   return a;  
})  
.then(function (b) {  
   console.log("2", b);  // 123
   return Promise.reject("321");  
})  
.catch(function (err) {  
   console.log("3", err);  // 321
})  
.then(function (c) {  
   console.log("4", c);  
return c;  
});
```

**Шаги:** 
1. Создается функция возвращающая промис 
2. Функция вызывается и промис  резолвится со значением 123
3. В первый .then попадает 123 и выводиться в консоль, также передает 123 дальше по цепочке
4. Во втором .then выводиться в консоль 123, после этого возвращает промис, который реджектится со значением 321
5. В блоке  .catch будет выведено в консоль 321
6. Последний .then выведет в консоль undefined, так как catch ничего возвращает по  возвращает `undefined`. Затем вернет undefined.

**Ответ:** в консоль будет выведено 
1 123
2 123
3 321
4 undefined


#### 3 Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.  

Входные данные: `[10, 12, 15, 21]`

```
arr = [10,12,15,21];

function timeOutFunc(arr){
    for (let i =  0; i < arr.length; i++){
        setTimeout(function() {
          return console.log(i)}, 3000 * (i+1));
    }
}

timeOutFunc(arr);
```


#### 4 Прочитать про Top Level Await (можно ли использовать await вне функции async)

Информацию по этому вопросу брал из Доки

Ключевое слово `await` может использоваться не только внутри асинхронных функций, но и в модулях.

Определение данных в дочернем модуле с использованием `await` позволяет родительскому модулю ожидать окончания загрузки асинхронных данных, при этом загрузка других дочерних модулей не блокируется.

Допустим, у нас есть модуль `Parent.mjs`, импортирующий данные из модулей `Child.mjs`:

```
// Parent.mjs 
import {data} from './Child.mjs' 
console.log('Parent:', data)
```

Модуль `Child.mjs` экспортирует данные, полученные асинхронно:

```
// Child.mjs // Пример асинхронной функции, возвращающей Promise 
const promise = fetch('https://dummyjson.com/products/1') 
.then(res => res.json()) 
export const data = await promise
```

При запуске `Parent.mjs` будет ожидать завершения асинхронной операции.

Возможность использовать `await` вне асинхронной функции в модулях появилась в стандарте ES2022.

Попытка использовать `await` вне модуля и не в асинхронной функции приведёт к синтаксической ошибке:  
`SyntaxError: await is only valid in async functions and the top level bodies of modules`.

