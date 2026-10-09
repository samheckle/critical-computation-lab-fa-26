# Week 07: 10/9/2026
## Agenda

1. Housekeeping
2. Share Assignment #4 [Part 2]
3. Tutorial: Repetition and Loops
4. Assignment #5 [Part 1]
5. Extra Review Materials
## Housekeeping

1. Attendance
2. Upcoming assignments: #5 Part 2, #6 Part 1
	1. Please make sure to reply to the associated discussion posts with the completed work.

## Share Assignment #4 [Part 2]

Anything need to be added to our [critique ground rules](https://cryptpad.fr/doc/#/2/doc/edit/B3C3-Z+7rBZl0vERc2Z628v+/)?

- In groups of 3, share your work, following our [critique structure](https://github.com/samheckle/critical-computation-lab-fa-26/tree/main/class_03#structure-of-critique) for ~15 minutes
- After you are done sharing, pick a person from your group to share their project with the class. These should **not** be the same people who shared previously (Andrea, Ray, Lena, Luzie, Nismah, Alice)
  
## Tutorial: Repetition and Loops

### In Class 7 Practice 1

Begin by making a new sketch titled "In Class 7 Practice 1".

- Create 4 columns
- With an if-statement, make each individual column turn red when you hover over it. Each column should _not_ have a fill until they are hovered. They can either have `noFill()` or a fill of white.

### Identifying Patterns

With your sketch you just made, what pattern are we seeing? How can we mathematically relate each rectangle with one another?

### Coding Glossary: Loops

<table>
<tbody>
<tr><td>loop</td><td>code that repeats the content inside `{}`. the `draw()` is a loop that already exists for us.</td></tr>
</tbody>
</table>

### While Loop

A `while()` loop is very similar to an `if()` statement. They follow similar syntax that use `()` and `{}`.

When we build out an `if()` statement, we put the conditional expression inside the `()` and the code that is locked in the `{}`. A `while()` loop is the same.

```js
while(conditional expression){
    // loop something
}
```

But, there are some extra steps in order to get the loop functional.

1. Step 1: The first thing we want is to declare a number that will control the loop and determine _when the loop stops_. This is just a normal variable.

```js
let iterator = 0;
```

2. Step 2: Next, we determine how many times our loop wants to execute using our new variable and a conditional expression. Once this conditional becomes `false`, the loop stops.

```js
iterator < 10;
```

This means our loop will iterate 9 times, starting at 0. This conditional is what goes inside the `()` of our `while()`

```js
while (iterator < 10) {}
```

3. Step 3: We need to change our variable inside our loop, meaning inside the `{}`. This is just like a variable changing in the draw, where it increments once it hits the bottom (or wherever the variable is located).

```js
while (iterator < 10) {
	iterator += 1;
}
```

### In Class 7 Practice 2

Duplicate / Fork your "In Class 7 Practice 1" and rename it to "In Class 7 Practice 2"

- Re-write your code using `while` loops.

### For Loop

A `for()` loop is a shorthand way of writing a `while()` loop. Instead of having 3 separate lines of code (declaring iterator, writing conditional, incrementing iterator), we do it all inside the `()` of the `for()`, all separated by a `;`.

To write

```js
let iterator = 0;
while (iterator < 10) {
	iterator += 1;
}
```

As a `for()` loop, we combine all these lines into one.

```js
for (let iterator = 0; iterator < 10; iterator += 1) {
	// do something 10 times
}
```

### In Class 7 Practice 3

Duplicate / Fork your "In Class 7 Practice 2" and rename it to "In Class 7 Practice 3"

- Re-write your code using `for` loops.

---

## Extra Review Materials

- Coding Train [4.1: While and For Loops](https://www.youtube.com/watch?v=cnRD9o6odjk)
- Coding Train [4.2: Nested Loops](https://www.youtube.com/watch?v=1c1_TMdf8b8)
- p5.js Tutorial [Repeating with Loops](https://p5js.org/tutorials/repeating-with-loops/)
