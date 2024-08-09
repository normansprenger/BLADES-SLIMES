/**
 * Represents an cloud object in the game, extending the `MovableObject` class.
 */
class Cloud extends MovableObject {
    speed = 0.5;

    /**
    * Creates an instance of the class and initializes its properties.
    * 
    * @param {number} x - The initial x-coordinate of the object.
    * @param {number} y - The initial y-coordinate of the object.
    */
    constructor(x, y) {
        super().loadImage('img/5_Clouds/PNG/Clouds_white/Shape2/cloud_shape2_1.png');
        this.x = x;
        this.y = y + (Math.random() * 120)
        this.speed = 0.8 * (Math.random() * 2);
        this.width = 272;
        this.height = 80;
        this.animate();
    }

    /**
    * Starts an animation loop that repeatedly moves the object to the left.
    */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 30);
    }
}