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
