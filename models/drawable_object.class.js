class DrawableObject{

    img;
    imageCache = {};
    currentImage = 0;
    x = 100;
    y = 240;
    height = 180;
    width = 180;
    widthOffsetX = 0;
    heightOffsetY = 0;
    offsetX = 0;
    offsetY= 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Slime || this instanceof Endboss || this instanceof Attack || this instanceof Powershot) {
            ctx.beginPath();
            ctx.lineWidth = '0.5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width - this.widthOffsetX, this.height - this.heightOffsetY);
            ctx.stroke();
        }
    }
}