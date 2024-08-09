/**
 * Represents a magic bar displayed on the screen, used to show a character's magic.
 */
class Statusbar extends DrawableObject {

    //IMAGES
    IMAGES_HEALTH = [
        'img/6_Bars/Healthbar/health0.png',
        'img/6_Bars/Healthbar/health10.png',
        'img/6_Bars/Healthbar/health20.png',
        'img/6_Bars/Healthbar/health30.png',
        'img/6_Bars/Healthbar/health40.png',
        'img/6_Bars/Healthbar/health50.png',
        'img/6_Bars/Healthbar/health60.png',
        'img/6_Bars/Healthbar/health70.png',
        'img/6_Bars/Healthbar/health80.png',
        'img/6_Bars/Healthbar/health90.png',
        'img/6_Bars/Healthbar/health100.png',
    ];

    /**
    * Initializes a new instance of the class with default properties and settings.
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 20;
        this.y = 10;
        this.width = 300;
        this.height = 30;
        this.setPercentage(100);
    }

    /**
    * Sets the percentage value and updates the object's image accordingly.
    */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
    * Determines the index of the image based on the current percentage value.
    */
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
