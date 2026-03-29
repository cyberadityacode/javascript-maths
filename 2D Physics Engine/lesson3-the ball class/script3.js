console.log("lesson 3");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let LEFT,RIGHT,UP,DOWN;

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
        // Ball1.x--;
        Ball2.x--; //control 2nd ball
    }
    if(RIGHT){
        // Ball1.x++;
        Ball2.x++; //control 2nd ball
    }
    if(UP){
        // Ball1.y--;
        Ball2.y--; //control 2nd ball
    }
    if(DOWN){
        // Ball1.y++;
        Ball2.y++; //control 2nd ball
    }
}

function mainLoop(){
    ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    move();
    // drawBall(x,y,r);
    Ball1.drawBall();
    Ball2.drawBall();
    requestAnimationFrame(mainLoop);
}

let Ball1 = new Ball(200,200,30);

// lets create another ball

let Ball2 = new Ball(100,100,20);
requestAnimationFrame(mainLoop);