/**
 * Represents the game world, including the character, level, and various UI elements.
 */
class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    coinBar = new Coinbar();
    magicBar = new Magicbar();
    attacks = [];
    powershots = [];
    POWERSHOT_SOUND = new Audio('audio/magicpowershot.mp3');

    /**
    * Creates an instance of the `World` class and initializes game components.
    */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.createAttack();
        this.createPowerShot();
        this.checkAttackCollisions();
        this.checkPowershotCollisions();
        this.checkCoinCollisions();
        this.changeGameVolume();
    }

    /**
     * Checks if character collides with enemy
     */
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.characterEnemyCollision(enemy);
                }
            });
        }, 500);
    }

    /**
     * Reduces characters life energy, plays hut sound, if specific requirements are true.
     */
    characterEnemyCollision(enemy) {
        if (enemy.energy > 0 && this.character.energy > 0 && gameIsRunning == true) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
            this.character.HURT_SOUND.currentTime = 0.2;
            this.character.HURT_SOUND.play();
            setTimeout(() => {
                this.character.HURT_SOUND.currentTime = 0;
                this.character.HURT_SOUND.pause();
            }, 200);
        }
    }

    /**
    * Checks for collisions between attacks and enemies, and applies damage if a collision is detected.
    * Additionally, it manages magic energy for the character and updates the magic bar.
    */
    checkAttackCollisions() {
        setInterval(() => {
            if (this.attacks[0]) {
                this.level.enemies.forEach((enemy) => {
                    if (this.attacks[0].isColliding(enemy) && enemy.energy > 0) {
                        enemy.hit();
                        if (this.character.magicEnergy < 100) {
                            this.character.gainMagicEnergy();
                        }
                        this.magicBar.setPercentage(this.character.magicEnergy);
                    }
                });
            }
        }, 100);
    }

    /**
     * checks if powershot is colliding with enemy continously and let them be hit.
     */
    checkPowershotCollisions() {
        setInterval(() => {
            if (this.powershots[0]) {
                this.level.enemies.forEach((enemy) => {
                    if (this.powershots[0]?.isColliding(enemy) && enemy.energy > 0) {
                        enemy.hit();
                        enemy.hit();
                        this.powershots = [];
                    }
                });
            }
        }, 100);
    }

    /**
     * checks if character is colliding with coin,set coinbars percentage.
     */
    checkCoinCollisions() {
        setInterval(() => {
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.character.moneyHit();
                    coin.collected();
                    this.coinBar.setPercentage(this.character.money);
                }
            });
        }, 50);
    }

    /**
    * Creates a new attack when certain conditions are met and adds it to the `attacks` array.
    * The method periodically checks if an attack should be created based on keyboard input 
    * and the character's position.
    */
    createAttack() {
        setInterval(() => {
            if (world.keyboard.A && !world.keyboard.SHIFT && this.attacks.length == 0 && world.character.y > 235) {
                let newAttack = new Attack(this.character.x, this.character.y);
                this.attacks.push(newAttack);
                setTimeout(() => {
                    this.attacks = [];
                }, 100);
            }
        }, 10);
    }

    /**
    * Creates a new powershot when certain conditions are met and adds it to the `powershots` array.
    * The method periodically checks if an attack should be created based on keyboard input 
    * and the character's position.
    */
    createPowerShot() {
        setInterval(() => {
            if (world.keyboard.S && !world.keyboard.SHIFT && this.powershots.length == 0 && world.character.y > 235 && world.character.magicEnergy >= 20) {
                let newPowershot = new Powershot(this.character.x, this.character.y);
                this.powershots.push(newPowershot);
                this.POWERSHOT_SOUND.currentTime = 0;
                this.POWERSHOT_SOUND.play();
                world.character.magicEnergy -= 20;
                setTimeout(() => {
                    this.powershots = [];
                }, 1200);
            }
            this.magicBar.setPercentage(world.character.magicEnergy);
        }, 10);
    }

    /**
    * Clears the canvas, translates the canvas context based on the camera's position,
    * and draws all elements including background objects, character, clouds, coins,
    * status bars, enemies, attacks, and power shots. 
    * Handles the animation loop by requesting the next animation frame.
    */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.magicBar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.attacks);
        this.addObjectsToMap(this.powershots);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
    * Adds a collection of objects to the map by calling `addToMap` for each object.
    */
    addObjectsToMap(objects) {
        objects.forEach(object => { this.addToMap(object); })
    }

    /**
    * Draws a `DrawableObject` onto the canvas. If the object is facing the opposite direction,
    * it flips the image before drawing and then flips it back to its original orientation.
    */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImg(mo);
        }
        mo.draw(this.ctx);
        //mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImgBack(mo);
        }
    }

    /**
    * Flips the image of the given `DrawableObject` horizontally by translating and scaling the canvas context.
    * Adjusts the object's `x` position to maintain its location after flipping.
    */
    flipImg(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
    * Restores the canvas context to its original state and reverts the `x` position of the given
    * `DrawableObject` back to its pre-flipped state.
    */
    flipImgBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /**
    * Sets the current world instance on the character object, allowing the character to interact
    * with the world and its elements.
    */
    setWorld() {
        this.character.world = this;
    }

    /**
    * Continuously updates the volume of the game sound based on the global `gameVolumeOn` state.
    * If `gameVolumeOn` is false, the volume of the `POWERSHOT_SOUND` is set to 0. If true, 
    * the volume is set to 1.
    */
    changeGameVolume() {
        setInterval(() => {
            if (gameVolumeOn == false) {
                this.POWERSHOT_SOUND.volume = 0;
            } else if (gameVolumeOn == true) {
                this.POWERSHOT_SOUND.volume = 1;
            }
        }, 10);
    }
}