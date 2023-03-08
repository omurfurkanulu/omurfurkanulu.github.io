document.addEventListener('mousemove', mouseMoveHandler);

let ballIndex= 1;
let mousePositionX;
let mousePositionY;

function mouseMoveHandler(event){
    mousePositionX = event.pageX;
    mousePositionY = event.pageY;
}

function createBall(locationX, locationY, size = 3, color = "green"){
    let ball = document.createElement("div");
    ball.style.width = size.toString() + "px";
    ball.style.height = size.toString() + "px";
    ball.style.position = "absolute";
    ball.style.zIndex = -1500;
    ball.style.borderRadius = size.toString() + "px";
    ball.style.backgroundColor = color;
    ball.style.left =  locationX.toString() + "px";
    ball.style.top = locationY.toString() + "px";
    ball.id = "TheBall" + ballIndex.toString();
    ballIndex++;
    document.body.appendChild(ball);
    return ball;
}

function changeBallLocation(ball, locationX, locationY){
    ball.style.left = locationX + 'px';
    ball.style.top = locationY + 'px';
}

function moveBallY(ballPositionY){
    if (mousePositionY == ballPositionY) return;
    if(mousePositionY > ballPositionY){
        ballPositionY += distance;
    }
    else {
        ballPositionY -= distance;
    }
}

function moveBallX(ballPositionY){
    if (mousePositionY == ballPositionY) return;
    if(mousePositionY > ballPositionY){
        ballPositionY += distance;
    }
    else {
        ballPositionY -= distance;
    }
}

window.onload = function() {

    const distance = 1; //-> Distance increment amount
    const intervalTime = 0;

    const ball = createBall(0,0);

    let ballPositionX = 0;
    let ballPositionY = 0;

    let diffX = 0;
    let diffY = 0;
    let distanceToMouse = 0;

    setInterval(function(){

        if ( mousePositionX != "undefined" ){

            if ( mousePositionX > ballPositionX ){
                ballPositionX += distance;
            }
            if( mousePositionX < ballPositionX ){
                ballPositionX -= distance;
            }
            if( mousePositionY > ballPositionY ){
                ballPositionY += distance;
            }
            if( mousePositionY < ballPositionY ){
                ballPositionY -= distance;
            }
        }

        changeBallLocation(ball, ballPositionX, ballPositionY);

    }, intervalTime);

};
