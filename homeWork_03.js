
/* 
Задание 2 - Привязать контекст объекта к функции logger, 
чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)
*/

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



// Задание 3

// 3.1 Создайте массив чисел и найдите его сумму. 
const array = [1, 2, 3, 4, 5, 6];

const result = array.reduce((acc, value) => acc + value, 0)
console.log(result);

// 3.2 Создайте массив строк и объедините их в одну строку.  

const arrayOfStrings = ["a", "b", "c", "d", "e"];
const result2 = arrayOfStrings.join('');
console.log(result2);

// 3.3 Найдите максимальный и минимальный элементы в массиве чисел.

// При решении данной задачи можно использовать два способа, с сортировкой массива или без
// Если с сортировать массив, то минимальное значение будет с индексом 0, а максимальное - с индексом array.length - 1;


const unsortedArray = [3, 2, 1, 4, 5, 11, -5, 6, 7, 8, 9];


// Вариант с сортировкой массива;
function findMaxMin(array) {
    const sortedArray = [...array].sort((a, b) => a - b);
    const max = sortedArray[sortedArray.length - 1];
    const min = sortedArray[0];
    return console.log(max, min);
}

findMaxMin(unsortedArray);



// Вариант без сортировки массива;

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



class Stack {
    constructor (){
        this.stack = [];
    }
    
    // Добавление элемента в стек
    push(item) {
        this.stack.push(item);
    }

    // Удаление элемента из стека 
    pop() {
        return this.stack.pop();
    }
    
    // Получение последнего элемента из стека
    peek(){
        return this.stack[this.stack.length - 1];
    }

    // Проверка на пустоту стека
    isEmpty(){
        return this.stack.length === 0;
    }

    // Вывод всех элементов стека
    printStack(){
        return this.stack;
    }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Стек: ', stack.printStack());
console.log('Последний элемент', stack.pop());


class Queue {
    constructor (){
        this.queue = [];
    }
    
    // Добавление элемента в очередь
    push(item) {
        this.queue.push(item);
    }

    // Удаление элемента из очереди
    dequeue() {
        return this.queue.shift();
    }
    
    // Получение первого элемента из очереди
    peek(){
        return this.queue[0];
    }

    // Проверка на пустоту очереди
    isEmpty(){
        return this.queue.length === 0;
    }

    //  Вывод очереди
    printQueue(){
        return this.queue;
    }

    //  Вывод количества элементов в очереди
    size(){
        return this.queue.length;
    }

}

const kassa1 = new Queue();
kassa1.push(1);
kassa1.push(2);
kassa1.push(3);
kassa1.push(4);
kassa1.push(5);
kassa1.push(6);
kassa1.push(7);

console.log('Очередь: ', kassa1.printQueue());
console.log('Количество элементов в очереди: ', kassa1.size());



// Простая реализация полифила bind с использованием call

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
