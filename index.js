function filterBy(array, type) {
    // Создаем новый массив, исключая элементы указанного типа
    return array.filter(function(element) {
        return typeof element !== type;
    });
}


// Пример 1: Фильтруем строки
const array1 = ['hello', 'world', 23, '23', null];
const result1 = filterBy(array1, 'string');
console.log('Исходный массив:', array1);
console.log('Фильтр по типу "string":', result1);
// Результат: [23, null]

console.log('---');

// Пример 2: Фильтруем числа
const array2 = [1, 2, 'test', true, 42, false, 'hello'];
const result2 = filterBy(array2, 'number');
console.log('Исходный массив:', array2);
console.log('Фильтр по типу "number":', result2);
// Результат: ['test', true, false, 'hello']

console.log('---');

// Пример 3: Фильтруем boolean
const array3 = [true, false, 'yes', 'no', 1, 0];
const result3 = filterBy(array3, 'boolean');
console.log('Исходный массив:', array3);
console.log('Фильтр по типу "boolean":', result3);
// Результат: ['yes', 'no', 1, 0]

console.log('---');

// Пример 4: Фильтруем объекты
const array4 = [{name: 'John'}, [1, 2, 3], 'string', 123, {age: 30}];
const result4 = filterBy(array4, 'object');
console.log('Исходный массив:', array4);
console.log('Фильтр по типу "object":', result4);
// Результат: ['string', 123]
