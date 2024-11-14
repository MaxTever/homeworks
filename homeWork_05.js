// Пример 1

 let promiseTwo = new Promise((resolve, reject) => {  
         resolve("a");  
     });  
      
     promiseTwo  
     .then((res) => {  
         return res + "b";   // на данном этапе res = "ab"
     })  
     .then((res) => {  
         return res + "c";  // на данном этапе res = "abc"
     })  
     .finally((res) => {  
         return res + "!!!!!!!";  // на данном этапе не будет ничего так как finally используется для выполнения сайд-эффектов и не передает результат по цепочке дальше
     })  
     .catch((res) => {  
         return res + "d";  // на данном этапе не будет ничего так как промис не реджектиться 
     })  
     .then((res) => {  
         console.log(res);  // выведеться abc
     });

// // Пример 2

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
         console.log("4", c);  // undefined
       return c;  
     });


/* 
Ответ: 
1 123
2 123
3 321
4 undefined
*/




/* 
3) Напишите функцию, которая будет проходить через массив целых чисел 
и выводить индекс каждого элемента с задержкой в 3 секунды.
Входные данные: [10, 12, 15, 21]
*/

arr = [10,12,15,21];

function timeOutFunc(arr){
     for (let i =  0; i < arr.length; i++){
         setTimeout(function() {
           return console.log(i)}, 3000 * (i+1));
     }
}

timeOutFunc(arr);



/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */


async function retryFetch(func, retry = 5){
  let count = 0;
    while(count < retry){
        try{
            console.log('Попытка №', count);
            return await func();
        }catch(e){
            count++;
            console.log('Ретрай №', count);
        }
    }
}

function fetchUrl(url){
  return retryFetch(function () {
    return fetch(url, 5)
  })
}

fetchUrl('https://google.com')
  .then((res) => console.log('Контент станицы', res))
  .catch((err) => console.log('Ошибка', err));