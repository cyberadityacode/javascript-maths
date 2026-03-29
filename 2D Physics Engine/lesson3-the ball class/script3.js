console.log("lesson 3");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x = 100;
let y = 100;

let LEFT,RIGHT,UP,DOWN;

function drawBall(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    
}

canvas.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
      console.log("right");
      RIGHT = true;
    }
    if(e.key==="ArrowLeft"){
        console.log("left");
        LEFT = true;
    }
    if(e.key === "ArrowUp"){
        console.log("up");
        UP = true;
    }
    if(e.key === "ArrowDown"){
        console.log("down");
        DOWN = true;
    }
});

canvas.addEventListener("keyup", function(e){
     if(e.key === "ArrowRight"){
      console.log("right");
      RIGHT = false;
    }
    if(e.key==="ArrowLeft"){
        console.log("left");
        LEFT = false;
    }
    if(e.key === "ArrowUp"){
        console.log("up");
        UP = false;
    }
    if(e.key === "ArrowDown"){
        console.log("down");
        DOWN = false;
    }
});

function move(){
    if(LEFT){
        x--;
    }
    if(RIGHT){
        x++;
    }
    if(UP){
        y--;
    }
    if(DOWN){
        y++;
    }
}

function mainLoop(){
    ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    move();
    drawBall(x,y,20);
    requestAnimationFrame(mainLoop);
}


requestAnimationFrame(mainLoop);