let canvas;
let world;
let keyboard = new Keyboard();
let gameIsRunning = false;
let GAME_SOUND = new Audio('audio/gamemusic.mp3');
let DEADANDRETRY_SOUND = new Audio('audio/deadAndRetry.mp3');
let SUCCESSSCREEN_SOUND = new Audio('audio/successScreen.mp3');
changeGameMusicVolume();

function startGame() {
    if (gameIsRunning == false) {
        initLevel();
        document.getElementById('homeScreen').classList.add('dnone');
        initGame();
        gameIsRunning = true;
        startGameMusic();
    }
}

setInterval(() => {
    if (world?.level.enemies[10].energy == 0 && world.character.x > 4360 && world.character.money == 100 && gameIsRunning == true) {
        gameIsRunning = false;
        gameFinishedSuccess();
    } else if (world?.character.energy == 0 && gameIsRunning == true) {
        gameIsRunning = false;
        gameFinishedFailure();
    }
}, 100);


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





function gameFinishedSuccess() {
    document.getElementById('endScreenSuccess').classList.remove('dnone');
    GAME_SOUND.pause();
    SUCCESSSCREEN_SOUND.currentTime = 1;
    SUCCESSSCREEN_SOUND.play();
}

function gameFinishedFailure() {
    document.getElementById('endScreenDead').classList.remove('dnone');
    GAME_SOUND.pause();
    DEADANDRETRY_SOUND.currentTime = 0;
    DEADANDRETRY_SOUND.play();
}

function resetGame() {
    gameIsRunning = false;
    document.getElementById('homeScreen').classList.remove('dnone');
    document.getElementById('endScreenDead').classList.add('dnone');
    document.getElementById('endScreenSuccess').classList.add('dnone');
    initLevel();
    initGame();
    GAME_SOUND.pause();
    DEADANDRETRY_SOUND.pause();
    SUCCESSSCREEN_SOUND.pause();
}

function startGameMusic() {
    GAME_SOUND.currentTime = 0;
    GAME_SOUND.play();
}

function changeGameMusicVolume() {
    setInterval(() => {
        if (gameVolumeOn == false) {
            GAME_SOUND.volume = 0;
            DEADANDRETRY_SOUND.volume = 0;
            SUCCESSSCREEN_SOUND.volume = 0;
        } else if (gameVolumeOn == true) {
            GAME_SOUND.volume = 1;
            DEADANDRETRY_SOUND.volume = 1;
            SUCCESSSCREEN_SOUND.volume = 1;
        }
    }, 10);
}

