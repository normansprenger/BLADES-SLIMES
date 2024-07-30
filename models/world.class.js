class World {
    character = new Character();
    enemies = [
        new Slime(),
        new Slime(),
        new Slime(),
    ];
    clouds = [
        new Cloud(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/4_Background/nature_1/1.png', 0,0),
        new BackgroundObject('img/4_Background/nature_1/2.png', 0,0),
        new BackgroundObject('img/4_Background/nature_1/3.png', 0,0),
        new BackgroundObject('img/4_Background/nature_1/5.png', 0,0),
        new BackgroundObject('img/4_Background/nature_1/6.png', 0,0),
        new BackgroundObject('img/4_Background/nature_1/6.png', 0,0),
        new BackgroundObject('img/4_Background/nature_1/7.png', 100,0),
        new BackgroundObject('img/4_Background/nature_1/8.png', 0,0),
        new BackgroundObject('img/4_Background/nature_1/10.png', 0,90),
        new BackgroundObject('img/4_Background/nature_1/1.png', 720,0),
        new BackgroundObject('img/4_Background/nature_1/2.png', 720,0),
        new BackgroundObject('img/4_Background/nature_1/3.png', 720,0),
        new BackgroundObject('img/4_Background/nature_1/8.png', 720,0),
        new BackgroundObject('img/4_Background/nature_1/10.png', 720,90),
        new BackgroundObject('img/4_Background/nature_2/1.png', 1040,0),
        new BackgroundObject('img/4_Background/nature_2/2.png', 1040,90),
        new BackgroundObject('img/4_Background/nature_2/3.png', 1040,0),
        new BackgroundObject('img/4_Background/nature_2/4.png', 1040,0),
        new BackgroundObject('img/4_Background/nature_1/10.png', 1040,90),

        
    ];

    ctx;
    canvas;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x,0);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.ctx.translate(-this.camera_x,0);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => { this.addToMap(object); })
    }

    addToMap(mo) {
        if(mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1,1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection){
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }

    setWorld(){
        this.character.world = this;
    }

}