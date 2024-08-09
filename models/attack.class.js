/**
 * Represents an attack object in the game, extending the `MovableObject` class.
 */
class Attack extends MovableObject {

    /**
     * Creates an instance of a class that represents a game entity with a position and dimensions.
     * @extends SomeBaseClass
     * @param {number} x - The x-coordinate for the position of the entity.
     * @param {number} y - The y-coordinate for the position of the entity.
     */
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y + 90;
        this.height = 100;
        this.width = 135;
        this.loadImage('img/1_Hero/Musketeer/ATTACKBOX/tile000.png');
    }
}