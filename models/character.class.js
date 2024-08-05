class Character extends MovableObject {
    speed = 8;
    y = 284;
    acceleration = 2.5;
    speedY = 0;
    money = 0;
    offsetX = 60;
    offsetY = 80;
    widthOffsetX = 135;
    heightOffsetY = 70;
    energy = 100;
    magicEnergy = 0;

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

    world;
    WALKING_SOUND = new Audio('audio/walking.mp3');

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
    }

    animate() {

        setInterval(() => {
            this.WALKING_SOUND.pause();
            if (this.world.keyboard.RIGHT && (this.x < this.world.level.levelEndX)) {
                this.moveRight();
                this.WALKING_SOUND.play();
            }

            if (this.world.keyboard.RIGHT && this.world.keyboard.SHIFT && (this.x < this.world.level.levelEndX)) {
                this.moveRight();
                this.WALKING_SOUND.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.WALKING_SOUND.play();
            }

            if (this.world.keyboard.LEFT && this.world.keyboard.SHIFT && this.x > 0) {
                this.moveLeft();
                this.WALKING_SOUND.play();
            }

            if ((this.world.keyboard.SPACE || this.world.keyboard.UP) && (this.y > 285)) {
                this.jump();
            }
            this.world.camera_x = -this.x + 60;
        }, 50);


        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (world.keyboard.A && !world.keyboard.SHIFT && world.character.y > 285) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.world.keyboard.S && !this.world.SHIFT) {
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

    jump() {
        this.speedY = 35;
        if (this.y == 286.5) {
            this.loadImage('img/1_Hero/Musketeer/WALK/tile000.png');
        }
    }

    moneyHit() {
        this.money += 10;
    }

    gainMagicEnergy() {
        this.magicEnergy += 10;
    }
}