# JavaScript Fundamentals Review

## String Constructor и метод `toString()`

**Определение:** строковый объект используется для представления последовательности символов. Создаётся через конструктор `String`, который оборачивает примитивное значение в объект.

```javascript
const greetingObject = new String("Hello, world!");

console.log(typeof greetingObject); // "object"
```

### Метод `toString()`

Преобразует значение в его строковое представление. Работает для чисел, булевых значений, массивов и объектов.

```javascript
const num = 10;
console.log(num.toString()); // "10"

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

Метод принимает **необязательный radix** — число от 2 до 36. Radix задаёт **систему счисления**: 2 — двоичная, 8 — восьмеричная. Если не указан — по умолчанию 10 (десятичная).

```javascript
const num = 10;
console.log(num.toString(2)); // "1010" (двоичная)
```

## Конструктор `Number`

**Определение:** конструктор `Number` создаёт числовой объект. У него есть полезные свойства и методы: `isNaN`, `toFixed`. Чаще всего используется для **преобразования** других типов в число.

```javascript
const myNum = new Number("34");
console.log(typeof myNum); // "object"

const num = Number('100');
console.log(num);          // 100
console.log(typeof num);   // number
```

## Best Practices: именование переменных и функций

### camelCase

По соглашению JavaScript-разработчики используют **camelCase** для переменных и функций. Первое слово — всё в нижнем регистре, последующие — с заглавной.

```javascript
isLoading
```

### Именование булевых значений

Для булевых переменных принято использовать префиксы **`is`**, **`has`**, **`can`**.

```javascript
let isLoading = true;
let hasPermission = false;
let canEdit = true;
```

### Именование функций

Имя функции должно **ясно** говорить, что она делает.

- **Предикаты** (возвращают `true` / `false`) — префиксы `is`, `has`, `can`.
- **Геттеры** (получают данные) — префикс `get`.
- **Сеттеры** (устанавливают данные) — префикс `set`.
- **Обработчики событий** — префикс `handle` или суффикс `Handler`.

```javascript
function getUserData() { /* ... */ }

function isValidEmail(email) { /* ... */ }

function getProductDetails(productId) { /* ... */ }

function setUserPreferences(preferences) { /* ... */ }

function handleClick() { /* ... */ }
```

### Именование переменных в циклах

Для счётчиков циклов обычно используют **одинарные буквы**: `i`, `j`, `k`.

```javascript
for (let i = 0; i < array.length; i++) { /* ... */ }
```

## Работа с sparse-массивами

**Определение:** массивы могут содержать **пустые слоты**. Пустой слот — это слот **без значения**. Это **отличается** от слота со значением `undefined`. Такие массивы называются **sparse arrays** (разрежённые массивы).

```javascript
const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4
```

## Линтеры и форматтеры

- **Линтеры** — инструменты **статического анализа** кода. Находят ошибки, баги, стилистические огрехи, подозрительные конструкции. Пример: **ESLint**.
- **Форматтеры** — автоматически **приводят код к единому стилю**. Пример: **Prettier**.

## Управление памятью

**Определение:** управление памятью — это процесс **контроля** памяти: выделение, когда нужно, и освобождение, когда больше не нужно.

В JavaScript — **автоматическое управление памятью**. Движок JS **сам** выделяет и освобождает память. Тебе **не нужно** явно освобождать память в коде. Этот автоматический процесс называется **«сборка мусора»** (garbage collection).

## Замыкания (Closures)

**Определение:** замыкание — это функция, у которой есть доступ к переменным **внешней (охватывающей) лексической области видимости**, даже **после того как внешняя функция вернулась**.

```javascript
function outerFunction(x) {
  let y = 10;
  function innerFunction() {
    console.log(x + y);
  }
  return innerFunction;
}

let closure = outerFunction(5);
closure(); // 15
```

## Ключевое слово `var` и hoisting

**Определение:** `var` — **изначальный** способ объявления переменных до 2015 года. У него были проблемы со **scope**, **повторным объявлением** и т.д. Поэтому современный JS использует `let` и `const`.

### Повторное объявление переменных с `var`

- С `let` повторное объявление → **`SyntaxError`**.
- С `var` — **разрешено**.

```javascript
// Uncaught SyntaxError: Identifier 'num' has already been declared
let num = 19;
let num = 18;

var myNum = 5;
var myNum = 10; // Это допустимо, ошибки нет

console.log(myNum); // 10
```

### `var` и область видимости

Переменные, объявленные через `var` **внутри блока** (`if`, `for`), **доступны снаружи** блока.

```javascript
if (true) {
  var num = 5;
}
console.log(num); // 5
```

### Hoisting (поднятие)

**Определение:** hoisting — это поведение JavaScript по умолчанию, при котором **объявления** переменных и функций **поднимаются** в начало своей области видимости во время **фазы компиляции**, до выполнения кода.

**`var`:** поднимается **только объявление**, без значения.

```javascript
console.log(num); // undefined
var num = 5;
console.log(num); // 5
```

**Function declaration:** поднимается **и имя, и тело**. Можно **вызывать до объявления**.

```javascript
sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

**`let` и `const`:** поднимаются, но **не инициализируются**. Доступ до объявления **запрещён** — это **«временная мёртвая зона»** (temporal dead zone).

```javascript
console.log(num); // ReferenceError
let num = 10;
```

## Модули: импорт, экспорт

**Модуль** — это **самодостаточная единица кода**, которая инкапсулирует связанные функции, классы или переменные. Создаётся в **отдельном файле**.

**Экспорт:** чтобы сделать переменные/функции/классы **доступными** другим частям приложения, их нужно **явно экспортировать** через `export`. Бывает **именованный** и **default**.

**Импорт:** чтобы использовать экспортированное — **импортировать** через `import`. Бывает **именованный**, **default** и **namespace**.

```javascript
// В файле math.js экспортируем функции:

// Именованный экспорт
export function add(num1, num2) {
  return num1 + num2;
}

// Default экспорт
export default function subtract(num1, num2) {
  return num1 - num2;
}
```

```javascript
// В другом файле импортируем из math.js

// Именованный импорт — импортирует функцию add.
// Имя должно ТОЧНО совпадать с экспортированным.
import { add } from './math.js';

// Default импорт — импортирует subtract.
// Имя может быть любым.
import subtractFunc from './math.js';

// Namespace импорт — импортирует ВСЁ из файла.
import * as Math from './math.js';

console.log(add(5, 3));            // 8
console.log(subtractFunc(5, 3));   // 2
console.log(Math.add(5, 3));       // 8
console.log(Math.subtract(5, 3));  // 2
```