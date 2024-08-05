class Attack extends MovableObject {

    constructor(x, y) {
        super();
        this.x = x ;
        this.y = y + 90;
        this.height = 100;
        this.width = 135;
        this.loadImage('img/1_Hero/Musketeer/ATTACKBOX/tile000.png');
    }

}