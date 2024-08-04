class Cloud extends MovableObject {

    speed = 0.5;

    constructor(x, y) {
        super().loadImage('img/5_Clouds/PNG/Clouds_white/Shape2/cloud_shape2_1.png');
        this.x = x;
        this.y = y + (Math.random() * 120)
        this.speed = 0.5 * (Math.random() * 1);
        this.width = 272;
        this.height = 80;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 30);
    }


}