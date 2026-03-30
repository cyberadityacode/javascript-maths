console.log("lesson 3");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let LEFT = false, RIGHT = false, UP = false, DOWN = false;
let SPEED = 10;

class Ball{
    constructor(x,y,r){
        this.x = x;
        this.y= y;
        this.r = r;
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill(); 
    }
}

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight") RIGHT = true;
    if(e.key === "ArrowLeft") LEFT = true;
    if(e.key === "ArrowUp") UP = true;
    if(e.key === "ArrowDown") DOWN = true;
});

document.addEventListener("keyup", function(e){
    if(e.key === "ArrowRight") RIGHT = false;
    if(e.key === "ArrowLeft") LEFT = false;
    if(e.key === "ArrowUp") UP = false;
    if(e.key === "ArrowDown") DOWN = false;
});

// Movement
function move(ball){
    if(LEFT) ball.x -= SPEED;
    if(RIGHT) ball.x += SPEED;
    if(UP) ball.y -= SPEED;
    if(DOWN) ball.y += SPEED;

    // boundary check or constraints
    if(ball.x - ball.r < 0){
        ball.x = ball.r; //left edge
        console.log("left edge limit reached");
    }
    if(ball.x + ball.r > canvas.width){
        ball.x = canvas.width - ball.r;
    }
    if(ball.y - ball.r < 0 ){
        ball.y = ball.r; // top edge
    }
    if(ball.y + ball.r > canvas.height){
        ball.y = canvas.height - ball.r; // bottom edge
    }
}

function mainLoop(){
    ctx.clearRect(0,0,canvas.width, canvas.height);

    move(Ball1);

    Ball1.drawBall();
    Ball2.drawBall();

    requestAnimationFrame(mainLoop);
}

let Ball1 = new Ball(200,200,30);
let Ball2 = new Ball(100,100,20);

requestAnimationFrame(mainLoop);