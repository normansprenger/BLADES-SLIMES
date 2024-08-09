let gameVolumeOn = true;

/**
 * Checks if the document is currently in fullscreen mode.
 *
 * This function determines if the document is in fullscreen mode by checking
 * for the presence of a fullscreen element.
 * 
 * @returns {number} Returns `1` if the document is in fullscreen mode, otherwise `-1`.
 */
function fs_status() {
    if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement)
        return 1;
    else
        return -1;
}

/** 
 * Toggles the document's fullscreen mode based on the current state.
*/
function changeScreensize() {
    if (fs_status() == -1) {
        activateFullscreen();
    } else if (fs_status() == 1) {
        deactivateFullscreen();
    }
}

/** 
 * Activates the document's fullscreen mode.
*/
function activateFullscreen() {
    document.getElementById('canvasContainer').requestFullscreen();
    document.getElementById('settingScreensize').classList.add('minimize');
    document.getElementById('homeScreen').classList.add('fullscreen');
    document.getElementById('canvas').classList.add('fullscreen');
    document.getElementById('endScreenSuccess').classList.add('fullscreen');
    document.getElementById('endScreenDead').classList.add('fullscreen');
    document.getElementById('buttonOverlay').classList.add('fullscreen');
}

/** 
 * Deactivates the document's fullscreen mode.
*/
function deactivateFullscreen() {
    document.exitFullscreen();
    document.getElementById('settingScreensize').classList.remove('minimize');
    document.getElementById('homeScreen').classList.remove('fullscreen');
    document.getElementById('canvas').classList.remove('fullscreen');
    document.getElementById('endScreenSuccess').classList.remove('fullscreen');
    document.getElementById('endScreenDead').classList.remove('fullscreen');
    document.getElementById('buttonOverlay').classList.remove('fullscreen');
}

/** 
 * Toggles the boolean variable gameVolumeOn and adds/removes the class soundOn of the element 
 * with the ID 'settingSound'.
*/
function toggleGameVolume() {
    if (gameVolumeOn == true) {
        gameVolumeOn = false;
        document.getElementById('settingSound').classList.add('soundOn');
    } else if (gameVolumeOn == false) {
        gameVolumeOn = true;
        document.getElementById('settingSound').classList.remove('soundOn');
    }
}

