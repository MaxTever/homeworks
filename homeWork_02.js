// Создание объекта counter c помощью литерала объекта

const counter = { 
    count: 0,
    increment: function() {
        this.count++;
    },
    decrement: function() {
      this.count--;
    },

    logCount: function() {
        return console.log('counter'+':'+this.count);
    }
}

counter.increment();
counter.logCount();

// Создание объекта counter c помощью new Object() (конструктор объекта)

const counter2 = new Object();

counter2.count = 0;
counter2.increment = function() { this.count++ };
counter2.decrement = function() { this.count-- };
counter2.logCount = function() { return console.log('counter2'+':'+this.count) };

// Cоздание объекта counter c помощью Object.create
// Можно указать null первым аргументом, чтобы создать объект без прототипа
const counter3 = Object.create(Object, {
    count: {
        value: 0,
        writable: true,
        enumerable: true,
        configurable: true
    },
    increment: {
        value: function() {
            this.count++;
        },
        writable: true,
        enumerable: true,
        configurable: true
    },
    decrement: {
        value: function() {
            this.count--;
        },
        writable: true,
        enumerable: true,
        configurable: true
    },
     logCount: {
        value: function(){ return console.log('counter3'+':'+this.count) },
        writable: true,
        enumerable: true,
        configurable: true,
     }
});

counter3.increment();
counter3.increment();
counter3.increment();
counter3.logCount();

// Создание объекта с помощью Object.assign, хотя это скорее является копированием объекта

const counter4 = Object.assign({}, counter3);
counter4.value = 0;
counter4.increment();
counter4.increment();
counter4.increment();
counter4.increment();
counter4.logCount = function(){ return console.log('counter4'+':'+this.count) };
counter4.logCount();



// Создание объекта с помощью функции конструктора

function CounterConstructor(){
  this.count = 0;
    this.increment = function() {
        this.count++;
    }
    this.decrement = function() {
        this.count--;
    },
    this.logCount = function() {
        return console.log('counter5'+':'+this.count);
    }
}

const counter5 = new CounterConstructor();
counter5.increment();
counter5.increment();
counter5.increment();
counter5.increment();
counter5.increment();
counter5.logCount();


// Создание объекта с помощью классса

class Counter {
  constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
    logCount() {
        console.log('counter6'+':'+this.count);
    }
}

const counter6 = new Counter();
counter6.increment();
counter6.increment();
counter6.increment();
counter6.increment();
counter6.increment();
counter6.logCount();
counter6.logCount();


// Задание 2 
/* 
Скопировать объект counter всеми
возможными способами;
*/


// 1. Поверхностное копирование объекта counter1 с помощью Object.assign()
const clonedCounter1 = Object.assign({}, counter);

// 2. Поверхностное копирование объекта с помощью spread operator
const clonedCounter2 = {...counter2};

// 3. Поверхностное копирование объекта с наследованием прототипа 

const clonedCounter3 = Object.create(counter3);

// 4. Реализация функции для поверхностного копирования объекта

function shallowCopy(obj){

    const clonedObject = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObject[key] = obj[key];
        }
    }
    return clonedObject;
}

// 1. Глубокое копирование объекта с помощью сериализации, однако методы не будут скопированы 

const clonedCounter4 = JSON.parse(JSON.stringify(counter4));

// 2. Глубокое копирование с помощью библиотеки lodash
const _ = require('lodash');
const clonedCounter5 = _.cloneDeep(counter5);
console.dir(clonedCounter5);
clonedCounter5.increment();
clonedCounter5.logCount();

// 3. Глубокое копирование с помощью structuredClone
// При копировании объекта содержащего методы будет ошибка 

emptyCounter = {
    count: 0
}
// const clonedCounter6 = structuredClone(counter);

const clonedCounter6 = structuredClone(emptyCounter);
console.dir(clonedCounter6);

// 4. Функция для глубокого копирования объекта

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj; 
    }
  
    let copy = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      copy[key] = deepCopy(obj[key]); 
    }
  
    return copy;
}

const clonedCounter7 = deepCopy(counter8);


// Задлание 3 

/* Создать функцию makeCounter всеми описанными и возможными способами*/

// Функция конструктор makeCounter

function makeCounter() {
    this.count = 0;
    this.increment = function() {
        this.count++;
    }
    this.decrement = function() {
        this.count--;
    }
    this.logCount = function() {
        console.log('makeCounter'+':'+this.count);
    }
}

// Вызов конструктора осуществляется с ключевым словом new 

const counter7 = new makeCounter();


// Создание makeCounter c использованием замыкания 

function makeCounter2(){
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        logCount: function() {
            console.log('makeCounter2'+':'+count);
        }
    }
}

const counter8 = makeCounter2();


// Создание makeCounter c использованием класса 

class makeCounter3 {
    constructor() {
          this.count = 0;
      }
      increment() {
          this.count++;
      }
      decrement() {
          this.count--;
      }
      logCount() {
          console.log('counter6'+':'+this.count);
      }
  }

// В теории можно использовать Proxy для создания данной функции

function makeCounter4() {
    const handler = {
        get: function(target, prop) {
            if (prop === 'increment'){
                return () => {target.count++}
            }
            if (prop === 'decrement') {
                return () => target.count--;
            }
            if (prop === 'logCount') {
                return () => console.log('counter9',target.count);
            }
            return target[prop];
        }
    };

    const counter = { count: 0 };
    return new Proxy(counter, handler);
}


// Использование
const counter9 = makeCounter4();
counter9.increment();
counter9.logCount(); // 1


// Создание рекурсивной функции для глубокого сравнения объектов

function deepEqual(obj1, obj2) {
    //Проверка ссылки 
    if (obj1 === obj2) {return true}

    //Проверка типа
    if (typeof obj1 !== 'object'|| obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    //Можно добавить дополнительные проверки на специальные типы объектов

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // Проверка количества свойств
    if (keys1.length !== keys2.length) {return false} 

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

const obj1 = { 
    here: { 
        is:"on",
        other: "2" 
    }, 
    object: "Y" 
};
    
const obj2 = { 
    here: { 
        is:"on",
        other: "2" 
    }, 
    object: "Y" 
};

console.log('Результат выполнения функции deepEqual: ', deepEqual(obj1, obj2));


// Создание функции для разворота стрки с помощью методов массива

function reverseStr(str){
    return str.split('').reverse().join('');
}

console.log('Результат выполнения функции reverseStr: ', reverseStr('Hello'));