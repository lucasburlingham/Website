var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        toggleFlag = 1;
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
        toggleFlag = 1;
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
        toggleFlag = 1;
    }
    if (toggleFlag == 1) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            toggleFlag = 0;
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            toggleFlag = 0;
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            toggleFlag = 0;
        }
    }
}

function closeWindow() {
    window.close();
}