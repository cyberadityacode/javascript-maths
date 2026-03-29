console.log("2D physics Engine");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* ctx.beginPath();
ctx.arc(100,100,20,0,2 * Math.PI);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill(); */


function drawBall(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}

drawBall(100,100,20);
drawBall(200,200,30);
