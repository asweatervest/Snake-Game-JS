class Fruit{
    constructor(canv_width, canv_height){
        this.canv_width = canv_width;
        this.canv_height = canv_height;
        this.pos = new Position(Math.floor(Math.random() * canv_width),Math.floor(Math.random() * canv_height));
    }

    reset(snake){
        this.pos.x_pos = Math.floor(Math.random() * this.canv_width);
        this.pos.y_pos = Math.floor(Math.random() * this.canv_height);
        while(this.collides_with_snake(snake)){
            this.pos.x_pos = Math.floor(Math.random() * this.canv_width);
            this.pos.y_pos = Math.floor(Math.random() * this.canv_height);
        }
    }

    collides_with_snake(snake){
        if(snake.pos.x_pos == this.pos.x_pos && snake.pos.y_pos == this.pos.y_pos){
            return true;
        }
        for(var i = 1; i < snake.prev_pos.length;i++){
            if(snake.prev_pos[i].x_pos == this.pos.x_pos && snake.prev_pos[i].y_pos == this.pos.y_pos){
                return true;
            }
        }
        return false;
    }
}