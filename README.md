# Coffee-Themed String Library

Welcome to caffeinated-strings, a JavaScript library with a coffee-inspired twist. This library is built with TypeScript and provides a collection of custom-built functions for string manipulation, all named after coffee-related terms. It's perfect for developers who love both coffee and clean code!

## 📚 Functions

| Traditional Name | Coffee Name    | Description                                                                                       |
| ---------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| `.length`        | `brewLength`   | Returns the length of a string (how "long" the brew is).                                          |
| `=`              | `pourCoffee`   | Copies one string to another (like pouring coffee into a new cup).                                |
| `===, >, <`      | `compareBeans` | Compares two strings (like comparing coffee beans for quality).                                   |
| `.indexOf()`     | `findFirstSip` | Finds the first occurrence of a **character** in a string (like the first sip of coffee).         |
| `.indexOf()`     | `findFlavor`   | Finds the first occurrence of a **substring** inside a string (like detecting flavors in coffee). |
| `.split()`       | `stirAndServe` | Splits a string into tokens (like stirring coffee and separating ingredients).                    |
| `.toUpperCase()` | `froth`        | Transforms the string to uppercase (like frothing the milk to create a creamy top).               |

## 🔧 Usage

1. `brewLength(str)`
   Returns the length of a string (how "long" the brew is).

```js
let brew = "coffee";
console.log(brewLength(brew)); // 6
```

2. `pourCoffee(str)`
   Copies one string to another (like pouring coffee into a new cup).

```js
let original = "latte";
let cup = pourCoffee(original);
console.log(cup); // "latte"
```

3. `compareBeans(str1, str2)`
   Compares two strings (like comparing coffee beans for quality). Returns a string:

- "0" if the strings are identical.
- ">0" if `str1` is lexicographically greater.
- "<0" if `str1` is lexicographically less.

```js
let result = compareBeans("espresso", "latte");
console.log(result); // >0 ('e' > 'l')
```

4. `findFirstSip(str, char)`
   Finds the first occurrence of a character in a string (like the first sip of coffee). Returns a substring from the first occurrence of the character to the end.

```js
let coffee = "macchiato";
console.log(findFirstSip(coffee, "c")); // "cchiato"
```

5. `findFlavor(str, substr)`
   Finds a substring inside a string (like detecting flavors in coffee). Returns the substring starting from the first match.

```js
let drink = "cappuccino";
console.log(findFlavor(drink, "cc")); // "ccuccino"
```

6. `stirAndServe(str, delimiter)`
   Splits a string into tokens (like stirring coffee and separating ingredients). Returns an array of substrings.

```js
let drink = "americano";
let tokens = stirAndServe(drink, "a");
console.log(tokens); // ["", "mericano"]
```
