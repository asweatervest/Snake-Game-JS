class Snake{
    constructor(init_x, init_y, star_size){
        this.pos = new Position(init_x,init_y);
        this.xV = 0;
        this.yV=0;
        this.size = star_size;
        this.prev_pos = [];
    }

    update_pos(){
        var current_pos = new Position(this.pos.x_pos, this.pos.y_pos);
        // console.log(this.prev_pos);
        this.prev_pos.push(current_pos);
        // console.log(this.prev_pos);
        if(this.prev_pos.length > this.size){
            this.prev_pos.shift();
        }
        this.pos.x_pos += this.xV;
        this.pos.y_pos += this.yV;
    }

    boundry_check(is_wrapped,max_x, max_y){
        if(is_wrapped){
            if(this.pos.x_pos < 0){
                this.pos.x_pos = max_x;
            }else if(this.pos.x_pos >= max_x){
                this.pos.x_pos = 0;
            }
            if(this.pos.y_pos < 0){
                this.pos.y_pos = max_y;
            }else if(this.pos.y_pos >= max_y){
                this.pos.y_pos = 0;
            }
        }else{
            if(this.pos.x_pos < 0){
                return true;
            }else if(this.pos.x_pos >= max_x){
                return true;
            }
            if(this.pos.y_pos < 0){
                return true;
            }else if(this.pos.y_pos >= max_y){
                return true;
            }
            return false;
        }
    }

    check_death(){
        for(var i = 0; i < this.prev_pos.length; i++){
            if(this.pos.x_pos == this.prev_pos[i].x_pos && this.pos.y_pos == this.prev_pos[i].y_pos && (this.xV != 0 || this.yV != 0)){
                // if(this.xV != 0 || this.yV != 0){
                    return true;
            
                // }
            }    
        }
        return false;
    }
}