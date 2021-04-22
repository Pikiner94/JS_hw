// Arrow Function

// const sayHello = () => {
//   return 'Hello Word';
// };

// const newName = (name) => `hello  ${name}`;
// console.log(newName('victoria'));

// Можно кратко записать

// const sayHello = (a, b) => a + b;
// console.log(sayHello(1, 2));

// Вот так можно передать значение в переменной

// const newName = (name) => `hello  ${name}`;

// console.log(newName('victoria'));

// Вот так можно передать объекты

// const retObject = (name) => ({ age: 31, name: name });

// console.log(retObject('sara'));

// HOF - high order function

// В JS все функции высшего порядка - это функция которая в качестве параметра принимает другую функцию
// И принимает функцию высшего порядка/ Признаки функции высшего порядка:
// 1. Функция как параметр
// 2. Возвращается другая функция

// let result = calculator(5, 3, multi);

// const sum = (a, b) => a + b;
// const multi = (a, b) => a * b;

// function calculator(a, b, call) {
//   return call(a, b);
// }
// console.log(result);

// Инлайновый Колл-бек (когда колбек передается напрямую)

// Стек Вызова и Лексическое окружение

// Closeres JS Замыкание функции

// Внутренняя функция имеет доступ к внешним переменным

// function generateDomain(domainName) {
//   return function (url) {
//     return `${url}, Доменная зона: ${domainName}`;
//   };
// }

// let result = generateDomain('com');
// console.log(result('facebook'));

// let framework = ['Angular', 'React'];

// function frameworkManager(frames) {
//   return {
//     display: function View(frames) {
//       console.log(frames);
//     },

//     add: function add(frame) {
//       framework.push(frame);
//     },
//   };
// }

// let manager = frameworkFunction(framework);

// console.log(manager);

// function bind() {
//   return function (men) {
//     console.log(`${men.name},${men.age},${men.job} `);
//   };
// }
// const person1 = { name: 'Михаил', age: 22, job: 'Frontend' };
// const person2 = { name: 'Владимир', age: 25, job: 'Backend' };

// let card = bind();
// card(person2);

// Лексическое окружжение

// let x = 10

// const fn = fun

// this

// Тот, кто вызывает функцию находится слева от точки

// let Rom = {
//   Mamba() {
//     return 'Hello';
//   },
// };
// console.log(Rom.Mamba());

// Call apply Bind

// Call -

// Apply -

// Bind -

/// Bind  - Он возвращает функцию, которая копирует значения

// let vova = {
//   name: 'vova',
//   showname() {
//     console.log(this.name);
//   },
//   age: 21,
// };

// let sveta = {
//   name: 'Sveta',
//   age: 24,
// };

// const lohPoImeniVova = vova.showname.call(sveta);
// console.log(lohPoImeniVova);

// Методы функции:
/// Call  - Вызывает функцию
/// Apply   -
/// Bind - Позволяет привязывать контекс

// let c = function Privert() {
//   console.log(this);
// };

// guard - clauser - зашита от вложенности

//  Лучше не использовать else if и так далее

// Петриченко
