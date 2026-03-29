console.log("welcome to lesson 2");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x = 100;
let y = 100;

let LEFT,RIGHT, UP, DOWN;
function drawBall(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2* Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}


canvas.addEventListener("keydown", function(e){
    // console.log(e);
    if(e.key === "ArrowLeft"){
        console.log("arrow left pressed");
        LEFT = true;
    }
    if(e.key === "ArrowRight"){
        console.log("arrow right pressed");
        RIGHT = true;
    }
    if(e.key === "ArrowUp"){
        console.log("arrow up pressed");
        UP = true;
    }
    if(e.key === "ArrowDown"){
        console.log("arrow down pressed");
        DOWN = true;
    }
});

canvas.addEventListener("keyup", function(e){
    if(e.key === "ArrowLeft"){
        // console.log("arrow left pressed");
        LEFT = false;
    }
    if(e.key === "ArrowRight"){
        // console.log("arrow right pressed");
        RIGHT =false;
    }
    if(e.key === "ArrowUp"){
        // console.log("arrow up pressed");
        UP = false;
    }
    if(e.key === "ArrowDown"){
        // console.log("arrow down pressed");
        DOWN = false;
    }
});

function move(){
    if(LEFT){
        x--;
    }
    if(UP){
        y--;
    }
    if(RIGHT){
        x++;
    }
    if(DOWN){
        y++;
    }

}
/* // costly function
setInterval(()=>{
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    move();
    drawBall(x,y,20);
},1000/60); */

function mainLoop(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    move();
    drawBall(x,y,20);
    requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);

