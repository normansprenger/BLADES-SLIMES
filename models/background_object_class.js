class BackgroundObject extends MovableObject {
    height = 480;
    width = 720;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height +y;
    }
}