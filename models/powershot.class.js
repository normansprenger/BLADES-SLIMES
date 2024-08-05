class Powershot extends MovableObject {
    speed= 10;

IMAGES_POWERSHOT=[
    'img/1_Hero/Musketeer/POWERSHOT/tile000.png',
    'img/1_Hero/Musketeer/POWERSHOT/tile001.png',
    'img/1_Hero/Musketeer/POWERSHOT/tile002.png',
    'img/1_Hero/Musketeer/POWERSHOT/tile003.png',
]

    constructor(x, y) {
        super();
        this.x = x + 120 ;
        this.y = y + 90;
        this.height = 80;
        this.width = 80;
        this.loadImages(this.IMAGES_POWERSHOT);
        this.loadImage('img/1_Hero/Musketeer/POWERSHOT/tile000.png');
        this.animate();
    }

    animate() {
        setInterval(() => {
                this.moveRight();
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGES_POWERSHOT);
        }, 120);
    }
}