class Slime extends MovableObject {
    height = 300;
    width = 300;
    y = 120;
    widthOffsetX = 170;
    offsetX = 80;
    heightOffsetY = 200;
    offsetY = 230;
    energy = 10;
    t=0;


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

    constructor(x) {
        super().loadImage('img/3_Slimes/Blue_Slime/WALK/tile000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.energy = 10;
        this.x = x + (Math.random() * 100);
        this.speed =  0.10 + Math.random() * 0.45;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            }
        }, 1000 / 60);


        setInterval(() => {
            if (this.energy < 1) {
                this.playAnimation(this.IMAGES_DEAD);
                if(this.t<20){
                    this.x += 10;
                    this.y += 10;
                    this.t++;
                }

            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 120);
    }
}