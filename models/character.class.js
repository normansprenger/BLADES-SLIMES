/**
 * Represents an background object in the game, extending the `MovableObject` class.
 */
class Character extends MovableObject {
    speed = 10;
    y = 234;
    acceleration = 2.5;
    speedY = 0;
    money = 0;
    offsetX = 60;
    offsetY = 80;
    widthOffsetX = 135;
    heightOffsetY = 70;
    energy = 100;
    magicEnergy = 0;
    world;
    animationAttackTimer = false;

    //SOUNDS
    WALKING_SOUND = new Audio('audio/walking.mp3');
    ATTACK_SOUND = new Audio('audio/attack.mp3');
    JUMP_SOUND = new Audio('audio/jump.mp3');
    HURT_SOUND = new Audio('audio/hurt.mp3');
    COIN_SOUND = new Audio('audio/coincollect.mp3');

    //IMAGES
    IMAGES_WALKING = [
        'img/1_Hero/Musketeer/WALK/tile000.png',
        'img/1_Hero/Musketeer/WALK/tile001.png',
        'img/1_Hero/Musketeer/WALK/tile002.png',
        'img/1_Hero/Musketeer/WALK/tile003.png',
        'img/1_Hero/Musketeer/WALK/tile004.png',
        'img/1_Hero/Musketeer/WALK/tile005.png',
        'img/1_Hero/Musketeer/WALK/tile006.png',
        'img/1_Hero/Musketeer/WALK/tile007.png',
    ];
    IMAGES_JUMPING = [
        'img/1_Hero/Musketeer/JUMP/tile000.png',
        'img/1_Hero/Musketeer/JUMP/tile001.png',
        'img/1_Hero/Musketeer/JUMP/tile002.png',
        'img/1_Hero/Musketeer/JUMP/tile003.png',
        'img/1_Hero/Musketeer/JUMP/tile004.png',
        'img/1_Hero/Musketeer/JUMP/tile005.png',
        'img/1_Hero/Musketeer/JUMP/tile006.png',
    ];
    IMAGES_DEAD = [
        'img/1_Hero/Musketeer/DEAD/tile000.png',
        'img/1_Hero/Musketeer/DEAD/tile001.png',
        'img/1_Hero/Musketeer/DEAD/tile002.png',
        'img/1_Hero/Musketeer/DEAD/tile003.png',
    ];
    IMAGES_HURT = [
        'img/1_Hero/Musketeer/HURT/tile000.png',
        'img/1_Hero/Musketeer/HURT/tile001.png',
    ];
    IMAGES_IDLE = [
        'img/1_Hero/Musketeer/IDLE/tile000.png',
        'img/1_Hero/Musketeer/IDLE/tile000.png',
        'img/1_Hero/Musketeer/IDLE/tile000.png',
        'img/1_Hero/Musketeer/IDLE/tile000.png',
        'img/1_Hero/Musketeer/IDLE/tile001.png',
        'img/1_Hero/Musketeer/IDLE/tile001.png',
        'img/1_Hero/Musketeer/IDLE/tile001.png',
        'img/1_Hero/Musketeer/IDLE/tile003.png',
        'img/1_Hero/Musketeer/IDLE/tile003.png',
        'img/1_Hero/Musketeer/IDLE/tile003.png',
        'img/1_Hero/Musketeer/IDLE/tile004.png',
    ]
    IMAGES_RUN = [
        'img/1_Hero/Musketeer/RUN/tile000.png',
        'img/1_Hero/Musketeer/RUN/tile001.png',
        'img/1_Hero/Musketeer/RUN/tile002.png',
        'img/1_Hero/Musketeer/RUN/tile003.png',
        'img/1_Hero/Musketeer/RUN/tile004.png',
        'img/1_Hero/Musketeer/RUN/tile005.png',
        'img/1_Hero/Musketeer/RUN/tile006.png',
        'img/1_Hero/Musketeer/RUN/tile007.png',
    ];
    IMAGES_ATTACK = [
        'img/1_Hero/Musketeer/ATTACK_1/tile003.png',
        'img/1_Hero/Musketeer/ATTACK_1/tile003.png',
        'img/1_Hero/Musketeer/ATTACK_1/tile003.png',
        'img/1_Hero/Musketeer/ATTACK_1/tile003.png',
        'img/1_Hero/Musketeer/ATTACK_1/tile002.png',
        'img/1_Hero/Musketeer/ATTACK_1/tile003.png',
        'img/1_Hero/Musketeer/ATTACK_1/tile004.png',

    ];
    IMAGES_POWERSHOTATTACK = [
        'img/1_Hero/Musketeer/ATTACK_4/tile000.png',
        'img/1_Hero/Musketeer/ATTACK_4/tile001.png',
        'img/1_Hero/Musketeer/ATTACK_4/tile002.png',
        'img/1_Hero/Musketeer/ATTACK_4/tile003.png',
        'img/1_Hero/Musketeer/ATTACK_4/tile004.png',
    ];

