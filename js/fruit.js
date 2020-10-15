class Fruit{
    constructor(canv_width, canv_height){
        this.canv_width = canv_width;
        this.canv_height = canv_height;
        this.pos = new Position(Math.floor(Math.random() * canv_width),Math.floor(Math.random() * canv_height));
    }

    reset(){
        this.pos.x_pos = Math.floor(Math.random() * this.canv_width);
        this.pos.y_pos = Math.floor(Math.random() * this.canv_height);
    }
}