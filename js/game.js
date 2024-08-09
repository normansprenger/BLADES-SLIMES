let canvas;
let world;
let keyboard = new Keyboard();
let gameIsRunning = false;
let GAME_SOUND = new Audio('audio/gamemusic.mp3');
let DEADANDRETRY_SOUND = new Audio('audio/deadAndRetry.mp3');
let SUCCESSSCREEN_SOUND = new Audio('audio/successScreen.mp3');
changeGameMusicVolume();

/**
 * This function starts the game. The boolean variable gameIsRunning has to be false.
 * Adds the class "dnone" to the element with the ID 'homeScreen'.
 */
function startGame() {
    if (gameIsRunning == false) {
        initLevel();
        document.getElementById('homeScreen').classList.add('dnone');
        initGame();
        gameIsRunning = true;
        startGameMusic();
    }
}

/**
 * Periodically checks game conditions and triggers the appropriate end game scenario.
 */
setInterval(() => {
    if (world?.level.enemies[10].energy == 0 && world.character.x >= 4358 && world.character.money == 100 && gameIsRunning == true) {
        gameIsRunning = false;
        gameFinishedSuccess();
    } else if (world?.character.energy == 0 && gameIsRunning == true) {
        gameIsRunning = false;
        gameFinishedFailure();
    }
}, 100);

/**
 * Initializes the game by setting up the canvas and creating the game world.
 */
function initGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * Adds an event listener to the document to handle keyboard input.
 *
 * This event listener listens for `keydown` events and sets the corresponding 
 * properties in the `keyboard` object to `true` when specific keys are pressed.
 */
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

/**
 * Adds an event listener to the document to handle keyboard input.
 *
 * This event listener listens for `keyup` events and sets the corresponding 
 * properties in the `keyboard` object to `false` when specific keys are not pressed.
 */
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

/**
 * Handles the actions to be performed when the game is successfully completed.
 */
function gameFinishedSuccess() {
    document.getElementById('endScreenSuccess').classList.remove('dnone');
    GAME_SOUND.pause();
    SUCCESSSCREEN_SOUND.currentTime = 1;
    SUCCESSSCREEN_SOUND.play();
}

/**
 * Handles the actions to be performed when the game ends in failure.
 */
function gameFinishedFailure() {
    document.getElementById('endScreenDead').classList.remove('dnone');
    GAME_SOUND.pause();
    DEADANDRETRY_SOUND.currentTime = 0;
    DEADANDRETRY_SOUND.play();
}

/**
 * Resets the game to its initial state, preparing it for a new playthrough.
 */
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

/**
 * Starts the game music
 */
function startGameMusic() {
    GAME_SOUND.currentTime = 0;
    GAME_SOUND.play();
}

/**
 * Adjusts the game music volume based on the current state of the `gameVolumeOn` variable.
 */
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

