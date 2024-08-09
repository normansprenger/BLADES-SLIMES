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
        this.changeBossMusicVolume();



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
                if (this.t < 30) {
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
                if (this.energy <= 0 || !gameIsRunning) {
                    this.characterNearEndboss = false;
                    this.BOSSMUSIC.pause();
                }
                if(this.energy<=0 && gameIsRunning){
                    GAME_SOUND.play();
                }

                if (this.energy > 0 && world.character.x > 3500 && gameIsRunning && this.energy > 0) {
                    this.characterNearEndboss = true;
                    GAME_SOUND.pause();
                    this.BOSSMUSIC.play();
                }
                if (this.characterNearEndboss && this.x > 200) {
                    this.moveLeft();
                }
            }
        }, 10);

    }

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
