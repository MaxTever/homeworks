// Задание 2 - Прочитать про "Операторы и выражения, циклы в JS"


/* Задание 3 Создать объект Person несколькими способами, после создать объект Person2, 
чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам. */

// Создание с объекта с помощью литерала

const PersonObj = {
    name: 'Joe',
    age: 18,
    sayHi() {
        console.log('Hi'); 
    }
}


// Создание объекта с помощью функции конструктора
function PersonConstructor(name, age){
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log('Hi');
    }
}

const personWithConstructor = new PersonConstructor('Bob', 22);
personWithConstructor.sayHi();

// Создание объекта с помощью класса(как экземпляр класса)
class PersonCreateWithClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log('Hi'); 
    }
}


const personWithClass = new PersonCreateWithClass('Joe', 18);


// Создаем объект с помощью Object.create() и передаем объект который станет прототипом для Person2.
//В результате Person2 будет иметь те же свойства и методы   

const Person2 = Object.create(PersonObj);
Person2.name = 'Denzel';
Person2.age = '55';

// Добавить метод logInfo чтоб он был доступен всем объектам.

/* Чтобы данный метод был доступен во всех объектах его можно добавить в Object.prototype,
 так как это прототип от котрого наследуются все объекты. 
 Однако:
 - Если объект на котором будет вызваться данный метод,
   не будет иметь свойст name и age, будет выведено undefined
 - Может привести к конфликтам, если будут методы с таким же именем
 
 Лучше добавить данный метод в прототип конкретного конструктора

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.logInfo = function () {
        console.log(this.name, this.age);
    }

 */

Object.prototype.logInfo = function () {
    console.log('Имя:', this.name, '|', 'Возраст:', this.age);
}

Person2.logInfo();




/* Задание 4 Создать класс PersonThree c get и set для поля name и конструктором, 
сделать класс наследник от класса Person. */

// Создаем класс Person

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log('Hi'); 
    }
}


class PersonThree extends Person {
    constructor(name, age){
        super(name, age);
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get age(){
        return this._age; 
    }

    set age(value){
        this._age = value;
    }

}

const personThree = new PersonThree('Bib', 22);
console.log('Get name', personThree.name);
console.log('Set name', personThree.name = 'Bob');
personThree.sayHi();


// Бонус задание. Написать функцию которая вернет массив с первой парой чисел, сумма которых равна total

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

const firstSum = (arr, total) => {
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === total) {
            return [arr[i], arr[j]];
        }
    }
}
}

console.log('Решение с использованием вложенных циклов', firstSum(arr, total));

// Дополнительное решение с помощью Set для хранения уже проверенных чисел, данный алгоритм работает за O(N),
// но ответ будет другой, потому что он находит первую пару, которая в сумме дает 13, двигаясь слева направо по массиву.
// то есть выполнение завершится до того как цикл дойдет до 9 и ответ будет [6,7], а не [4, 9]
    
const firstSum2 = (arr, total) => {
    const set = new Set();
    for (let num of arr) {
        const needed = total - num;
        if (set.has(needed)) {
            return [needed, num];
        }
        set.add( num);

    }
    return null;
}


console.log('Решение с использованием коллекции Set', firstSum2(arr, total))
