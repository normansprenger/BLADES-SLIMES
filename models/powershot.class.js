/**
 * Represents a powerful shot object in the game, extending `MovableObject`.
 */
class Powershot extends MovableObject {
    speed = 10;

    //IMAGES
    IMAGES_POWERSHOT = [
        'img/1_Hero/Musketeer/POWERSHOT/tile000.png',
        'img/1_Hero/Musketeer/POWERSHOT/tile001.png',
        'img/1_Hero/Musketeer/POWERSHOT/tile002.png',
        'img/1_Hero/Musketeer/POWERSHOT/tile003.png',
    ]

    /**
    * Creates an instance of `Powershot`.
    * 
    * Initializes the `Powershot` object with the specified position, sets its size, loads the images for the
    * powershot animation, and starts the animation process.
    */
    constructor(x, y) {
        super();
        this.x = x + 120;
        this.y = y + 90;
        this.height = 80;
        this.width = 80;
        this.loadImages(this.IMAGES_POWERSHOT);
        this.loadImage('img/1_Hero/Musketeer/POWERSHOT/tile000.png');
        this.animate();
    }

    /**
    * Starts the animation process for the `Powershot` object.
    */
    animate() {
        setInterval(() => {
            this.moveRight();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_POWERSHOT);
        }, 120);
    }
}