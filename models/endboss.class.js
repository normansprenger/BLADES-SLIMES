class Endboss extends MovableObject {

    height = 600;
    width = 600;
    y = -130;
    widthOffsetX = 320;
    offsetX = 130;
    heightOffsetY = 400;
    offsetY = 460;
    energy = 100;
    speed = 1;
    t = 0;
    counter = 0;
    characterNearEndboss = false;



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


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);

        this.x = 4160;
        this.animate();



    }

    animate() {

        setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                if (this.counter < 10) {
                    this.x += 5;
                    this.counter++;
                }
            } else if (this.energy == 0) {
                this.playAnimation(this.IMAGES_DEAD);
                if (this.t < 20) {
                    this.x += 8;
                    this.y += 8;
                    this.t++;
                }
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 140);


        setInterval(() => {
            if (world?.character) {
                if (this.energy > 0 && world.character.x > 3500) {
                    this.characterNearEndboss = true;
                }
                if (this?.characterNearEndboss == true) {
                    this.moveLeft();
                }
            }
        }, 1000 / 60);

    }



}
