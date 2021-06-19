canvas=document.getElementById("mycan");

ctx=canvas.getContext("2d");


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(){

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.arc(270,213,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(370,213,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(470,213,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="rgb(232, 243, 78)";
ctx.lineWidth=3;
ctx.arc(320,243,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3;
ctx.arc(420,243,40,0,2*Math.PI);
ctx.stroke();
}


