var points;
var x = 100;
var id;

document.getElementById("dot").addEventListener("click",display)

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
	
	id = setInterval(frame,x);

	function frame() {

		// var select = Math.floor(Math.random() * 4) +1;
		var example = [0,1,2,3];
		var item = example[Math.floor(Math.random()*example.length)]
		points = Math.floor(Math.random()*30)+15;

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
