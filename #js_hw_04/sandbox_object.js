/*
// let c = {
//   name: 'Vova',
//   age: 13,
// };

// Можно записать функцию в обьекте:
// let c = {
//   name: "Vova",
//   age: 13;
// function oldAreyou() {
//   return 2021 - this.age;
// }
// }

// const sayHello = (text) => alert(text);

// Написал функцию внутри объекта, которая отрабатываеть, когда я ее вызываю за пределами объекта и ссылается на проп с обьекта в котором находится функция

// let person = {
//   name: 'Mars',
//   age: 27,
//   hobbies: 'Mafia',
//   oldAreyou() {
//     return 2021 - this.age;
//   },

//   sayHello() => " Всем привет"};

// console.log(person.oldAreyou());

// let elements = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// let map = elements.map((element) => {
//   return element.length + 2;
// });

// console.log(map);

// let b = ['Мамба', 'Гамба', 'Камба'];

// let c = b.forEach((item, index, array) => alert(`${array}`));

// console.log(c);

// b.car = ['bmw'];

// console.log(b);

// function OSB(name, value) {
//   let c = {
//     [name]: value,
//   };
//   return c;
// }

// console.log(OSB('sara', 124));

// let Vakcine = ['Moderna', 'Covisild', 'Sputnic V', 'Sinovac'];

// let createOfCountries = ['usa', 'india', 'rf', 'china'];
// let result = [];

// function CoronaVak(Vakcine, createOfCountries) {
//   for (let i = 0; i < Vakcine.length; i += 1) {
//     result[Vakcine[i]] = createOfCountries[i];
//   }
//   return result;
// }

// console.log(CoronaVak(Vakcine, createOfCountries));

// Создает динамические параметры объекта/

// let bag = [];

// let fruit = prompt('Введите фрукт', 'Яблоко');

// bag[fruit] = 5; //  Создает Свойство объекта и соединяет его со свойством, которое передается через равно //

// console.log(bag);

// for ..in  - перебор Обьекта

let total = 0;

let obg = {
  likes: 37,
  natural: 5,
  fake: 1,
};

// for (let value in obg) {
//   total += obg[value];
// }

// console.log(total);

// Метод создания массива из Объектов
// let c = Object.keys(obg);
// console.log(c);

// Важно, что в for ..of нельзя передать объект(работает с массивом)

// Object.value - возвращает массив значений

// let a = Object.values(obg);

// console.log(a);

// let a = Object.entries(obg);
// console.log(a);

// Можно перебрать массив объектов через for of и вывести каждую строку

// Rest и Spread Оператор ...

// Если ... = то это Rest

// Если =... то это Spread

// Поменять значение местами

let a = [100, 300];
let b = [200, 300];

// объединение массивов  методом concat
// let concat = a.concat(b);
// console.log(concat);

// Объединение массива через spread

let alfabet = [...a, ...b];

console.log(alfabet);

// Как сделать математическое действие над массивом? - Добавить оператор spread

let bab = [1, 2, 4, 5, 6, 7];

let bbba = Math.min(...bab);
console.log(bbba);

// Можно в массиве назначить каждой переменной свое значение не прописывая это и не тратя время

// let [AA, BT, VT] = bab;

// console.log(BT);

// Rest / Spresd for Objects

// Как передать значения, которых нету в объекте другому объекту?

// можно воспользоватся методом spread

// let sara = {
//   name: 'Sara',
//   age: 13,
//   hobbies: 'deers',
// };

// let vova = {
//   ...sara,

//   name: 'Vova',
//   age: 12,
// };

// console.log(vova);

// Деструктиризация (Деление полеобъекта на переменные )

let person = {
  name: 'asd asd',
  age: 27,
  hobbies: 'Mafia',
};

let { name: coc } = person;
console.log(coc);

// Можно переназначить поле в объекте

let { name: coca } = person;
// console.log(coca); // Выведет Mars

let aasd = 1;
let basd = '1';

// let ga = aasd == basd;
// console.log(ga);

// let ga = aasd === basd;
// console.log(ga);

// 2  - 18 минута
*/

// let shop = {
//   name: '',
//   adress: 'Kiev',
//   items: [
//     { id: 1, name: 'apples', price: '35', amount: '200', category: 'fruit' },
//     { id: 2, name: 'bananes', price: '25', amount: '350', category: 'fruit' },
//     {
//       id: 3,
//       name: 'potato',
//       price: '15',
//       amount: '500',
//       categiry: 'vagetables',
//     },
//     {
//       id: 4,
//       name: 'tomato',
//       price: '37',
//       amount: '150',
//       categiry: 'vagetables',
//     },
//   ],

//   showitems() {
//     for (let item of this.items) {
//       console.log(`id: ${item.id}, name: ${item.name}`);
//     }
//   },
//   addItem() {
//     for (let value of this.items) {
//       this.i;
//       console.log(this.items);
//     }
//   },
// };

// shop.showitems();

// Методы Массивов

// Object.keys(тут передаем объект) - данный метод создает из обекта массив с ключами

// Синтаксис Деструктуризации - const [Ключ того, что я хочу вырезать] = название объекта

// Практика
// Рефакторинг - переписывание кода под новые задачи

// Тернарный оператор

// let a = 3;
// let b = 7;

// a < 1 ? ((a = 4), (b = 2)) : ((a = 5), (b = 6));

// console.log(a, b);
