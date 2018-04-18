//Refactoring Notes:
// 1) Using case statements for conditions with set number of definitions
// 2) Define functions outside of functions (partially complete, setInterval for frame does not execute when moved outside of myFunction)
// 3) Only global variables when it's absolutely necessary 

//-----------------------------



//Declaring Variables ---------------------------------------------------
var points = 0; 
var x = 200; var x1; var x2; var x3; var x4; var x5; var x6; var x7;
var id; var attempt = 0; var color_2; var bool_2 = false;
var score; var bool = false; var total = 0; var old_total; var validate = [];
var your_score = document.getElementById('your_score'); var new_point = document.getElementById('points');
var new_point = document.getElementById('points'); var game_score = document.getElementById('game_score');
//------------------------------------------------------------------------
//------------------------------------------------------------------------

hide_xs();
hide_colors();
hide_results();	
add_score();
incorrect();

function hide_xs(){
	document.getElementById("x_1").style.visibility = 'hidden';
	document.getElementById("x_2").style.visibility = 'hidden';
	document.getElementById("x_3").style.visibility = 'hidden';
	document.getElementById("x_4").style.visibility = 'hidden';
	document.getElementById("x_5").style.visibility = 'hidden';
	document.getElementById("x_6").style.visibility = 'hidden';
	document.getElementById("x_7").style.visibility = 'hidden';
}

function hide_results() {
	document.getElementById('You_Lose').style.visibility = 'hidden';
	document.getElementById('You_Win').style.visibility = 'hidden';
}

function hide_colors(){
	document.getElementById("red").style.visibility = 'hidden';
	document.getElementById("yellow").style.visibility = 'hidden';
	document.getElementById("orange").style.visibility = 'hidden';
	document.getElementById("green").style.visibility = 'hidden';
	document.getElementById("blue").style.visibility = 'hidden';
	document.getElementById("purple").style.visibility = 'hidden';
}

function add_score() {
	document.getElementById("dot").addEventListener("click",display)
	score = Math.floor(Math.random()*25)+125;
	game_score = document.getElementById('game_score');
	text = document.createTextNode(score);
	game_score.appendChild(text);
}

function incorrect() {
	document.getElementById('canvas').addEventListener("click",add_x);
}

function add_x() {
	attempt += 1;
	console.log(attempt);
	switch(attempt) {
		case 1:
			document.getElementById("x_1").style.visibility = 'visible';
			break;
		case 2:
			document.getElementById("x_2").style.visibility = 'visible';
			break;
		case 3:
			document.getElementById("x_3").style.visibility = 'visible';
			break;
		case 4:
			document.getElementById("x_4").style.visibility = 'visible';
			break;
		case 5:
			document.getElementById("x_5").style.visibility = 'visible';
			break;
		case 6:
			document.getElementById("x_6").style.visibility = 'visible';
			break;
		case 7:
			document.getElementById("x_7").style.visibility = 'visible';
			console.log('You Lose');
			clearInterval(id);
			document.getElementById('dot').style.visibility = 'hidden';
			document.getElementById('You_Lose').style.visibility = 'visible';
			break;
	}
}

function reveal_color() { 
	switch(color_2){
		case 'red':
			document.getElementById('red').style.visibility = 'visible';
			hide_xs();
			attempt = 0;
			if (validate.includes("red") == false) {
				validate.push("red");
			}
			break;
		case 'orange':
			document.getElementById('orange').style.visibility = 'visible';
			hide_xs();
			attempt = 0;
			if (validate.includes("orange") == false) {
				validate.push("orange");
			}
			break;
		case 'yellow':
			document.getElementById('yellow').style.visibility = 'visible';
			hide_xs();
			attempt = 0;
			if (validate.includes("yellow") == false) {
				validate.push("yellow");
			}
			break;
		case 'green':
			document.getElementById('green').style.visibility = 'visible';
			hide_xs();
			attempt = 0;
			if (validate.includes("green") == false) {
				validate.push("green");
			}
			break;
		case 'blue':
			document.getElementById('blue').style.visibility = 'visible';
			hide_xs();
			attempt = 0;
			if (validate.includes("blue") == false) {
				validate.push("blue");
			}
			break;
		case 'purple':
			document.getElementById('purple').style.visibility = 'visible';
			hide_xs();
			attempt = 0;
			if (validate.includes("purple") == false) {
				validate.push("purple");
			}
			break;
	}
}

function results() {
	if (validate.length == 6 && total > score){
		document.getElementById('dot').style.visibility = 'hidden';
		document.getElementById('You_Win').style.visibility = 'visible';
	}
	else if (validate.length == 6 && total < score){
		document.getElementById('dot').style.visibility = 'hidden';
		document.getElementById('You_Lose').style.visibility = 'visible';
	}
	else if (validate.length < 6 &&  total > score){
		document.getElementById('dot').style.visibility = 'hidden';
		document.getElementById('You_Lose').style.visibility = 'visible';
	}
}

function display() {
	clearInterval(id);
	x -= 5;
	reveal_color();
	results();
	myFunction();
}

function display_2() {
	bool_2 = true;
	x -= 2;
	clearInterval(id);
	myFunction();
}

function display_3() {
	bool_2 = true;
	attempt = 0;
	validate = [];		
	var level = document.getElementById('level_select').value;
	clearInterval(id);
	if (level == 1){
		x = 200;
	}
	else if (level == 2){
		x = 170;		
	}
	else if (level == 3){
		x = 140;
	}
	else if (level == 4){
		x = 110;
	}
	else if (level == 5){
		x = 80;
	}
	else if (level == 6){
		x = 50;
	}
	else if (level == 7){
		x = 25;
	}

	hide_xs();
	myFunction();

}

function addPoint() {
		add_yourScore();
		points = Math.floor(Math.random()*15)+15;
		add_attemptPoint();
		increment_total();		
}

function increment_total() {
		if (bool_2 == false){
		total += points;
		}
		bool = true;
}

function add_yourScore() {
		text_2 = document.createTextNode(total);
		your_score.appendChild(text_2);
	}

function add_attemptPoint() {
		text_3 = document.createTextNode(points);
		new_point.appendChild(text_3);
}

function removePoint() {
		your_score.removeChild(text_2);
		new_point.removeChild(text_3);
}

function myFunction(){
	var canvas = document.getElementById("dot");
	var color_1 = ['red','orange','yellow','green','blue','purple']
	color_2 = color_1[Math.floor(Math.random()*color_1.length)]
	canvas.style.backgroundColor = color_2;
	var up = 250; var down = 0; var right = 0; var left = 250; 
	if (bool == true) {
		removePoint();
	}
	addPoint();
	id = setInterval(frame,x);
	bool_2 = false;

	function frame() {

		var example = [0,1,2,3];
		var item = example[Math.floor(Math.random()*example.length)]

		if (item == 0){ //Use case statments here
			if (up >= 400){
				up -= 50
			}
			else {
				up += 40;
			}
			canvas.style.top = up + 'px';
		}
		else if (item == 1){
			if (up <= 50){
				up += 50
			}
			else {
				up -= 40;	
			}
			canvas.style.bottom = up + 'px';
		}
		else if (item == 2){
			if (left <= 50){
				left += 50
			}
			else{
			left -= 40;
			}
			canvas.style.left = left + 'px';
		}
		else if (item == 3){
			if (left >= 400){
				left -= 50
			}
			else {
				left += 40;
			}
			canvas.style.left = left + 'px';
		}
	 }
}
