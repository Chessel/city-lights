//window.onload = function start() {
//   changeLights();
//}

var images = ['images/dark.png',
              'images/light3.png',
              'images/light2.png',
              'images/light1.png'];

var bridgeMask =
[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
 [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
 [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

// Width of each frame
var frameWidth = 40;

// Height of each frame
var frameHeight = 20;

// Width of each letter
var letterWidth = 5;

// Height of each letter
var letterHeight = 8;

// Space between letters
var letterSpace = 1;

var letters = [//A = 0
               [[0,0,1,0,0],
                [0,1,0,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,1,1,1,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1]],
                
                //B = 1
               [[1,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,1,1,1,0]],

                 //C = 2
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,1],
                [0,1,1,1,0]],

               //D = 3 
               [[1,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,1,1,1,0]],

               //E = 4
               [[1,1,1,1,1],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,1,1,1,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,1,1,1,1]],

               //F = 5
               [[1,1,1,1,1],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,1,1,1,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0]],

                //G = 6
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,0],
                [1,0,1,1,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],

 				       //H = 7
               [[1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,1,1,1,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1]],
                
                //I = 8
               [[1,1,1,1,1],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [1,1,1,1,1]],


               //J = 9
               [[0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],

                //K = 10
               [[1,0,0,0,1],
                [1,0,0,1,0],
                [1,0,1,0,0],
                [1,1,0,0,0],
                [1,0,1,0,0],
                [1,0,0,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1]],

               //L = 11 
               [[1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,1,1,1,1]],

                //M = 12 
               [[1,0,0,0,1],
                [1,1,0,1,1],
                [1,0,1,0,1],
                [1,0,1,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1]],

                //N = 13
               [[1,0,0,0,1],
                [1,1,0,0,1],
                [1,0,0,0,1],
                [1,0,1,0,1],
                [1,0,0,1,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1]],

                //O = 14
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],

               //P = 15
               [[1,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,1,1,1,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0]],

                 //Q = 16
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,1,0,1],
                [1,0,0,1,1],
                [0,1,1,1,1]],

                //R = 17
               [[1,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,1,1,1,0],
                [1,1,0,0,0],
                [1,0,1,0,0],
                [1,0,0,1,0],
                [1,0,0,0,1]],

                 //S = 18
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,0],
                [0,1,1,1,0],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],

                 //T = 19
               [[1,1,1,1,1],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0]],

                //U = 20
               [[1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],

               //V = 21
               [[1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,0,1,0],
                [0,0,1,0,0]],

                //W = 22
               [[1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,1,0,1],
                [1,0,1,0,1],
                [1,1,0,1,1],
                [1,0,0,0,1]],

               //X = 23
               [[1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,0,1,0],
                [0,0,1,0,0],
                [0,1,0,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1]],

               //Y = 24
               [[1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,0,1,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0]],

               //Z = 25
               [[1,1,1,1,1],
                [0,0,0,0,1],
                [0,0,0,1,0],
                [0,0,1,0,0],
                [0,1,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,1,1,1,1]],

               //? = 26
               [[1,1,1,1,0],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [1,1,1,1,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [0,0,0,0,0],
                [1,0,0,0,0]],

               //!!! = 27
               [[1,0,1,0,1],
                [1,0,1,0,1],
                [1,0,1,0,1],
                [1,0,1,0,1],
                [1,0,1,0,1],
                [1,0,1,0,1],
                [0,0,0,0,0],
                [1,0,1,0,1]],

                //0 = 28
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,1,1],
                [1,0,1,0,1],
                [1,1,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],


                //1 = 29
               [[0,0,1,0,0],
                [0,1,1,0,0],
                [1,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [0,0,1,0,0],
                [1,1,1,1,1]],

                //2 = 30
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,1,0],
                [0,0,1,0,0],
                [0,1,0,0,0],
                [1,0,0,0,0],
                [1,1,1,1,1]],

                 //3 = 31
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [0,0,0,0,1],
                [0,0,1,1,0],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],


                //4 = 32
               [[1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,1,1,1,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1]],

                //5 = 33
               [[1,1,1,1,1],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,1,1,1,0],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],


                //6 = 34
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,0],
                [1,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],

               //7 = 35 
               [[1,1,1,1,1],
                [0,0,0,0,1],
                [0,0,0,1,0],
                [0,0,1,0,0],
                [0,1,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,0]],


                //8 = 36
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],

                //9 = 37
               [[0,1,1,1,0],
                [1,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [1,0,0,0,1],
                [0,1,1,1,0]],

                //. = 38
               [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [1,1,0,0,0],
                [1,1,0,0,0]],

                //, = 39
               [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,1,0,0,0],
                [1,0,0,0,0]],

                //space = 40
               [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]],
              ];

// Return a new array of size width x height - zero it out
function createArray(width, height) {
   var result = new Array(height);
   for (var i = 0; i < height; i++) {
      result[i] = new Array(width);
      // zero out the elements
      for (var j = 0; j < width; j++) {
         result[i][j] = 0;
      }
   }
   return result;
}

