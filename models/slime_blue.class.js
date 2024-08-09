/**
 * Represents a blue slime enemy in the game, extends MovableObject.
 */
class SlimeBlue extends MovableObject {
    height = 300;
    width = 300;
    y = 120;
    widthOffsetX = 170;
    offsetX = 80;
    heightOffsetY = 200;
    offsetY = 230;
    energy = 10;
    t = 0;

    //IMAGES
    IMAGES_WALKING = [
        'img/3_Slimes/Blue_Slime/WALK/tile000.png',
        'img/3_Slimes/Blue_Slime/WALK/tile001.png',
        'img/3_Slimes/Blue_Slime/WALK/tile002.png',
        'img/3_Slimes/Blue_Slime/WALK/tile003.png',
        'img/3_Slimes/Blue_Slime/WALK/tile004.png',
        'img/3_Slimes/Blue_Slime/WALK/tile005.png',
        'img/3_Slimes/Blue_Slime/WALK/tile006.png',
        'img/3_Slimes/Blue_Slime/WALK/tile007.png',
    ];
    IMAGES_DEAD = [
        'img/3_Slimes/Blue_Slime/DEAD/tile000.png',
        'img/3_Slimes/Blue_Slime/DEAD/tile001.png',
        'img/3_Slimes/Blue_Slime/DEAD/tile002.png',
    ];

    /**
    * Creates an instance of `SlimeBlue`, a type of enemy slime.
    */
    constructor(x) {
        super().loadImage('img/3_Slimes/Blue_Slime/WALK/tile000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.energy = 10;
        this.x = x + (Math.random() * 100);
        this.speed = 0.10 + Math.random() * 0.45;
        this.animate();
    }

    /**
    * Manages the animation and movement of the slime.
    */
    animate() {
        this.moveLeftContinous();
        this.updateAnimationAndPosition();
    }

    /**
    * Starts the movement of the slime left at a consistent frame rate.
    */
    moveLeftContinous() {
        setInterval(() => {
            if (this.energy > 0 && gameIsRunning) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    /**
    * Continuously updates the slime's animation and position based on its energy level.
    */
    updateAnimationAndPosition() {
        setInterval(() => {
            if (this.energy < 1) {
                this.playAnimation(this.IMAGES_DEAD); // Play dead animation
                if (this.t < 20) {
                    this.x += 10; // Move slime right
                    this.y += 10; // Move slime down
                    this.t++; // Increment the counter for movement
                }
            } else {
                this.playAnimation(this.IMAGES_WALKING); // Play walking animation
            }
        }, 120); // Update every 120 milliseconds
    }
}