### Дз к лекции 4

#### **Код с решениями находиться в файле homeWork_03.js** 

#### Задание 1  - Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

Массивы в Js являются "неправильными" с точки зрения классической структуры данных, потому что они объединяют черты нескольких структур, которые зачастую разделены в других языках программирования. Также массивы в JS являются динамическими и могут содержать разные типы данных. 
При добавлении или удалении элемента из массива, его длина автоматически изменяется, в отличии от других языков.
Массивы в Js поддерживают методы  `.push()`, `.pop()`, `.shift()`, `.unshift()`, которые позволяют использовать массив как **стек** (*Last In - First out*) и **очередь** (First In - First Out). В других языках эти структуры часто реализуются отдельно, так как их внутренняя работа оптимизирована под свои задачи:

- `.push()` и `.pop()` имитируют поведение стека (добавление и удаление с конца массива).
- `.shift()` и `.unshift()` позволяют добавлять и удалять элементы в начале массива, что имитирует поведение очереди.

В отличие от специальных реализаций стека и очереди, использование этих методов в JavaScript на больших массивах может быть менее эффективным. Например, `.shift()` и `.unshift()` сдвигают все элементы массива, что требует времени, пропорционального длине массива.



#### Задание 2 - Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

```
function logger() {  
    console.log(`I output only external context: ${this.item}`);  
}  
  
const obj = { item: "some value" };

// Используем метод call()

logger.call(obj);

// Используем метод apply()

logger.apply(obj);

// Используем метод bind()

const bindedLogger = logger.bind(obj);
bindedLogger();
```


3.1 Массивы:  
  
- Создайте массив чисел и найдите его сумму.  

```
const array = [1, 2, 3, 4, 5, 6];
const result = array.reduce((acc, value) => acc + value, 0)
console.log(result);
```

- Создайте массив строк и объедините их в одну строку.  

```
const arrayOfStrings = ["a", "b", "c", "d", "e"];
const result2 = arrayOfStrings.join('');
console.log(result2);
```

- Найдите максимальный и минимальный элементы в массиве чисел.  

```
const unsortedArray = [3, 2, 1, 4, 5, 11, -5, 6, 7, 8, 9];

// Вариант с сортировкой массива;

function findMaxMin(array) {
    const sortedArray = [...array].sort((a, b) => a - b);
    const max = sortedArray[sortedArray.length - 1];
    const min = sortedArray[0];
    return console.log(max, min);
}

findMaxMin(unsortedArray);

// Вариант без сортировки массива
function findMaxMin2(array) {
    let max = array[0];
    let min = array[0];
    for (let i=1; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
        if (array[i] < min){
            min = array[i];
        }
    }
    return console.log('MaxMin2 ' + max, '' + min);
}
findMaxMin2(unsortedArray);

```

3.2 Stack (стек):  
  
- Реализуйте стек с использованием массива.  **В файле homeWork_03.js**
  
3.3 Queue (очередь):  **В файле homeWork_03.js**
  
- Реализуйте очередь с использованием массива.  
- Имитируйте работу очереди на примере ожидания на кассе.  
  
**Бонус задание**: Реализовать полифил (собственную функцию реализующую встроенную в js) метода bind()

```
const obj2 = {
    item: 'John'
}

function myBind(func, context) {
    return function(...args) {
        return func.call(context, ...args);
    };

}

const bindedFunc = myBind(logger, obj2);
bindedFunc();
```