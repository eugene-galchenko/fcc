# JavaScript Loops Review

## Working with Loops

### `for` Loop

Используется, чтобы **повторить блок кода определённое число раз**. Состоит из трёх частей:

- **Инициализация** — выполняется **один раз** перед началом цикла. Обычно задаёт счётчик.
- **Условие** — проверяется **перед каждой итерацией**. Если `true` — тело цикла выполняется. Если `false` — цикл останавливается.
- **Инкремент/декремент** — выполняется **после каждой итерации**. Обычно меняет счётчик.

**Итерация** — один проход через цикл.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### `for...of` Loop

Используется, когда нужно пройти по **значениям** итерируемого объекта. Примеры итерируемых: массивы, строки.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
```

### `for...in` Loop

Лучше всего подходит для прохода по **свойствам объекта**. Перебирает все перечисляемые свойства, включая унаследованные и нечисловые.

```javascript
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
```

### `while` Loop

Выполняет блок кода, **пока условие истинно**.

```javascript
let i = 5;

while (i > 0) {
  console.log(i);
  i--;
}
```

### `do...while` Loop

Выполняет блок кода **как минимум один раз**, прежде чем проверить условие.

```javascript
let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (Number(userInput) < 1 || Number(userInput) > 10);

alert("You entered a valid number!");
```

## `break` и `continue`

- **`break`** — выход из цикла **досрочно**.
- **`continue`** — пропуск **текущей** итерации, переход к следующей.

### Пример `break`

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, 4
```

### Пример `continue`

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
```