    /**
    * Initializes a new instance of the class, setting up images, gravity, and initial properties.
    * @extends SomeBaseClass
    */
    constructor() {
        super().loadImage('img/1_Hero/Musketeer/WALK/tile000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_POWERSHOTATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.applyGravity();
        this.animate();
        this.x = 50;
        this.changeCharacterVolume();
    }

    /**
    * Starts the animation process for the character by calling necessary game loop and animation loop methods.
    */
    animate() {
        this.characterGameLoop();
        this.animationLoop();
    }

    /**
     * Starts a game loop that performs various character-related actions at regular intervals.
     */
    characterGameLoop() {
        setInterval(() => {
            this.WALKING_SOUND.pause();
            this.walkRight();
            this.walkLeft();
            //this.performAttackSound();
            this.runRight();
            this.runLeft();
            this.performJumpSound();
            this.world.camera_x = -this.x + 60;
        }, 50);
    }

    /**
     * Starts a animation loop that performs various character-related actions at regular intervals.
     */
    animationLoop() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.world.attackTimer && !this.world.attacks.length == 0) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.performAttackSound();
            } else if (this.world.keyboard.S && !this.world.keyboard.SHIFT) {
                this.playAnimation(this.IMAGES_POWERSHOTATTACK);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.world.keyboard.SHIFT) {
                this.playAnimation(this.IMAGES_RUN);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 1000 / 20);
    }

    /**
     * Handles the movement to the right and plays the walking sound if conditions are met.
     */
    walkRight() {
        if (this.world.keyboard.RIGHT && (this.x < this.world.level.levelEndX) && gameIsRunning) {
            this.moveRight();
            this.WALKING_SOUND.play();
        }
    }

    /**
     * Handles the movement to the left and plays the walking sound if conditions are met.
     */
    walkLeft() {
        if (this.world.keyboard.LEFT && this.x > 0 && gameIsRunning) {
            this.moveLeft();
            this.WALKING_SOUND.play();
        };
    }

    /**
     * Plays the attack sound under specific conditions.
     */
    performAttackSound() {
        if (gameIsRunning && !this.animationAttackTimer) {
            this.animationAttackTimer = true;
            this.ATTACK_SOUND.currentTime = 0.2;
            this.ATTACK_SOUND.play();
            if (this.ATTACK_SOUND.currentTime > 0.4) {
                this.ATTACK_SOUND.pause();
            };
        };
        setTimeout(() => {
            this.animationAttackTimer = false;    
        }, 1000);
    }

    /**
     * Handles the movement to the right and plays the walking sound if conditions are met.
     */
    runRight() {
        if (this.world.keyboard.RIGHT && this.world.keyboard.SHIFT && (this.x < this.world.level.levelEndX && gameIsRunning)) {
            this.moveRight();
            this.WALKING_SOUND.play();
        };
    }

    /**
    * Handles the movement to the left and plays the walking sound if conditions are met.
    */
    runLeft() {
        if (this.world.keyboard.LEFT && this.world.keyboard.SHIFT && this.x > 0 && gameIsRunning) {
            this.moveLeft();
            this.WALKING_SOUND.play();
        };
    }

    /**
     * Plays the jump sound under specific conditions.
     */
    performJumpSound() {
        if ((this.world.keyboard.SPACE || this.world.keyboard.UP) && (this.y > 235) && gameIsRunning) {
            this.jump();
            this.JUMP_SOUND.currentTime = 0;
            this.JUMP_SOUND.play();
            if (this.JUMP_SOUND.currentTime > 0.05) {
                this.JUMP_SOUND.pause();
            }
        };
    }

    /**
    * Initiates the character's jump by setting the vertical speed and updates the image if the character is at a specific y-coordinate.
    */
    jump() {
        this.speedY = 35;
        if (this.y == 236.5) {
            this.loadImage('img/1_Hero/Musketeer/WALK/tile000.png');
        }
    }

    /**
    * Increases the character's money and plays a sound effect when a money-related event occurs.
    */
    moneyHit() {
        if (gameIsRunning) {
            this.money += 10;
            this.COIN_SOUND.currentTime = 0.2;
            this.COIN_SOUND.play();
            setTimeout(() => {
                this.COIN_SOUND.pause();
                this.COIN_SOUND.currentTime = 0.2;
            }, 500);
        }
    }

    /**
    * Increases the character's magic energy.
    */
    gainMagicEnergy() {
        this.magicEnergy += 10;
    }

    /**
    * Continuously adjusts the character's volume based on the current game volume status.
    */
    changeCharacterVolume() {
        setInterval(() => {
            if (gameVolumeOn == false) {
                this.characterVolumeOff();
            } else if (gameVolumeOn == true) {
                this.characterVolumeOn();
            }
        }, 10);
    }

    /**
     * Sets the volume of the character sounds to zero.
     */
    characterVolumeOff() {
        this.WALKING_SOUND.volume = 0;
        this.ATTACK_SOUND.volume = 0;
        this.JUMP_SOUND.volume = 0;
        this.HURT_SOUND.volume = 0;
        this.COIN_SOUND.volume = 0;
    }

    /**
     * Sets the volume of the character sounds to one.
     */
    characterVolumeOn() {
        this.WALKING_SOUND.volume = 1;
        this.ATTACK_SOUND.volume = 1;
        this.JUMP_SOUND.volume = 1;
        this.HURT_SOUND.volume = 1;
        this.COIN_SOUND.volume = 1;
    }
}