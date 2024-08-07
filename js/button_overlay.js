let gameVolumeOn = true;

function changeScreensize() {
    if (fs_status() == -1) {
        document.getElementById('body').requestFullscreen();
        document.getElementById('settingScreensize').classList.add('minimize');
        document.getElementById('homeScreen').classList.add('fullscreen');
        document.getElementById('canvas').classList.add('fullscreen');
        document.getElementById('endScreenSuccess').classList.add('fullscreen');
        document.getElementById('endScreenDead').classList.add('fullscreen');
        document.getElementById('buttonOverlay').classList.add('fullscreen');
    } else if (fs_status() == 1) {
        document.exitFullscreen();
        document.getElementById('settingScreensize').classList.remove('minimize');
        document.getElementById('homeScreen').classList.remove('fullscreen');
        document.getElementById('canvas').classList.remove('fullscreen');
        document.getElementById('endScreenSuccess').classList.remove('fullscreen');
        document.getElementById('endScreenDead').classList.remove('fullscreen');
        document.getElementById('buttonOverlay').classList.remove('fullscreen');
    }
}

function fs_status() {
    if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement)
        return 1;
    else
        return -1;
}

function toggleGameVolume() {
    if (gameVolumeOn == true) {
        gameVolumeOn = false;
        document.getElementById('settingSound').classList.add('soundOn');
    } else if (gameVolumeOn == false) {
        gameVolumeOn = true;
        document.getElementById('settingSound').classList.remove('soundOn');
    }
}

