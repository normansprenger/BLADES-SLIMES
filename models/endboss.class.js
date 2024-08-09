/**
 * Represents an endboss object in the game, extending the `MovableObject` class.
 */
class Endboss extends MovableObject {

    height = 600;
    width = 600;
    y = -170;
    widthOffsetX = 320;
    offsetX = 130;
    heightOffsetY = 400;
    offsetY = 460;
    energy = 100;
    speed = 1;
    t = 0;
    counter = 0;
    characterNearEndboss = false;
    BOSSMUSIC = new Audio('audio/bossmusic.mp3');

    //IMAGES
    IMAGES_WALKING = [
        'img/3_Slimes/Red_Slime/WALKING/tile000.png',
        'img/3_Slimes/Red_Slime/WALKING/tile001.png',
        'img/3_Slimes/Red_Slime/WALKING/tile002.png',
        'img/3_Slimes/Red_Slime/WALKING/tile003.png',
        'img/3_Slimes/Red_Slime/WALKING/tile004.png',
        'img/3_Slimes/Red_Slime/WALKING/tile005.png',
        'img/3_Slimes/Red_Slime/WALKING/tile006.png',
        'img/3_Slimes/Red_Slime/ATTACKING/tile000.png',
        'img/3_Slimes/Red_Slime/ATTACKING/tile001.png',
        'img/3_Slimes/Red_Slime/ATTACKING/tile002.png',
        'img/3_Slimes/Red_Slime/ATTACKING/tile003.png',
    ];
    IMAGES_DEAD = [
        'img/3_Slimes/Red_Slime/DEAD/tile000.png',
        'img/3_Slimes/Red_Slime/DEAD/tile000.png',
        'img/3_Slimes/Red_Slime/DEAD/tile001.png',
        'img/3_Slimes/Red_Slime/DEAD/tile001.png',
        'img/3_Slimes/Red_Slime/DEAD/tile002.png',
        'img/3_Slimes/Red_Slime/DEAD/tile002.png',
    ];
    IMAGES_HURT = [
        'img/3_Slimes/Red_Slime/DEAD/tile000.png',
        'img/3_Slimes/Red_Slime/DEAD/tile000.png',
        'img/3_Slimes/Red_Slime/DEAD/tile001.png',
        'img/3_Slimes/Red_Slime/DEAD/tile001.png',
        'img/3_Slimes/Red_Slime/DEAD/tile002.png',
        'img/3_Slimes/Red_Slime/DEAD/tile002.png',
    ];

    /**
    * Creates an instance of the Endboss.
    * 
    * Initializes the end boss with specific properties and loads images for different states
    * (walking, dead, hurt). Sets the initial position of the end boss and starts animation.
    * Additionally, adjusts the volume of the boss's music.
    */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.x = 4160;
        this.animate();
        this.changeBossMusicVolume();
    }

    /**
     * Starts the animation and interaction loops for the object.
     */
    animate() {
        this.startAnimationLoop();
        this.startWorldInteractionLoop();
    }

    /**
     * Sets up an interval to handle animations based on the object's state.
     */
    startAnimationLoop() {
        setInterval(() => {
            if (this.isHurt()) {
                this.handleHurtAnimation();
            } else if (this.isDead()) {
                this.handleDeathAnimation();
            } else {
                this.handleWalkingAnimation();
            }
        }, 140);
    }

    /**
     * Sets up an interval to manage sounds and interactions with the game world.
     */
    startWorldInteractionLoop() {
        setInterval(() => {
            if (world?.character) {
                this.handleWorldInteraction();
            }
        }, 10);
    }

    /**
     * Handles the object's behavior and animation when it is hurt.
     */
    handleHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT); // Play the hurt animation

        if (this.counter < 10) {
            this.x += 5; // Move the object to the right
            this.counter++; // Increment the counter
        }
    }

    /**
     * Handles the object's behavior and animation when its energy is 0.
     */
    handleDeathAnimation() {
        this.playAnimation(this.IMAGES_DEAD); // Play the dead animation
        if (this.t < 30) {
            this.x += 8; // Move the object diagonally to the right
            this.y += 8; // Move the object diagonally downwards
            this.t++; // Increment the counter `t`
        }
    }

    /**
     * Handles the object's behavior and animation when it is walking.
     */
    handleWalkingAnimation() {
        this.playAnimation(this.IMAGES_WALKING); // Play the walking animation
    }

    /**
     * Handles world interactions and sound management based on the object's state.
     */
    handleWorldInteraction() {
        this.manageMusic();
        this.updateCharacterProximity();
        this.handleMovement();
    }

    /**
     * Manages the music based on the object's energy level and the game state.
     */
    manageMusic() {
        if (this.energy <= 0 || !gameIsRunning) {
            this.characterNearEndboss = false;
            this.BOSSMUSIC.pause();
        }
        if (this.energy <= 0 && gameIsRunning) {
            GAME_SOUND.play();
        }
        if (this.energy > 0 && world.character.x > 3500 && gameIsRunning) {
            this.characterNearEndboss = true;
            GAME_SOUND.pause();
            this.BOSSMUSIC.play();
        }
    }

    /**
    * Updates the object's proximity status based on the character's position.
    */
    updateCharacterProximity() {
        if (this.energy > 0 && world.character.x > 3500 && gameIsRunning) {
            this.characterNearEndboss = true;
        } else {
            this.characterNearEndboss = false;
        }
    }

    /**
     * Handles the movement of the object if it is near the character and certain conditions are met.
     */
    handleMovement() {
        if (this.characterNearEndboss && this.x > 200) {
            this.moveLeft();
        }
    }

    /**
    * Continuously adjusts the volume of the boss music based on the global game volume setting.
    */
    changeBossMusicVolume() {
        setInterval(() => {
            if (gameVolumeOn == false) {
                this.BOSSMUSIC.volume = 0;
            } else if (gameVolumeOn == true) {
                this.BOSSMUSIC.volume = 1;
            }
        }, 10);
    }
}
