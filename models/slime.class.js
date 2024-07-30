class Slime extends MovableObject {

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

    constructor() {
        super().loadImage('img/3_Slimes/Blue_Slime/WALK/tile000.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + (Math.random() * 500);
        this.speed = 0.15 + Math.random() * 0.45;
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 140);
        
    }
}