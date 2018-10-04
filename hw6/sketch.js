

function setup() {
	createCanvas(800,800);
	rectMode(CENTER);
    
}

function draw() {
	background(0);
/*-------------------------------------------------------*/
	push();
		translate((width/2)-150,125);
		rotate(PI/4);
		rect(0,0,100,50);
	pop();

	push();
		translate(width/2,125);
		rotate(PI/2);
		rect(0,0,100,50);
	pop();

	push();
		translate((width/2)+150,125);
		rotate(PI/6);
		rect(0,0,100,50);
	pop();
/*-------------------------------------------------------*/
	var deg = mouseX;
	var rad = radians(deg);
	push();
		translate((width/2)-150,675);
		rotate(rad-45);
		rect(0,0,100,50);
	pop();

	push();
		translate(width/2,675);
		rotate(rad);
		rect(0,0,100,50);
	pop();

	push();
		translate((width/2)+150,675);
		rotate(rad+45);
		rect(0,0,100,50);
	pop();
/*-------------------------------------------------------*/
	for (i = 1; i < 4; i++) {
		var angledeg = map(i,1,3,135,45);
		var anglerad = radians(angledeg);
		var xOffset = map(i,1,3,250,550);
		push();
			translate(xOffset,height/2);
			rotate(anglerad);
			rect(0,0,100,50);
		pop();
	}
}