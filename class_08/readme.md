# Week 08: 10/15/2026
## Agenda

1. Housekeeping
2. Share Assignment #5 [Part 2]
3. Tutorial: Arrays
4. Reading Discussion
5. Assignment #6 [Part 1]
6. Extra Review Materials
## Housekeeping

1. Attendance
2. Questions from lecture?
3. Upcoming assignments: #6 Part 2, #7 Part 1
## Share Assignment #5 [Part 2]

Anything need to be added to our [critique ground rules](https://cryptpad.fr/doc/#/2/doc/edit/B3C3-Z+7rBZl0vERc2Z628v+/)?

- In groups of 3, share your work, following our [critique structure](https://github.com/samheckle/critical-computation-lab-fa-26/tree/main/class_03#structure-of-critique) for ~15 minutes.
## Tutorial: Arrays

### Coding Glossary: Arrays

| Review         |                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------- |
| variable       | name for a placeholder piece of data                                                     |
| declaration    | using `let` to assign a value to a variable or using `function` to create a new function |
| variable types | `boolean`, `number`, `string` (words)                                                    |

| New terms |                                                                             |
| --------- | --------------------------------------------------------------------------- |
| array     | data structure that holds a _series_ of variables, uses `[]`, order matters |
| element   | one piece of array data                                                     |
| index     | location of a particular element, starting at index of 0                    |
| property  | a value we are accessing, using the `.` syntax                              |

### Declaring an **_Array_**

Array is a variable type. Arrays are a *list* of data written with square brackets (`[]`). 

Arrays are living variables, so you can change the value of them over time.

```js
let myNewArray = [];
```

### Initializing an array with **_Elements_**

An element is an item that exists inside of an array. 

```js
let myNewArray = [10, 15, 20];
```

### Retrieving a specific **_Element_** with the **_Index_**

The index is the location of the data we want to grab. The location is automatically assigned because of the `array`, since it is a _series_ of data.

Arrays start counting 0 and increases by one for every element. You can think of this as "How far is the element I am trying to get *away* from the starting element".

To access elements in an array, we use the array name + `[]`

```js
let myNewArray = [10, 15, 20];

myNewArray[0]; // 10
myNewArray[1]; // 15
myNewArray[2]; // 20
```

### Arrays are like tables

<table>
<tbody>
<tr><td>index</td><td>0</td><td>1</td><td>2</td><td>3</td></tr>
<tr><td>value</td><td>"this"</td><td>"is"</td><td>"a"</td><td>"sentence"</td></tr>
</tbody>
</table>

```js
let data = ['this', 'is', 'a', 'sentence'];
```

In code, we typically only want an array to hold 1 type of data. So it should be _either_ a list of numbers, booleans, or strings.

### Array properties

Properties are variables that are unique to an object (in this instance an array). We again use the `.` to reference a specific property we want to access.

Arrays have a property called [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length). This gives us how many items exist in the array.

```js
let myArray = [2, 4, 6]; // 3 items total
myArray.length; // this is 3
```

This counts the number of **_elements_** that exist inside the array.

### Adding to Arrays

We can change the value of an element in the array by reassigning it, like we do with normal variables.

```js
let teachers = ['Sam', 'Patrick', 'Rory'];
teachers[1] = 'Sam';
// override the old value, reassign to new
// teachers is now ["Sam", "Sam", "Rory"]
```

If we use an index (location), that does not exist yet, it will add empty `undefined` items in the series until it gets to that location.

```js
let animals = ['Cat', 'Dog']; // animals has elements at 0 and 1
animals[4] = 'Giraffe';
// animals is now ["Cat", "Dog", undefined, undefined, "Giraffe"]
```

This isn't the best way to add to an array, because we don't want to accidentally create empty variables.

### Unique Attributes of an Array

Arrays have special functionality, along with their properties, that allow us to enact actions on them. These actions are *functions*, but they need to *reference the array they will be acted on*. 

#### `.push()`

`push()` is a function we have seen inside of p5, but [`.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) is a function that exists in an array. We need to use the name of our array, and the `.` to use the specific function.

```js
let myArray = [2, 4, 6];
myArray.push(8);
// this automatically adds 8 to the end of the array
// the new array is [2, 4, 6, 8]
```

This adds an element to the end of the array.

**Note**: This is different from p5's `push()` method. p5 has redefined `push()`/`pop()` to store states. `.push()` has different syntax and _must_ be used _on_ an array. So anytime we see the prepending `.`, it likely means it needs to be used on an object.

#### `.slice()`

To remove elements in an array, we use [`.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice). 

```js
// splice(start, deleteCount) 
// it takes where you want to start and how many elements you want to remove
let evenNumbers = [2, 4, 6, 8, 10] 
evenNumbers.splice(3, 1) // removes 8
// the new array is [2, 4, 6, 10]
```

### Arrays and Loops

Typically it is very cumbersome to access every element inside of a loop every time. Given an array:

```js
let pets = ['dog', 'cat', 'hamster', 'giraffe', 'horse'];
```

If we want to use or reference any one of these we would need to do something like:

```js
print(pets[0]); // prints: dog
print(pets[1]); // prints: cat
print(pets[2]); // prints: hamster
print(pets[3]); // prints: giraffe
print(pets[4]); // prints: horse
```

But, we already see a pattern of a number increasing every time. So, using the attributes we know so far, we can go through the loop. We already know our end condition, because it is the number of elements in our loop. So we could write:

```js
for (let count = 0; count < 5; count++) {
	print(pets[count]);
}
```

But, our end condition might be malleable, or we might add another pet later on. So we can use the property `.length` instead of hard-coded 5.

```js
// instead of count < 5, make it dynamic using pets.length
for (let count = 0; count < pets.length; count++) {
	print(pets[count]);
}
```

If we wanted to make it clearer, we could declare a local variable:

```js
for (let count = 0; count < pets.length; count++) {
	// setting a local variable in case we want to use pets[count] again
	let currentPet = pets[count];
	print(currentPet);
}
```

There is a shorthand for this! If we don't need to know the number, we can automatically create and assign `currentPet`:

```js
// shorthand for above example
for (let currentPet of pets) {
	print(currentPet);
}
```

This is a special loop _just for arrays_, that is shorthand for assigning a variable to the index of the current iteration.

### Extra: `pixels`

The [pixel array](https://p5js.org/reference/p5/pixels/) is a array containing all the pixel data of the canvas or of a provided image.

When an image is rendered on a screen, it has individual lights that actually render the full image:

![pixels](https://github.com/samheckle/sva-creative-code-sp-26/blob/main/pixels1.png?raw=true)

We can look at the actual values of them:

![pixels with values](https://github.com/samheckle/sva-creative-code-sp-26/blob/main/pixels3.png?raw=true)

And what p5.js does is allow us to access those individual values for *every pixel*. When it is processed by the pixel array, it processes the image line by line (left-to-right, top-to-bottom). If we were to translate the 9x9 grid of pixels to a flattened array, it would look like:

```js
// this is a huge array!
[255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 255, 0, 255, 255, 0, 0, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 255, 0, 255] 

// adding comments to separate out which pixel is which but it is all one single array, but it is still one array
[255, 0, 0, 255, // pixel 1, red
0, 0, 255, 255,  // pixel 2, green
255, 0, 0, 255,  // pixel 3, red
0, 255, 0, 255,  // pixel 4, green
255, 0, 0, 255,  // pixel 5, red
0,0,255,255,     // pixel 6, blue
0,0,255,255,     // pixel 7, blue
0,0,255,255,     // pixel 8, blue
0,255,0,255]     // pixel 9, green
```

#### Why is this useful?

We can do a lot of cool stuff with pixel manipulation!

- Coding Train [Pixels Track](https://thecodingtrain.com/tracks/pixels)
- Ellen Nickles [Pixel Zoom](https://editor.p5js.org/enickles/sketches/eJAm5i7KZ)
- [p1xelfool, 6 + 1 * 11 (2022)](https://feralfile.com/exhibitions/series/18-gdw?viewMode=Grid)
- August's [Really Helpful Workshop](https://github.com/itpresidents/icm-help-sessions-2020/blob/master/session-06/session-06-example.md)
- [The Constructed Self](https://www.karennavarroph.com/the-constructed-self) by Karen Navarro
- [The Moment We Meet](https://www.youtube.com/watch?v=AvHYZO3yKD4) by Hsin-Chien Huang
## Reading Discussion

From the [Dear Data website](https://data-feminism.mitpress.mit.edu/), which article(s) did you read? 

In [this doc](https://docs.google.com/document/d/1OpSK7eMQeEzaXXd7IfUH9tWbRwMji9HCsKlUAaB1JE0/edit?usp=sharing), get into groups based on which chapter you read and discuss.

## Assignment #6 [Part 1]

Present your idea & data to your group, and translate your numbered list into an array during class.

## Extra Review Materials

### Review Videos

- Coding Train[7.1 What is an array?](https://www.youtube.com/watch?v=VIQoUghHSxU)
- Coding Train [7.2 Arrays and loops](https://www.youtube.com/watch?v=RXWO3mFuW-I)
- Coding Train [11.3 The Pixel Array](https://thecodingtrain.com/tracks/pixels/more-p5/pixel-array)
- p5.js Reference [Array](https://p5js.org/reference/p5/Array/)

### Review Documentation (these are textbook definitions)

- MDN [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops with arrays
- MDN [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)