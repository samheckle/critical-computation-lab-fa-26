# Week 09: 10/22/2026
## Agenda

1. Housekeeping
2. Share Assignment #6 [Part 2]
3. Reading Discussion
4. Tutorial: Objects and Classes
5. Assignment #7 [Part 1]
6. Extra Review Materials
## Housekeeping

1. Attendance
2. Questions from lecture?
3. Upcoming assignment: #7 Part 2

## Share Assignment #6 [Part 2]

Anything need to be added to our [critique ground rules](https://cryptpad.fr/doc/#/2/doc/edit/B3C3-Z+7rBZl0vERc2Z628v+/)?

- In groups of 3, share your work, following our [critique structure](https://github.com/samheckle/critical-computation-lab-fa-26/tree/main/class_03#structure-of-critique) for ~15 minutes.

## Tutorial: Objects

## Data Structures Part 2: Objects

An object is a data structure similar to an array, but instead of using `[]`, it uses `{}`. It also is useful when we need unordered data, *or we need to store multiple data types in one variable.*

| New terms |                                                                                        |
| --------- | -------------------------------------------------------------------------------------- |
| object    | data structure that holds variables using key-value pairs, uses `{}`, it is unordered. |
| key       | the `property` we access when we want to retrieve a piece of data from the object.     |
| value     | similar to the `element` in an array, the data that is stored                          |
### Declaring an **_Object_**

An Object is a variable type. Objects are an *unordered list* of data written with curly braces (`{}`). 

```js
let myNewObject = {};
```

### Initializing an array with **_Values_**

The main difference between objects and arrays is that arrays can only store *one* data type, but objects can hold multiple ones. 

```js
let myPet = {
	name: "Oreo",
	age: 13,
	isCat: true
}
```

### Retrieving a specific **_Value_** with the **_Property_**

Unlike arrays, objects are unordered. But, we can access the named property to retrieve which piece of data we want. 

To access values in an object, we use the object name + `.` + property name

```js
let myPet = {
	name: "Oreo",
	age: 13,
	isCat: true
}

// object name + . + property name
// myPet.name
// myPet.age
// myPet.isCat
print(`${myPet.name}`) // prints "Oreo"
```

### Unique Attributes of an Object

We can add new `properties` by simply using a new property name. 

```js
let triangle = {
    a: 10,
    b: 15
}
triangle.c = 20
// this automatically adds .c as an accessible property
// the new object is {a:10, b:15, c:20}
```
### Objects and Loops

Just like with arrays, objects also have a special loop.

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

## Tutorial: Classes

| New terms   |                                                                                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| class       | a custom data structure that can hold a variety of combined data. usually used as a blueprint for creating multiple similar objects.<br><br>it is different from objects because we can add functions!<br><br>but basically a class is an object with functions |
| instance    | using a class template to make a new object. Uses the keyword `new`                                                                                                                                                                                             |
| constructor | a function that is called by default every time you make an instance of a class                                                                                                                                                                                 |
| `this`      | a keyword to reference a property of an object                                                                                                                                                                                                                  |
### Declaring a **Class**

A Class is a templated object. This allows us to create objects that follow a specific template. 

```js
class MyNewClass {

}
```

### Making a **constructor**

A function that is called by default every time you make an instance of a class

```js
class MyNewClass {
	constructor(){
	
	}
}
```

### Creating an instance of a class

Classes are like stamps for objects. 

```js
function setup(){
	let myClassInstance = new MyNewClass()
}

class MyNewClass {
	constructor(){
	
	}
}
```

### Making properties

Now, `myClassInstance` is an object that has no data inside of it. If I want it to have some values, I need to use the `this` keyword inside of the class delcaration.

```js
class MyNewClass {
	constructor(){
		this.x = 50
		this.y = 100
	}
}
```

When I create an instance of the class, because I used the `this` keyword, we can access them just like properties of the object.

```js
let myClassInstance = new MyNewClass()

myClassInstance.x
myClassInstance.y
```

I could also add parameters to my constructor:

```js
class MyNewClass {
	constructor(xPos, yPos){
		this.x = xPos
		this.y = yPos
		this.size = 100
	}
}
```

And pass in parameters when I declare an instance:

```js
let myClassInstance = new MyNewClass(10, 20)

myClassInstance.x    // will print 10
myClassInstance.y    // will print 20
myClassInstance.size // will print 100

```

### Making methods

Classes are also special because they allow us to put functions *inside* the object.

```js
class MyNewClass {
	constructor(xPos, yPos){
		this.x = xPos
		this.y = yPos
		this.size = 100
	}
	move(){
		this.x++
	}
}
```

So in our instance of our class, we can use the move function to allow the object to move.

```js
let myClassInstance = new MyNewClass(10, 20)

myClassInstance.move()

```

The benefit of using classes on top of objects is that we can add all this extra layer of modularity. But it is to also contextualize this `new` or `this` keywords.

## Extra Review Materials

- Coding Train [7.6: Object Communication Part 1](https://youtu.be/W1-ej3Wu5zg?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- Coding Train [7.7: Object Communication Part 2](https://youtu.be/5Q9cA0REztY?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- Coding Train [7.8: Objects and Images](https://youtu.be/i2C1hrJMwz0?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- p5.js [Object documentation](https://p5js.org/reference/p5/object/)
- p5.js [`class` documentation](https://p5js.org/reference/p5/class/)
