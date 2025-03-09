# ☕ Coffee-Themed String Library

Welcome to caffeinated-strings, a JavaScript library with a coffee-inspired twist. This library is built with TypeScript and provides a collection of custom-built functions for string manipulation, all named after coffee-related terms. It's perfect for developers who love both coffee and clean code!

## 📖 Table of Contents

- [Installation](#installation)
- [Functions](#functions)
- [Usage](#usage)

## 📦 Installation

To install caffeinated-strings, run the following command:

```bash
   npm install caffeinated-strings
```

## 📚 Functions

| Traditional Name | Coffee Name    | Description                                                                                                                                       |
| ---------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.charAt()`      | `sipAt`        | Returns the character of a string at given index (like taking a single sip of coffee).                                                            |
| `.concat()`      | `addMilk`      | Concatenates a string to another separated with delimiter (like pouring milk into a cup of coffee).                                               |
| `.includes()`    | `hasMilk`      | Returns true if given string is found within this string and false if not (like checking if coffee has milk or not).                              |
| `.length`        | `brewLength`   | Returns the length of a string (how "long" the brew is).                                                                                          |
| `=`              | `pourCoffee`   | Copies one string to another (like pouring coffee into a new cup).                                                                                |
| `===, >, <`      | `compareBeans` | Compares two strings (like comparing coffee beans for quality).                                                                                   |
| `.indexOf()`     | `findFirstSip` | Finds the first occurrence of a **character** in a string (like the first sip of coffee).                                                         |
| `.indexOf()`     | `findFlavor`   | Finds the first occurrence of a **substring** inside a string (like detecting flavors in coffee).                                                 |
| `.repeat()`      | `refillCup`    | Constructs a new string which contains a specified number of copies of the input string (like refilling a coffee cup a specific amount of times). |
| `.toLowerCase()` | `coolDown`     | Transforms the string to lowercase (like cooling down a cup of coffee).                                                                           |
| `.toUpperCase()` | `froth`        | Transforms the string to uppercase (like frothing the milk to create a creamy top).                                                               |
| `.trim()`        | `sip`          | Removes whitespace from both ends of string (like sipping away the excess on top).                                                                |

## 🔧 Usage

Once installed, you can import and use the functions in your JavaScript or TypeScript projects:

1. `sipAt(str, index)`
   Finds the character in a string at given index (like taking a single sip of coffee).
   Returns the character as `string`:

```js
let brew = "coffee";
console.log(sipAt(brew, 2)); // f
```

2. `addMilk(str1, str2, delimiter)`
   Concatenates a string to another separated with delimiter (like pouring milk into a cup of coffee).
   Returns a `string`:

```js
let brew = "coffee";
let milk = "tastes very good with milk";
let delimiter = ", ";
console.log(addMilk(brew, milk, delimiter)); // coffee, tastes very good with milk
```

3. `hasMilk(str, word)`
   Checks if word is found within string (like checking if coffee has milk or not).
   Returns `true` if word is in string, `false` if not:

```js
let sentence = "coffee tastes good with milk";
let word = "good";
console.log(hasMilk(sentence, word)); // true
```

4. `brewLength(str)`
   Calculates the length of the input string (how "long" the brew is).
   Returns the length as `number`:

```js
let brew = "coffee";
console.log(brewLength(brew)); // 6
```

5. `pourCoffee(str)`
   Copies one string to another (like pouring coffee into a new cup).
   Returns the copy as `string`:

```js
let original = "latte";
let cup = pourCoffee(original);
console.log(cup); // "latte"
```

6. `compareBeans(str1, str2)`
   Compares two strings (like comparing coffee beans for quality). Returns a `number`:

- `0` if the strings are identical.
- `1` if `str1` is lexicographically greater.
- `-1` if `str1` is lexicographically less.

```js
let result = compareBeans("espresso", "latte");
console.log(result); // 1 ('e' > 'l')
```

7. `findFirstSip(str, char)`
   Finds the first occurrence of a character in a string (like the first sip of coffee). Returns the substring from the first occurrence of the character as `string`:

```js
let coffee = "macchiato";
console.log(findFirstSip(coffee, "c")); // "cchiato"
```

8. `findFlavor(str, substr)`
   Finds a substring inside a string (like detecting flavors in coffee). Returns the substring starting from the first match as `string`:

```js
let drink = "cappuccino";
console.log(findFlavor(drink, "cc")); // "ccuccino"
```

9. `refillCup(str, count)`
   Constructs a new string with copies of input string the amount of times specified. Returns the new string concatenated together:

```js
let coffee = "cappuccino ";
console.log(refillCup(drink, 3)); // "cappuccino cappuccino cappuccino "
```

10. `coolDown(str)`
    Transforms the string to lowercase (like cooling down a cup of coffee).
    Returns the input in lowercase as `string`:

```js
let drink = "ESPRESSO";
console.log(coolDown(drink)); // "espresso"
```

11. `froth(str)`
    Transforms the string to uppercase (like frothing the milk to create a creamy top).
    Returns the input in uppercase as `string`:

```js
let drink = "espresso";
console.log(froth(drink)); // "ESPRESSO"
```

12. `sip(str)`
    Removes whitespace from both ends of the string (like sipping away the excess on top).
    Returns a new `string` without modifying the original:

```js
let drink = "   espresso is lovely!!     ";
console.log(sip(drink)); // "espresso is lovely!!"
```
