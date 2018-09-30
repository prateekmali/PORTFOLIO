var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight-50;
canvas.width = window.innerWidth;

 var c = canvas.getContext('2d');
// c.fillStyle = 'rgba(100,50,50,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,100,0,0.5)';
// c.fillRect(200,300,100,100);
// c.fillStyle = 'rgba(0,0,100,0.5)';
// c.fillRect(400,100,100,100);

// c.beginPath();
// c.moveTo(100,250);
// c.lineTo(140,400);
// c.lineTo(300,500);
// c.strokeStyle = "#000000";
// c.stroke();

// c.beginPath();
// c.arc(700,75,50,0,2*Math.PI);
// c.strokeStyle = "blue";
// c.stroke();

// for(var i = 0 ; i < 100 ; i++){
	// var x = Math.random()* window.innerWidth;
	// var y = Math.random()* window.innerHeight;
	
	// c.beginPath();
    // c.arc(x,y,50,0,2*Math.PI);
    // c.strokeStyle = "blue";
    // c.stroke();
// }

function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	
	this.draw = function(){
		 c.beginPath();
         c.arc(this.x,this.y,this.radius,0,2*Math.PI);
		 c.lineWidth=5;
         c.strokeStyle = "white";
		 c.fillStyle = "black";
         c.stroke();
		 c.fill();
		 }
	
	this.update = function(){
		 this.draw();
		 if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
			 this.dx = -this.dx;
		 }
		 if(this.y + this.radius > innerHeight-50 || this.y - this.radius < 0){
			 this.dy = -this.dy;
		 }
		 this.x += this.dx;
		 this.y += this.dy;
		 }
}

var CircleArray = [];
for(var i=0; i < 95; i++){
	var radius = 25;
	var x = Math.random() * innerWidth;
	var y = Math.random() * innerHeight;
	var dx = (Math.random() - 0.5)*2;
	var dy = (Math.random() - 0.5)*2;
 CircleArray.push(new Circle(x,y,dx,dy,radius));
}
	function animate(){
		 requestAnimationFrame(animate);
		 c.clearRect(0,0,innerWidth,innerHeight);
		 for(var i=0; i<CircleArray.length; i++){
		 CircleArray[i].update();
		 }	 
  
	}
	 animate();