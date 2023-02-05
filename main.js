canvas=document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
 ctx.beginPath()
 ctx.strokeStyle="black";
 ctx.lineWidth = 5;
 ctx.rect(120,150,600,300);
 ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5 ;
ctx.arc(250,230,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5 ;
ctx.arc(415,230,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5 ;
ctx.arc(580,230,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5 ;
ctx.arc(340,330,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5 ;
ctx.arc(500,330,70,0,2*Math.PI);
ctx.stroke();