/**
 * Represents a drawable object in a graphical environment.
 */
class DrawableObject {

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
    offsetY = 0;

    /*
    * Loads an image from the specified path and assigns it to the object's `img` property.
    * 
    * This method performs the following actions:
    * - Creates a new `Image` object.
    * - Sets the `src` attribute of the `Image` object to the provided path, initiating the image loading process.
    * 
    * @param {string} path - The path to the image file to be loaded.
    */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
    * Draws the object's image onto the provided canvas context.
    * 
    * This method performs the following actions:
    * - Draws the image represented by the `img` property onto the canvas at the position specified by `x` and `y`.
    * - The size of the drawn image is determined by the `width` and `height` properties.
    * 
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas where the image will be drawn.
    */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
    * Loads multiple images from the specified paths and stores them in the image cache.
    * 
    * This method performs the following actions:
    * - Iterates over an array of image paths.
    * - For each path, creates a new `Image` object and sets its `src` attribute to the path.
    * - Stores the loaded `Image` object in the `imageCache` with the path as the key.
    * 
    * @param {string[]} arr - An array of strings, where each string is the path to an image file.
    */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
    * Draws a bounding box around the object on the canvas context if the object is an instance
    * of certain classes (e.g., `Character`, `Slime`, `Endboss`, `Attack`, `Powershot`).
    * 
    * This method performs the following actions:
    *   - it draws a red bounding box around the object.
    *   - The bounding box is outlined with a line width of 0.5 and a red stroke color.
    *   - The position and size of the bounding box are adjusted using `offsetX`, `offsetY`, `widthOffsetX`, and `heightOffsetY`.
    * 
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas where the bounding box will be drawn.
    */
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