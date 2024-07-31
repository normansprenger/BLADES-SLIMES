class Character extends MovableObject {

    speed = 5;
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
    world;
    WALKING_SOUND = new Audio('audio/walking.mp3');

    constructor() {
        super().loadImage('img/1_Hero/Musketeer/WALK/tile000.png');
        this.loadImages(this.IMAGES_WALKING);
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
        }, 1000 / 60);

        setInterval(() => {
            this.WALKING_SOUND.pause();
            if (this.world.keyboard.LEFT && this.x > 0) {

                this.x -= this.speed;
                this.otherDirection = true;
                this.WALKING_SOUND.play();
            }
            this.world.camera_x = -this.x + 60;
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                //WALKANIMATIONRIGHT
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 140);
    }


    jump() {

    }
}