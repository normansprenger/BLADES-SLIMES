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

    constructor() {
        super().loadImage('img/1_Hero/Musketeer/WALK/tile000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.x = 50;
    }

    animate() {


        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                //WALKANIMATIONRIGHT
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 140);
    }


    jump() {

    }
}