# ☕ Coffee-Themed String Library

Welcome to caffeinated-strings, a JavaScript library with a coffee-inspired twist. This library is built with TypeScript and provides a collection of custom-built functions for string manipulation, all named after coffee-related terms. It's perfect for developers who love both coffee and clean code!

## 📖 Table of Contents

- [Functions](#functions)
- [Usage](#usage)

## 📚 Functions

| Traditional Name | Coffee Name    | Description                                                                                       |
| ---------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| `.charAt()`      | `sipAt`        | Returns the character of a string at given index (like taking a single sip of coffee).            |
| `.includes()`    | `hasMilk`      | Returns true if given string is found within this string and false if not.                        |
| `.length`        | `brewLength`   | Returns the length of a string (how "long" the brew is).                                          |
| `=`              | `pourCoffee`   | Copies one string to another (like pouring coffee into a new cup).                                |
| `===, >, <`      | `compareBeans` | Compares two strings (like comparing coffee beans for quality).                                   |
| `.indexOf()`     | `findFirstSip` | Finds the first occurrence of a **character** in a string (like the first sip of coffee).         |
| `.indexOf()`     | `findFlavor`   | Finds the first occurrence of a **substring** inside a string (like detecting flavors in coffee). |
| `.toUpperCase()` | `froth`        | Transforms the string to uppercase (like frothing the milk to create a creamy top).               |

## 🔧 Usage

1. `sipAt(str, index)`
   Returns the character in a string at given index.

```js
let brew = "coffee";
console.log(sipAt(brew, 2)); // f
```

2. `hasMilk(str, word)`
   Returns true if word is found within string, and false if not.

```js
let sentence = "coffee tastes good with milk";
let word = "good";
console.log(hasMilk(sentence, word)); // true
```

3. `brewLength(str)`
   Returns the length of a string (how "long" the brew is).

```js
let brew = "coffee";
console.log(brewLength(brew)); // 6
```

4. `pourCoffee(str)`
   Copies one string to another (like pouring coffee into a new cup).

```js
let original = "latte";
let cup = pourCoffee(original);
console.log(cup); // "latte"
```

5. `compareBeans(str1, str2)`
   Compares two strings (like comparing coffee beans for quality). Returns a string:

- "0" if the strings are identical.
- ">0" if `str1` is lexicographically greater.
- "<0" if `str1` is lexicographically less.

```js
let result = compareBeans("espresso", "latte");
console.log(result); // >0 ('e' > 'l')
```

6. `findFirstSip(str, char)`
   Finds the first occurrence of a character in a string (like the first sip of coffee). Returns a substring from the first occurrence of the character to the end.

```js
let coffee = "macchiato";
console.log(findFirstSip(coffee, "c")); // "cchiato"
```

7. `findFlavor(str, substr)`
   Finds a substring inside a string (like detecting flavors in coffee). Returns the substring starting from the first match.

```js
let drink = "cappuccino";
console.log(findFlavor(drink, "cc")); // "ccuccino"
```

8. `froth(str)`
   Transforms the string to uppercase (like frothing the milk to create a creamy top).

```js
let drink = "espresso";
console.log(froth(drink)); // "ESPRESSO"
```
