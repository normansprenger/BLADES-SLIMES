class Endboss extends MovableObject {

    height = 600;
    width = 600;
    y = -130;
    widthOffsetX = 320;
    offsetX = 130;
    heightOffsetY = 400;
    offsetY = 460;
    energy = 70;
    speed = 1;



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

    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 4260;
        this.animate();



    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 140);


        setInterval(() => {

            if (this.energy > 0 && world.character.x > 3000) {
                this.moveLeft();
            }
        }, 1000/60);

    }



}
