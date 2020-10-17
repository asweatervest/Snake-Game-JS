// Game constants
const FRAME_RATE = 10;
const CANV_HEIGHT = 600;
const CANV_WIDTH = 600;
const BLOCK_SIZE = 20;
const BACKGROUND_COLOR = "#2F2F2F";
const SNAKE_COLOR = "lime";
const FRUIT_COLOR = "red";
const SNAKE_START_SIZE = 5;
const PIXEL_BORDER = 4;

var snake = new Snake(0,0,SNAKE_START_SIZE);
var fruit = new Fruit(CANV_WIDTH/BLOCK_SIZE,CANV_HEIGHT/BLOCK_SIZE);

window.onload=function(){
    set_up();
};

function set_up(){
    canvas = document.getElementById("game-canvas");
    canvas.width = CANV_WIDTH;
    canvas.height = CANV_HEIGHT;
    context = canvas.getContext("2d");
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0,0,canvas.width,canvas.height);
    
    document.addEventListener("keydown", keyPress);

    // Sets the framerate of the game
    setInterval(game,1000/FRAME_RATE);
}

function game(){
    snake.update_pos();
    snake.boundry_check(CANV_WIDTH/BLOCK_SIZE,CANV_HEIGHT/BLOCK_SIZE);
    if(check_colision()){
        fruit.reset(snake);
        snake.size++;
    }
    if(snake.check_death()){
        restart_game();
        console.log("game over");
    }
    draw();
    return;
}

function keyPress(evt){
    switch(evt.code){
        case "ArrowUp":
            if(snake.xV != 1){
                snake.xV = -1;
                snake.yV = 0;
            }
            break;
        case "ArrowDown":
            if(snake.xV != -1){
                snake.xV = 1;
                snake.yV = 0;
            }
            break;
        case "ArrowLeft":
            if(snake.yV != 1){
                snake.xV = 0;
                snake.yV = -1;
            }
            break;
        case "ArrowRight":
            if(snake.yV != -1){
                snake.xV = 0;
                snake.yV = 1;
            }
            break;
    }

}

function draw(){
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0,0,canvas.width,canvas.height);

    context.fillStyle = SNAKE_COLOR;
    context.fillRect(snake.pos.y_pos * BLOCK_SIZE, snake.pos.x_pos * BLOCK_SIZE, BLOCK_SIZE - PIXEL_BORDER, BLOCK_SIZE - PIXEL_BORDER);
    // for(tail in snake.prev_pos){
    //     context.fillRect(tail.y_pos * BLOCK_SIZE, tail.x_pos * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    //     console.log(tail.x_pos);
    // }
    snake.prev_pos.forEach(tail => context.fillRect(tail.y_pos * BLOCK_SIZE, tail.x_pos * BLOCK_SIZE, BLOCK_SIZE - PIXEL_BORDER, BLOCK_SIZE - PIXEL_BORDER));

    context.fillStyle = FRUIT_COLOR;
    context.fillRect(fruit.pos.y_pos * BLOCK_SIZE, fruit.pos.x_pos * BLOCK_SIZE, BLOCK_SIZE - PIXEL_BORDER, BLOCK_SIZE - PIXEL_BORDER)
}

function check_colision(){
    if(snake.pos.x_pos == fruit.pos.x_pos && snake.pos.y_pos == fruit.pos.y_pos){
        return true;
    }
    return false;
}

function restart_game(){
    snake = new Snake(0,0,SNAKE_START_SIZE);
    fruit = new Fruit(CANV_WIDTH/BLOCK_SIZE,CANV_HEIGHT/BLOCK_SIZE);
}