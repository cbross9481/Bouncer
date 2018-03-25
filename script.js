var points = 0;
var x = 100;
var id;
var score; var bool = false; var total = 0;

document.getElementById("dot").addEventListener("click",display)
score = Math.floor(Math.random()*25)+125;
game_score = document.getElementById('game_score');
text = document.createTextNode(score);
game_score.appendChild(text);

function display() {
	clearInterval(id);
	console.log(points);
	x -= 5;
	myFunction();
}

function myFunction(){
	var canvas = document.getElementById("dot")
	var color_1 = ['red','orange','yellow','green','blue','purple']
	var color_2 = color_1[Math.floor(Math.random()*color_1.length)]
	canvas.style.backgroundColor = color_2;
	var up = 250; var down = 0; var right = 0; var left = 250; 
	var array = [1,2,3,4];
	console.log(bool);
	if (bool == true) {
		removePoint();
	}

	addPoint();
	id = setInterval(frame,x);

	function addPoint() {
		your_score = document.getElementById('your_score');
		text_2 = document.createTextNode(total);
		your_score.appendChild(text_2);
		points = Math.floor(Math.random()*15)+15;
		console.log(points);
		total = total + points;
		bool = true;
	}

	function removePoint() {
		your_score.removeChild(text_2);
	}

	function frame() {

		// var select = Math.floor(Math.random() * 4) +1;
		var example = [0,1,2,3];
		var item = example[Math.floor(Math.random()*example.length)]
		// points = Math.floor(Math.random()*30)+15 + points;
		// your_score = document.getElementById('your_score');
		// text_2 = document.createTextNode(points);
		// your_score.appendChild(text_2);

		if (item == 0){
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
