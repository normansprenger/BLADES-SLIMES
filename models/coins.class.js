class Coin extends MovableObject{
    offsetX = 0;
    offsetY = 0;
    heightOffsetY=0;
    widthOffsetX=0;

IMAGES_COIN=[
    'img/2_Coins/GOLD/Gold_21.png',
    'img/2_Coins/GOLD/Gold_22.png',
    'img/2_Coins/GOLD/Gold_23.png',
    'img/2_Coins/GOLD/Gold_24.png',
    'img/2_Coins/GOLD/Gold_25.png',
    'img/2_Coins/GOLD/Gold_26.png',
    'img/2_Coins/GOLD/Gold_27.png',
    'img/2_Coins/GOLD/Gold_28.png',
    'img/2_Coins/GOLD/Gold_29.png',
    'img/2_Coins/GOLD/Gold_30.png',
];

constructor(x,y) {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.loadImage('img/2_Coins/GOLD/Gold_21.png');
    this.x = x;
    this.y = y;
    this.width =50;
    this.height = 50;
    this.animate();
    
}

animate(){
    setInterval(() => {
        this.playAnimation(this.IMAGES_COIN);
    }, 1000/10);
}

collected(){
    this.y -= 500;
}

}