class MovableObject extends DrawableObject {
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    offsetX = 0;
    offsetY = 0;
    widthOffsetX = 0;
    heightOffsetY = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 285;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    //(this.x + this.offsetX, this.y + this.offsetY, this.width - this.widthOffsetX, this.height - this.heightOffsetY)
    isColliding(mo) {
        return (((this.x + this.offsetX + this.width - this.widthOffsetX) > (mo.x + mo.offsetX)) && //rechteKante über linke
            ((this.x + this.offsetX) < (mo.x + mo.offsetX + mo.width - mo.widthOffsetX)) &&  //linke vor rechter
            ((this.y + this.offsetY + this.height - this.heightOffsetY) > (mo.y + mo.offsetY)) && //rechteKante über linke
            ((this.y + this.offsetY) < (mo.y + mo.offsetY + mo.height - mo.heightOffsetY))
        )
    }
    //        return (this.x + this.offsetX) + (this.width - this.widthOffsetX) > mo.x + mo.offsetX &&
    //            (this.y + this.offsetY) + (this.height - this.heightOffsetY) > mo.y + mo.offsetY &&
    //            this.x + this.offsetX < mo.x + mo.offsetX &&
    //            this.y + this.offsetY < mo.y + mo.offsetY + mo.height - mo.heightOffsetY;


    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timespan = new Date().getTime() - this.lastHit;
        timespan = timespan / 1000;
        return timespan < 0.2;
    }

    isDead() {
        return this.energy == 0;
    }
}