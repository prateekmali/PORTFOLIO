var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight-10;
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

c.beginPath();
c.moveTo(10,100);
c.lineTo(320,100);
c.strokeStyle = "white";
c.stroke();
