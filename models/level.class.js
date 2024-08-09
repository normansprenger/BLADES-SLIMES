/**
 * Represents a game level with various elements such as enemies, clouds, coins, and background objects.
 */
class Level{
    enemies;
    clouds;
    coins;
    backgroundObjects;
    levelEndX = 4360;

    /**
     * Creates an instance of the Level class.
     * 
     * Initializes the level with the specified enemies, clouds, coins, and background objects.
     * The `levelEndX` property is set to a default value of 4360, which represents the end point of the level.
     * 
     * @constructor
     * @param {Array<Enemy>} enemies - The array of enemy objects in the level.
     * @param {Array<Cloud>} clouds - The array of cloud objects in the level.
     * @param {Array<Coin>} coins - The array of coin objects in the level.
     * @param {Array<BackgroundObject>} backgroundObjects - The array of background objects in the level.
     */
    constructor(enemies, clouds, coins, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}