class Character extends MovableObject {

    speed = 5;
    y = 180;
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
    world;
    WALKING_SOUND = new Audio('audio/walking.mp3');

    constructor() {
        super().loadImage('img/1_Hero/Musketeer/WALK/tile000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
        this.x = 50;
    }

    animate() {

        setInterval(() => {
            this.WALKING_SOUND.pause();
            if (this.world.keyboard.RIGHT && (this.x < this.world.level.levelEndX)) {
                this.x += this.speed;
                this.otherDirection = false;
                this.WALKING_SOUND.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }


            if (this.world.keyboard.UP ) {
                this.speedY = 10;
            }
            this.world.camera_x = -this.x + 60;
        },50);


        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 140);
    }


    jump() {

    }
}