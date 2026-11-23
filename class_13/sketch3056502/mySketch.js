// GLOBALS 
// step 1: global variable to hold imgs
let allImages = []
// sounds are similar but are different file types
let sound

// set up a meta-scene tracking variable
let level = 0

// SETUP
// step 2: change the function header 
async function setup() {
	createCanvas(400, 400);
	// step 3: add our images to global array
	allImages.push(await loadImage('huh.jpg'))
	allImages.push(await loadImage('nyan.jpg'))
	allImages.push(await loadImage('what.gif'))

	// we need to import the sound library
	//		in order to load sounds
	// we need to toggle the sound library on
	// 	in the editor settings
	// https://p5js.org/reference/p5.sound/
	sound = await loadSound('hum.mp3')
	// in order to loop sound
	// 	it needs to be playing first
}

// DRAW
function draw() {
	background(100);

	// set up scene switching 
	// 		based off of my meta-scene 
	// 		tracking variable
	if(level == 0){
		let startButton = new Button(60, 200, "Start", 100, 50)
		// if i am in level 0, draw this stuff
		image(allImages[0], 0, 0)
		startButton.drawButton()
		startButton.checkClicked()
		if(startButton.clicked == true){
			level += 1
		}
	} else if(level == 1){
		sound.play()
		let goLevel2 = new Button(100, 30, "Level 2", 100, 50)
		// if i am in level 1, draw this
		image(allImages[1], 0, 0)
		goLevel2.drawButton()
		goLevel2.checkClicked()
		if(goLevel2.clicked == true){
			level += 1
		}
	} else if(level == 2){
		image(allImages[2], 0, 0)
	}
}

// EVENT

// CUSTOM

// CLASS GOES AT THE SUPER BOTTOM
class Button{
	// mandatory function
	constructor(xPosition, yPosition, txt, w, h){
		// save the values of the params as 
		// 	properties in my templated obj
		this.x = xPosition
		this.y = yPosition
		this.text = txt
		this.w = w
		this.h = h
	}
	drawButton(){
		push()
		rectMode(CENTER)
		rect(this.x, this.y, this.w, this.h)
		textAlign(CENTER)
		text(this.text, this.x, this.y)
		pop()
	}
	checkClicked(){
		let minX = this.x - this.w / 2
		let minY = this.y - this.h / 2
		let maxX = this.x + this.w / 2
		let maxY = this.y + this.h / 2
		if(minX < mouseX && 
		   mouseX < maxX && 
		   minY < mouseY && 
		   mouseY < maxY &&
		   mouseIsPressed
		  ){
				// either return true on the function
				// set a property that we check true in the draw
				this.clicked = true
		   } else{
				this.clicked = false
		   }
	}
}




