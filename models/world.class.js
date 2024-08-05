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

    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    if(enemy.energy > 0){
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    }
                }
            });
        }, 500);
    }

    checkAttackCollisions() {
        setInterval(() => {
            if (this.attacks[0]) {
                this.level.enemies.forEach((enemy) => {
                    if (this.attacks[0].isColliding(enemy) && enemy.energy > 0) {
                        enemy.hit();
                        if(this.character.magicEnergy < 100){
                        this.character.gainMagicEnergy();
                        }
                        this.magicBar.setPercentage(this.character.magicEnergy);
                    }
                });
            }
        }, 100);
    }

    checkPowershotCollisions() {
        setInterval(() => {
            if (this.powershots[0]) {
                this.level.enemies.forEach((enemy) => {
                    if (this.powershots[0]?.isColliding(enemy) && enemy.energy > 0) {
                        enemy.hit();
                        enemy.hit();
                        if(this.character.magicEnergy < 100){
                        this.character.gainMagicEnergy();
                        }
                        this.magicBar.setPercentage(this.character.magicEnergy);
                        this.powershots=[];
                    }
                });
            }
        }, 100);
    }

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


    createAttack() {
        setInterval(() => {
            if (world.keyboard.A && !world.keyboard.SHIFT && this.attacks.length == 0 && world.character.y > 285) {
                let newAttack = new Attack(this.character.x, this.character.y);
                this.attacks.push(newAttack);
                setTimeout(() => {
                    this.attacks = [];
                }, 300);
            }
        }, 10);
    }

    createPowerShot(){
        setInterval(() => {
            if (world.keyboard.S && !world.keyboard.SHIFT && this.powershots.length == 0 && world.character.y > 285 && world.character.magicEnergy >= 20) {
                let newPowershot = new Powershot(this.character.x, this.character.y);
                this.powershots.push(newPowershot);
                world.character.magicEnergy -=20;
                this.magicBar.setPercentage(world.character.magicEnergy);
                setTimeout(() => {
                    this.powershots = [];
                }, 1200);
            }
        }, 10); 
    }

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

    addObjectsToMap(objects) {
        objects.forEach(object => { this.addToMap(object); })
    }

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

    flipImg(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImgBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    setWorld() {
        this.character.world = this;
    }
}