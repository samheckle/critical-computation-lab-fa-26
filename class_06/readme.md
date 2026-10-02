# Week 06: 10/2/2026
## Agenda

1. Housekeeping
2. Share Assignment #3 [Part 2]
3. Repetition and Functions
4. Code Order
5. Assignment #4 [Part 1]
6. References, Useful Links, and Demos

## Housekeeping

1. Grab a snack
2. Created the [anonymous feedback form](https://forms.gle/R5eApKu6CwFgb2S46) for any questions/concerns/needs you may have that you would like to be addressed. 
3. Upcoming assignments: #4 Part 2, #5 Part 1
	- Please make sure to reply to the associated discussion posts with the completed work.
4. Upcoming events:
   	- Saturday 10/3 NYC Processing Community Day: [Schedule](https://www.pcd2026.nyc/) | [Free RSVP](https://www.eventbrite.com/e/processing-community-day-2026-nyc-tickets-1995608029336). If you attend, send me an email with things you learned / saw / inspired by from the day and I will give extra credit. I am also running a workshop at 4pm so come say hi.
   	- Monday 10/5 Volvox Labs Field Trip : [Free RSVP](https://narwhalnation.newschool.edu/event/12776851)

## Share Assignment #3 [Part 2]

Anything need to be added to our [critique ground rules](https://cryptpad.fr/doc/#/2/doc/edit/B3C3-Z+7rBZl0vERc2Z628v+/)?

- In groups of 3, share your work, following our [critique structure](https://github.com/samheckle/critical-computation-lab-fa-26/tree/main/class_03#structure-of-critique) for ~15 minutes
- After you are done sharing, pick a person from your group to share their project with the class. These should **not** be the same people who shared previously (Andrea, Ray, Lena)
## Repetition and Functions

### Coding Glossary: Review

| Review      |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| function    | an instruction or command, may or may not have **_parameters_**, also known as _method_ |
| parameter   | value that is passed into the `()` of the function, also known as _arguments_           |
| declaration | uses the keyword `let` to give a variable a name                                        |
| scope       | where variables exist. can be global or local inside `{}`                               |

Declarations can also be used for functions, using the keyword `function`

Functions need to be written **_outside_** the `setup()` and the `draw()`

We have already seen an example of this:

```js
function setup() {
  createCanvas(400, 400);
}
function draw() {
	// loops once every frame
}
```

`setup()` and `draw()` are functions that use the function keyword. We have also seen:

```js
function mousePressed() {
  // do something when the mouse is clicked
}
```

### Custom Functions

#### Coding Glossary: Custom Functions

| Generic Definitions |                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| declaration         | using the keyword `function`, names and creates a function                                                           |
| call                | to use a function elsewhere in the code                                                                              |
| passing arguments   | a custom function accepting inputs in their headers, which creates a local placeholder for the data that is received |
| return              | a function that has an output value, denoted by `return`                                                             |

So far, we have used functions that have only been defined by p5. Even though we are declaring and using `setup()`, `draw()`, and `mousePressed()`, they aren't something we are specifically defining. 

![function declaration](https://p5js.org/_astro/function.Cr0jXLmD_1bdbgx.png)

We can [create our own functions](https://p5js.org/reference/p5/function/) too. These still need to be written **_after_** the `draw()`.

```js
function myCoolNewFunction() {}
```

We can also make custom parameters:

```js
function myCoolNewFunction(myCoolParameter) {
  print(myCoolParameter);
}
```

#### Why make custom functions?

1. Code can be duplicated more easily.
2. It makes our code more readable and organized, just like variables.
   - if you notice you are doing the same section of code multiple times, it can probably be a function!

![functions vs var](https://github.com/samheckle/code-toolkit-fa-25/raw/main/images/week_04/functionvar.png)

### `return`

Inside a function, the parameters we create are *local* only to the function.

```js
function myCoolFunction(param1, param2){
	// param1 and param2 only exist inside of the function block
	// meaning: {}
}
```

If we wanted to access the values, or the result of those values, we use `return`.

For example, say we had a function that calculated the sum:

```js
function sum(add1, add2){
	add1+add2 // this expression doesn't do anything with its evaluation
}
```

We *could* make a global variable:

```js
let totalSum

function sum(add1, add2){
	totalSum = add1 + add2
}
```

But this keeps *overriding* the `totalSum` variable. Instead, we can use a return:

```js
function sum(add1, add2){
	return add1+add2
}
```

So that every time we call the function, we can create a variable to store the value:

```js

function setup(){
	let num1 = sum(5, 6) // num1 = 11
	let num2 = sum(10, 15) // num2 = 25
}

function sum(add1, add2){
	return add1+add2
}
```

Not that you need to know this, but this is also how the `random()` function works:

```js
function random(min, max){
	return Math.random() * max + min
}
```
## On Code Order

We have seen a lot of code, but typically it follows an order. This is the order we use for this class:

1. Global Variables
2. `setup`
3. `draw`
4. Event Functions (like `mousePressed`)
5. Helper Functions (or functions you write yourself)

### Loading Assets

In order to load assets into a sketch, we can use the keywords `async` and `await` in the `setup` function declaration.

Assets include:
- Images
- Fonts
- External Data

To upload an asset into OpenProcessing:
1. Open the Files tab (Settings → Files)
2. Drag the file from your computer to the Files tab

In code, each asset requires 3 steps:

1. A global variable to store the reference to the asset file
2. `async` in `setup` function declaration + `await` to load the asset file
3. Using the asset as needed in the code

```js
// step 1
let img

// step 2
async function setup() {
  	img = await loadImage("./my-image.png");
  	createCanvas(400, 400);
}

function draw(){
	// step 3
	image(img, 0, 0)
}
```

See [`async_await`](https://p5js.org/reference/p5/async_await/)

---

## Assignment #4 [Part 1]

Form groups of 3 to exchange body parts for your exquisite corpse, and begin work on coding it out. 
## References, Useful Links, and Demos

If you struggled with any of the material this week, please review these coding train videos!

- [5.1 - function basics](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/5-functions/1-basics)
- [5.2 - parameters and arguments](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/5-functions/2-arguments)
- p5 Tutorial: [Organizing Code through Functions](https://p5js.org/tutorials/organizing-code-with-functions/) | [Loading and Displaying Fonts](https://p5js.org/tutorials/loading-and-selecting-fonts/)
