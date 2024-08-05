class Magicbar extends DrawableObject{
    IMAGES_MAGICBAR = [
        'img/6_Bars/Magicbar/magic0.png',
        'img/6_Bars/Magicbar/magic10.png',
        'img/6_Bars/Magicbar/magic20.png',
        'img/6_Bars/Magicbar/magic30.png',
        'img/6_Bars/Magicbar/magic40.png',
        'img/6_Bars/Magicbar/magic50.png',
        'img/6_Bars/Magicbar/magic60.png',
        'img/6_Bars/Magicbar/magic70.png',
        'img/6_Bars/Magicbar/magic80.png',
        'img/6_Bars/Magicbar/magic90.png',
        'img/6_Bars/Magicbar/magic100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_MAGICBAR);
        this.x = 20;
        this.y = 50;
        this.width = 300;
        this.height = 30;
        this.setPercentage(0);

    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_MAGICBAR[this.resolveImageIndex()];
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