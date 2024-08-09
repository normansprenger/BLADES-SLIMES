/**
 * Represents an background object in the game, extending the `MovableObject` class.
 */
class BackgroundObject extends MovableObject {
    height = 480;
    width = 720;

    /**
     * Creates an instance of the class with an image and sets its position.
     * @extends SomeBaseClass
     * @param {string} imagePath - The path to the image to be loaded for the instance.
     * @param {number} x - The x-coordinate for the position of the entity.
     * @param {number} y - The y-coordinate for the position of the entity, which is adjusted based on height.
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height + y;
    }
}