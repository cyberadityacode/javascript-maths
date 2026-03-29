console.log("welcome to lesson 2");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
    }
    if(e.key === "ArrowRight"){
        console.log("arrow right pressed");
    }
    if(e.key === "ArrowUp"){
        console.log("arrow up pressed");
    }
    if(e.key === "ArrowDown"){
        console.log("arrow down pressed");
    }
});

drawBall(100,100,20);
drawBall(200,200,30);
