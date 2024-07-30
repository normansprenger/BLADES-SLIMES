class Cloud extends MovableObject{

    speed =0.15;

    constructor() {
        super().loadImage('img/5_Clouds/PNG/Clouds_white/Shape2/cloud_shape2_1.png');
        this.x = (Math.random() * 760);
        this.y = 60;
        this.width =272;
        this.height = 80;
        this.animate();
    }

    animate(){
         this.moveLeft();      
    }


}