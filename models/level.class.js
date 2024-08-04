class Level{
    enemies;
    clouds;
    coins;
    backgroundObjects;
    levelEndX = 4360;

    constructor(enemies, clouds, coins, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}