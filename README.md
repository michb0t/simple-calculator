# A Simple calculator app following Kevin Powell & Zell Liew's Tutorial

![source](https://www.youtube.com/watch?v=f0SG2j6d-Kg&ab_channel=KevinPowell)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Create a calculator using HTML, CSS and Javascript
- Add simple operator logic to calculate input

### Screenshot

![image](https://user-images.githubusercontent.com/81781093/135242360-6cc1248e-d55b-4878-9bff-8041cac03687.png)
![image](https://user-images.githubusercontent.com/81781093/135242419-209e5bc9-5729-4ec7-9dc0-1bf2906d64f4.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/michb0t/simple-calculator)
- Live Site URL: [Add live site URL here](https://michb0t.github.io/simple-calculator/)

## My process

### Built with

- HTML
- CSS
- Vanilla Javascript

### What I learned

Refreshing way to style using the Grid layout (i generally use flex) and applying simple javascript for calculation logic.

```html - using data-key and data-type attributes rather than classes. 
<button data-key="plus" data-type="operator">+</button>
<button data-type="number" class="one">1</button>
```

```css

[data-type="operator"]:active, 
[data-type="number"]:active, [data-type="clear"]:active {
    background-color: var(--grey-200)
}


.calculator_keys {
    background-color:var(--grey-200);
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(4, auto);
    grid-template-areas: 
    ". . . ."
    "seven eight nine equal"
    "four five six equal"
    "one two three equal"
    "zero decimal clear equal"
}


```
```js

if ( type === "operator") {
    //perform operation
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
    operatorKeys.forEach(el => el.dataset.state = '')
    key.dataset.state = "selected"
    calculator.dataset.firstNumber = displayValue
    calculator.dataset.operator = key.dataset.key
}
```

## Author

- Website - [Michelle Pham](https://www.linkedin.com/in/michelle-pham-2a766b101/)
- Twitter - [@michbot7](https://twitter.com/michbot7)


## Acknowledgments

Special thanks to Kevin Powell and Zell Liew! 
Twitter: https://twitter.com/zellwk
Twitter: https://twitter.com/KevinJPowell
Codepen: https://codepen.io/kevinpowell/
