//  1

//  теория (Метод forEach(callback))
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Прервать выполнение метода forEach нельзя,
//     он всегда перебирает массив до конца.

//  задача
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//   // Пиши код ниже этой строки
// orderedItems.forEach(function(orderedItem, index){
//     console.log(`Индекс ${index}, значение ${orderedItem}`);
//     totalPrice += orderedItem;
// })
//  // Пиши код выше этой строки
//     return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


//  2
// (Задача.Фильтрация массива чисел)

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     numbers.forEach(function(number, index) {
//         if (number > value) {
//         filteredNumbers.push(number);
//         }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


//  3
//  (Общие элементы)

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     firstArray.forEach(function(element, index) {
//         if (secondArray.includes(element)) {
//         commonElements.push(element);
//         }
//     });

//     return commonElements;
//     // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


//  4

//  теория (Стрелочные функции.)
// Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// const add = a => {
//   return a + 5;
// };         // если параметр один, то без скобок//
// const greet = () => {
//   console.log('Привет!');
// };       // если параметров нет , то ()//

//  задача (рефакторинг)
// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }


//  5

//  теория (Неявный возврат)
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };                 // есть return значит - явный возврат и последуют еще условия
                      // (explicit return)

// const add = (a, b, c) => a + b + c; // возвращает только выражение (неявный возврат)
                                        //(implicit return)

//  задача
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
//   quantity * pricePerItem; // неявный возврат

// // Пиши код выше этой строки


//  6
//  теория (Стрелочные функции как коллбеки)
// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит делать если одна функция используется в нескольих местах программы или если она громоздкая.
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

//  задача (рефакторинг)
// Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;

//     orderedItems.forEach((item) => {
//     totalPrice += item;
//     });

//     return totalPrice;
// }
// // Пиши код выше этой строки
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


//  7  (Задача. Фильтрация массива чисел 2.0)

// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//         filteredNumbers.push(number);
//         }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


//  8 (Задача. Общие элементы 2.0)

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//         commonElements.push(element);
//         }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
// }


//  9

//  теория (Чистые функции)
// Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

//  чистая функция
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//  задача (???????)
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newArr = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             newArr.push(numbers[i] + value);
//         } else {
//             newArr.push(numbers[i]);
//             }
//     }
//     return newArr;
//     // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


//  10

//  теория (Метод map())
// массив.map((element, index, array) => {
//   // Тело коллбек-функции
// });
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

//  задача
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);


//  11

//  теория(Метод map() и массив объектов)
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 }
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

//  задача
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
// console.log(titles);


//  12 (Метод flatMap())
//  теория 
// // массив.flatMap((element, index, array) => {
// //   // Тело коллбек-функции
// // });
// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];

// students.map((student) => student.courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// students.flatMap((student) => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];


//  13(?????)
//  Задача. Имена пользователей
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Пиши код ниже этой строки
// const getUserNames = users => {
//  return  usersName = users.map((user) => user.name);

//   };
//   // Пиши код выше этой строки
// console.log(getUserNames);


//  14 (????????)
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Пиши код ниже этой строки

// const getUserEmails = users => {
//     return usersEmail =users.map((user) => user.email);

//   };
//   // Пиши код выше этой строки


//  15 (Методы filter и find)

//  теория
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

//  задача
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);
