/**
 * Represents an object that can be moved and drawn on the canvas.
 */
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

    /**
    * Applies gravity to the object, affecting its vertical movement.
    */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
    * Determines if the object is above the ground level.
    */
    isAboveGround() {
        return this.y < 235;
    }

    /**
    * Moves the object to the right by updating its horizontal position.
    */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
    * Moves the object to the left by updating its horizontal position.
    */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    /**
    * Plays an animation by cycling through a sequence of images.
    */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
    * Checks if this object is colliding with another object.
    */
    isColliding(mo) {
        return (((this.x + this.offsetX + this.width - this.widthOffsetX) > (mo.x + mo.offsetX)) &&
            ((this.x + this.offsetX) < (mo.x + mo.offsetX + mo.width - mo.widthOffsetX)) &&
            ((this.y + this.offsetY + this.height - this.heightOffsetY) > (mo.y + mo.offsetY)) &&
            ((this.y + this.offsetY) < (mo.y + mo.offsetY + mo.height - mo.heightOffsetY))
        )
    }

    /**
    * Reduces the object's energy by 10 units when it is hit.
    */
    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
    * Determines if the object is currently in a "hurt" state based on the time elapsed since the last hit.
    */
    isHurt() {
        let timespan = new Date().getTime() - this.lastHit;
        timespan = timespan / 1000;
        return timespan < 0.2;
    }

    /**
    * Checks if the object is dead based on its energy level.
    */
    isDead() {
        return this.energy <= 0;
    }
}