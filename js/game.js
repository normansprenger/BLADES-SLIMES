let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('my character is ', world.character )

}

document.addEventListener('keydown', (event)=>{
    if (event.keyCode == 39){
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 38){
        keyboard.UP = true;
    }
    if (event.keyCode == 37){
        keyboard.LEFT = true;
    }
    if (event.keyCode == 40){
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32){
        keyboard.SPACE = true;
    }
    if (event.keyCode == 69){
        keyboard.E = true;
    }
    if (event.keyCode == 82){
        keyboard.R = true;
    }
    if (event.keyCode == 70){
        keyboard.F = true;
    }
})

document.addEventListener('keyup', (event)=>{
    if (event.keyCode == 39){
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 38){
        keyboard.UP = false;
    }
    if (event.keyCode == 37){
        keyboard.LEFT = false;
    }
    if (event.keyCode == 40){
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32){
        keyboard.SPACE = false;
    }
    if (event.keyCode == 69){
        keyboard.E = false;
    }
    if (event.keyCode == 82){
        keyboard.R = false;
    }
    if (event.keyCode == 70){
        keyboard.F = false;
    }
})