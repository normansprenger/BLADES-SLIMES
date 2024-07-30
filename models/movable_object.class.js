class MovableObject {
    x = 100;
    y = 290;
    img;
    height = 180;
    width = 180;
    imageCache={};
    currentImage = 0;
    otherDirection = false;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path]= img; 
        });

    }

    moveRight() {
        console.log('movingRight')
    }

    moveLeft(){
        setInterval(()=>{this.x -= this.speed}, 1000/60); 
    }
}