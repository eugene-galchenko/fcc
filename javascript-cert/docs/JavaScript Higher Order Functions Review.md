# JavaScript Higher Order Functions Review

## Содержание

- [JavaScript Higher Order Functions Review](#javascript-higher-order-functions-review)
  - [Содержание](#содержание)
  - [Callback Functions and the `forEach` Method](#callback-functions-and-the-foreach-method)
  - [Higher Order Functions](#higher-order-functions)
  - [`map()` Method](#map-method)
  - [`filter()` Method](#filter-method)
  - [`reduce()` Method](#reduce-method)
  - [Method Chaining](#method-chaining)
  - [Working with the `sort` Method](#working-with-the-sort-method)
  - [Working with the `every` and `some` Methods](#working-with-the-every-and-some-methods)
    - [`every()` Method](#every-method)
    - [`some()` Method](#some-method)
  - [Шпаргалка: сравнение методов](#шпаргалка-сравнение-методов)
    - [Пара `every` / `some`](#пара-every--some)
    - [Законы де Моргана](#законы-де-моргана)
    - [Falsy-значения в JavaScript](#falsy-значения-в-javascript)

---

## Callback Functions and the `forEach` Method

**Определение:** В JavaScript **callback-функция** — это функция, которая передаётся как аргумент в другую функцию и выполняется после того, как основная функция завершила работу.

**Метод `forEach()`:** Используется для перебора каждого элемента массива и выполнения операции над ним. Callback-функция в `forEach` может принимать до трёх аргументов: текущий элемент, индекс текущего элемента и массив, к которому был применён `forEach`.

```js
const numbers = [1, 2, 3, 4, 5];

// Результат: 2 4 6 8 10
numbers.forEach((number) => {
  console.log(number * 2);
});
```

---

## Higher Order Functions

**Определение:** **Higher order function** (функция высшего порядка) — это функция, которая принимает одну или несколько функций в качестве аргументов и возвращает функцию или значение как результат.

```js
function operateOnArray(arr, operation) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = operateOnArray(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

---

## `map()` Method

Этот метод создаёт **новый массив**, применяя заданную функцию к каждому элементу исходного массива. Callback-функция может принимать до трёх аргументов: текущий элемент, индекс текущего элемента и массив, к которому был применён `map`.

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
```

---

## `filter()` Method

Этот метод создаёт **новый массив** с элементами, которые прошли заданную проверку. Удобен для избирательного извлечения элементов по критерию. Как и в `map`, callback-функция `filter` принимает те же три аргумента: текущий элемент, индекс и массив.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
```

---

## `reduce()` Method

Этот метод обрабатывает массив и **сворачивает его в одно значение**. Это значение может быть числом, строкой, объектом или даже другим массивом. `reduce()` работает, применяя функцию к каждому элементу массива по порядку и передавая результат каждого вычисления в следующую итерацию. Такую функцию часто называют **reducer-функцией**.

Reducer-функция принимает два основных параметра: **аккумулятор** и **текущее значение**. Аккумулятор хранит накопленный результат операций, а текущее значение — это обрабатываемый элемент массива.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15
```

---

## Method Chaining

**Определение:** **Method chaining** (цепочка методов) — это техника программирования, позволяющая вызывать несколько методов у одного объекта в одной строке кода. Эта техника делает код более читаемым и лаконичным, особенно при выполнении серии операций над одним объектом.

```js
const result = "  Hello, World!  "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");

console.log(result); // "hello, JavaScript!"
```

---

## Working with the `sort` Method

**Определение:** Метод `sort` используется для сортировки элементов массива и возвращает ссылку на отсортированный массив. Копия **не создаётся**, потому что сортировка происходит **на месте** (in place).

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

Если нужно отсортировать числа, придётся передать **compare-функцию**. Метод `sort` преобразует элементы в строки и затем сравнивает последовательности их UTF-16 code units. UTF-16 code units — это числовые значения, представляющие символы в строке. Например, числа 65, 66 и 67 представляют символы `"A"`, `"B"` и `"C"` соответственно.

Поэтому число 200 оказывается перед числом 3 в массиве: строка `"200"` идёт раньше строки `"3"` при сравнении их UTF-16 code units.

```js
const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b);

console.log(numbers); // [3, 5, 10, 200, 414]
```

Параметры `a` и `b` — это два сравниваемых элемента. Compare-функция должна возвращать:

- **отрицательное** значение, если `a` должен идти перед `b`,
- **положительное** значение, если `a` должен идти после `b`,
- **ноль**, если `a` и `b` равны.

---

## Working with the `every` and `some` Methods

### `every()` Method

Этот метод проверяет, проходят ли **все** элементы массива проверку, реализованную переданной функцией. `every()` возвращает `true`, если переданная функция вернула `true` для всех элементов массива. Если хоть один элемент не проходит проверку, метод **сразу** возвращает `false` и прекращает проверять остальные элементы.

```js
const numbers = [2, 4, 6, 8, 10];
const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);

console.log(hasAllEvenNumbers); // true
```

### `some()` Method

Этот метод проверяет, проходит ли проверку **хотя бы один** элемент. `some()` возвращает `true`, как только находит элемент, прошедший проверку. Если ни один элемент не прошёл проверку, возвращается `false`.

```js
const numbers = [1, 3, 5, 7, 8, 9];
const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);

console.log(hasSomeEvenNumbers); // true
```

---

## Шпаргалка: сравнение методов

| Метод | Возвращает | Изменяет исходный массив? | Когда останавливается | Для чего |
|-------|------------|---------------------------|------------------------|----------|
| `forEach` | `undefined` | Нет | Никогда (идёт до конца) | Пройтись по элементам (сайд-эффекты) |
| `map` | Новый массив **той же длины** | Нет | Никогда | Преобразовать каждый элемент |
| `filter` | Новый массив **меньшей/равной длины** | Нет | Никогда | Отобрать подходящие элементы |
| `reduce` | Одно значение (число, строка, объект, массив) | Нет | Никогда | Свернуть массив в одно значение |
| `sort` | Ссылку на **отсортированный исходный** массив | **Да** (in place) | Никогда | Отсортировать элементы |
| `every` | `boolean` | Нет | На первом **falsy** | «Все ли проходят проверку?» |
| `some` | `boolean` | Нет | На первом **truthy** | «Хотя бы один проходит?» |

### Пара `every` / `some`

| Ситуация | `every` | `some` |
|----------|---------|--------|
| Пустой массив | `true` | `false` |
| Все элементы подходят | `true` | `true` |
| Часть элементов подходит | `false` | `true` |
| Ни один не подходит | `false` | `false` |

### Законы де Моргана

```js
arr.every(f)  ===  !arr.some(x => !f(x))
arr.some(f)   ===  !arr.every(x => !f(x))
```

### Falsy-значения в JavaScript

```
false, 0, -0, 0n, "", null, undefined, NaN
```

Всё остальное — **truthy** (включая `[]`, `{}`, `"0"`, `"false"`, `-1`).