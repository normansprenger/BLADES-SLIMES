let canvas;
let world;
let keyboard = new Keyboard();

function startGame() {
    initLevel();
    document.getElementById('homeScreen').classList.add('dnone');
    initGame();
}

function initGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 69) {
        keyboard.E = true;
    }
    if (event.keyCode == 82) {
        keyboard.R = true;
    }
    if (event.keyCode == 70) {
        keyboard.F = true;
    }
    if (event.keyCode == 16) {
        keyboard.SHIFT = true;
    }
    if (event.keyCode == 65) {
        keyboard.A = true;
    }
    if (event.keyCode == 83) {
        keyboard.S = true;
    }
})

document.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 69) {
        keyboard.E = false;
    }
    if (event.keyCode == 82) {
        keyboard.R = false;
    }
    if (event.keyCode == 70) {
        keyboard.F = false;
    }
    if (event.keyCode == 16) {
        keyboard.SHIFT = false;
    }
    if (event.keyCode == 65) {
        keyboard.A = false;
    }
    if (event.keyCode == 83) {
        keyboard.S = false;
    }
})

setInterval(() => {
    if (world?.level.enemies[10].energy == 0 && world.character.x > 4360 && world.character.money == 100) {
        setTimeout(() => {
            gameFinishedSuccess();
        }, 1000);
    }
    else if (world?.character.energy == 0) {
        gameFinishedFailure();
    }
}, 100);

function gameFinishedSuccess() {
    document.getElementById('endScreenSuccess').classList.remove('dnone');
}

function gameFinishedFailure() {
    document.getElementById('endScreenDead').classList.remove('dnone');
}

function resetGame() {
    document.getElementById('homeScreen').classList.remove('dnone');
    document.getElementById('endScreenDead').classList.add('dnone');
    document.getElementById('endScreenSuccess').classList.add('dnone');
    initLevel();
    initGame();

}