// Create a single frame for the given word at (xOffset, yOffset)
function makeFrame(word, xOffset, yOffset) {
   var frame = createArray(frameWidth, frameHeight);

   currentX = xOffset;

   // For each letter in the word
   for (var currentLetter = 0; currentLetter < word.length; currentLetter++) {
      // Copy letter to (currentX,yOffset)
      for (var i = 0; i < letterWidth; i++) {
         for (var j = 0; j < letterHeight; j++) {
            var x = currentX + i;
            var y = yOffset + j;

            // Check if we're outside the frame
            if ((x < 0) || (y < 0) || (x >= frameWidth) || (y >= frameHeight)) {
               // Skip this pixel
               continue;
            }
            // Mark the right part of the letter only if its in the bridge mask
            if (bridgeMask[y][x] === 1) {
               frame[y][x] = letters[word[currentLetter]][j][i];
            }
         }
      }

      // Move currentX for next letter
      currentX = currentX + letterWidth + letterSpace;
   }

   return frame;
}

function framesToSlideWord(word, yOffset) {
   var result = [];

   /*
    * Start the animation with the first letter entering from x=frameWidth and
    * continue generating frames until the last letter exits the frame at
    * x = -(word.length * (letterWidth + letterSpace))
    */
   for (var i = 0; i < frameWidth + (word.length * (letterWidth + letterSpace)); i++) {
      result[i] = makeFrame(word, frameWidth - i, yOffset);
   }

   return result;
}

//var testWord1 = [0, 1, 2, 3, 4]; // A, B, C, D, E
//var testWord2 = [14, 15, 16]; // O, P, Q


function createLetterIndexArray(sentence){
 
  var result = [];
  var sentenceUpper = sentence.toUpperCase();

  for(i=0; i<sentenceUpper.length; i++){
   if(sentenceUpper[i] === " "){
      result[i] = 40;
    } else if (sentenceUpper [i] === "."){
      result[i] = 38;
    }else if(sentenceUpper[i] === ","){
      result[i] = 39;
    }else if(sentenceUpper [i] === "?"){
      result[i] = 26;
    }else if(sentenceUpper [i] === "!"){
      result[i] = 27;
    }else if(sentenceUpper.charCodeAt(i) >= 48 && sentenceUpper.charCodeAt(i) <= 57){
      result[i] = sentenceUpper.charCodeAt(i)-20;
    }else if(sentenceUpper.charCodeAt(i) >= 65 && sentenceUpper.charCodeAt(i) <= 90){
      result[i] = sentenceUpper.charCodeAt(i)-65;
    }

  }
  return result;
}

var animationId = 0;

var animationSpeedList = [500, 300, 150, 50];
var animationSpeedIndex = 1;

var flicker = false;
var blink = false;
var fade = false;

var currentFrame = 0;

function showFrame(frames, myId) {

  // Loop over all rows and columns
  	for (row = 0; row < frameHeight; row++) {
    	for (column = 0; column < frameWidth; column++) {

	        // Create the id of the current row/column
	        var currentId = 'col' + column + 'row' + row;

	        // Get element for current row/col
	        var elem = document.getElementById(currentId);

	        // set it's image from the current frame information 
	        //sets the animation

	        if (flicker === true) {
	        	if (frames[currentFrame][row][column] === 1){

	        		var randomize = Math.floor((Math.random() * 100) + 1);
	        		if ( randomize <= 20) {

	        			// 20% possibility to flicker

	        			frames[currentFrame][row][column] = 2;
	        		}else if(randomize <=40){

	        			// 20% possibility to flicker


	        			frames[currentFrame][row][column] = 3;
	        		}
	        	}
	        }
	        if (fade === true) {
	        	if (frames[currentFrame][row][column] === 1){
	        		if (currentFrame %5 == 0 || currentFrame %5 == 4){
	        			frames[currentFrame][row][column] = 1;
	        		}else if (currentFrame %5 == 1 || currentFrame %5 == 3){
	        			frames[currentFrame][row][column] = 2;
	        		}else if (currentFrame %5 == 2){
	        			frames[currentFrame][row][column] = 1;
	        		}
	        	}
	        }

	        if(blink && (currentFrame%2 == 1)){
	        	elem.innerHTML = "<img src='" + 
                             images[0] +
                             "'>"
	        }else{
	        	elem.innerHTML = "<img src='" + 
                             images[frames[currentFrame][row][column]] +
                             "'>"
	        }

        }
    }

    // Move to next frame
    currentFrame++;

    // Schedule timeout again if there are more frames
    if (currentFrame != frames.length) {
    	if (myId === animationId) {
    		window.setTimeout(showFrame, animationSpeedList[animationSpeedIndex], frames, myId);
    	}
    }

}

function animate(frames) {
   currentFrame = 0;
   animationId++;
   var intervalId = window.setTimeout(showFrame, animationSpeedList[animationSpeedIndex], frames, animationId); 
}


//changes the speed of the animation
function speedChange(speed){
	if (speed === "fast"){
		animationSpeedIndex = 3;
	} else if (speed === "medium"){
		animationSpeedIndex = 2;
	} else if (speed === "slow"){
		animationSpeedIndex = 1;
	} else{animationSpeedIndex = 0;
  }
}

//changes the animation type
function animationType(animation){
	if (animation === "default"){
		flicker = false;
		blink = false;
		fade = false;
	} else if (animation === "flicker"){
		blink = false;
		flicker = true;
		fade = false;
	} else if(animation === "blink"){
		blink = true;
		flicker = false;
		fade = false;
	}else{
		blink = false;
		flicker = false;
		fade = true;
	}
}

function messageSubmit() {
  var text = document.getElementById("costumeMessage").value;

  var letterArray = createLetterIndexArray(text);

  var frames = framesToSlideWord(letterArray, 10);

  animate(frames);
}









