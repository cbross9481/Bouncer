describe ("Window Onload"), function() {
//Test need to be dispersed properly into their respective groups

 beforeEach(function() {
 	window.onload();
 });

 it ("Update Game score after first play", function(){
 	add_score();
 	//game_score is not equal to null 
 	expect(score).not.toBeLessThan(0);
 	//get dot element by id and set it equal to score

 });

 it("Should validate colors are not showing", function(){

 });

 it("Color is assigned after each roll", function() {

 });

 it("Should validate the game results", function() {
 	
 });

 it("Assure all movement variables are assigned", function() {

 });

it("Validate variable adjusts based on level selection", function() {

});

it("Assure all variables have been modified after 10 turns", function() {

});

it("Validate a number between 15-30 is assigned to added points", function() {

});

it("Negative test, to assure number greater than 30 or less than 15 are not chosen", function() {

});
}

describe ("Successful Point Attempt"), function() {

 beforeEach(function() {

 });
}

describe ("Unuccessful Point Attempt"), function() {

 beforeEach(function() {

 });
}

describe ("New Color Button"), function() {

 beforeEach(function() {

 });
}

describe ("Try Me Button"), function() {

 beforeEach(function() {

 });
}

