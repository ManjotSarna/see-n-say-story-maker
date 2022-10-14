// Name - Manjot Singh Sarna
// Student ID - 200468996

var synth = window.speechSynthesis;
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

// Arrays for different rows
const row1 = ["The turkey", "Mom", "Dad", "The Dog", "My teacher", "The elephant", "The cat"];
const row2 = ["sat on", "ate", "danced with", "saw", "doesnt like", "kissed"];
const row3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const row4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const row5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Initializing all the buttons
var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');
var button5 = document.getElementById('btn5');
var btnStoryCreate = document.getElementById('btnStoryCreate');
var btnRandomStoryCreate = document.getElementById('btnRandomStoryCreate');
var btnReset = document.getElementById('btnReset');

// Variables for the button-generated phrases
var phrase1 ="";
var phrase2 =""; 
var phrase3 ="";
var phrase4 ="";
var phrase5 ="";


function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}


speakButton.onclick = function() {
	speakNow(textToSpeak);
}

// Generating a random phrase from individual row arrays
function randomGeneratedValue(array)
{
	return array[Math.floor(Math.random()*array.length)];
}

// Speak out random generated phrases from each row
button1.onclick = function(){
	phrase1 = randomGeneratedValue(row1);
	document.getElementById("storyText").innerHTML = phrase1 + " " + phrase2 + " " + phrase3 + " " + phrase4 + " " + phrase5;
	speakNow(phrase1);
}

button2.onclick = function(){
	phrase2 = randomGeneratedValue(row2);	
	document.getElementById("storyText").innerHTML = phrase1 + " " + phrase2 + " " + phrase3 + " " + phrase4 + " " + phrase5;  
	speakNow(phrase2);
}

button3.onclick = function(){
	phrase3 = randomGeneratedValue(row3);	
	document.getElementById("storyText").innerHTML = phrase1 + " " + phrase2 + " " + phrase3 + " " + phrase4 + " " + phrase5;
	speakNow(phrase3);
}

button4.onclick = function(){
	phrase4 = randomGeneratedValue(row4);	
	document.getElementById("storyText").innerHTML = phrase1 + " " + phrase2 + " " + phrase3 + " " + phrase4 + " " + phrase5;
	speakNow(phrase4);
}

button5.onclick = function(){
	phrase5 = randomGeneratedValue(row5);	
	document.getElementById("storyText").innerHTML = phrase1 + " " + phrase2 + " " + phrase3 + " " + phrase4 + " " + phrase5;
	speakNow(phrase5);
}

// Speak out the story constructed using random phrases
btnStoryCreate.onclick = function(){
	const FinalValue = phrase1 + " " + phrase2 + " " + phrase3 + " " + phrase4 + " " + phrase5;
	document.getElementById("storyText").innerHTML =  FinalValue;	
	speakNow(FinalValue);
}

// Create and speak out a random generated story
btnRandomStoryCreate.onclick = function(){

	const randomValue1 = randomGeneratedValue(row1);
	const randomValue2 = randomGeneratedValue(row2);
	const randomValue3 = randomGeneratedValue(row3);
	const randomValue4 = randomGeneratedValue(row4);
	const randomValue5 = randomGeneratedValue(row5);

	const finalValue = randomValue1 + " " + randomValue2 +  " " + randomValue3 +  " " + randomValue4 +  " " + randomValue5;
	document.getElementById("storyText").innerHTML =  finalValue;
	speakNow(finalValue);
}

// Reset the game
btnReset.onclick = function(){
	 
	phrase1 = "";
	phrase2 = "";
	phrase3 = "";
	phrase4 = "";
	phrase5 = "";

	document.getElementById("storyText").innerHTML = phrase1 + " " + phrase2 + " " + phrase3 + " " + phrase4 + " " + phrase5;

}
