class Coinbar extends DrawableObject {
    IMAGES_COINS = [
        'img/6_Bars/Coinsbar/coin0.png',
        'img/6_Bars/Coinsbar/coin10.png',
        'img/6_Bars/Coinsbar/coin20.png',
        'img/6_Bars/Coinsbar/coin30.png',
        'img/6_Bars/Coinsbar/coin40.png',
        'img/6_Bars/Coinsbar/coin50.png',
        'img/6_Bars/Coinsbar/coin60.png',
        'img/6_Bars/Coinsbar/coin70.png',
        'img/6_Bars/Coinsbar/coin80.png',
        'img/6_Bars/Coinsbar/coin90.png',
        'img/6_Bars/Coinsbar/coin100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 20;
        this.y = 60;
        this.width = 270;
        this.height = 30;
        this.setPercentage(0);

    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 10;
        } else if
            (this.percentage == 90) {
            return 9;
        } else if
            (this.percentage == 80) {
            return 8;
        } else if
            (this.percentage == 70) {
            return 7;
        } else if
            (this.percentage == 60) {
            return 6;
        } else if
            (this.percentage == 50) {
            return 5;
        } else if
            (this.percentage == 40) {
            return 4;
        } else if
            (this.percentage == 30) {
            return 3;
        } else if
            (this.percentage == 20) {
            return 2;
        } else if
            (this.percentage == 10) {
            return 1;
        } else if
            (this.percentage == 0) {
            return 0;
        }
    }
}