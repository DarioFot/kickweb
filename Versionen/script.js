document.addEventListener('DOMContentLoaded', function () {

    const pfeil = document.querySelector('.pfeil');
    const darioImage = document.getElementById('dario-image');
    let isClicked = false;

    //Custom Cursor
    const customCursor = document.getElementById('custom-cursor');
    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });

    //zoomeffect Hover child-3
    const child3 = document.querySelector('.child-3');

    child3.addEventListener('mouseover', function () {
        pfeil.style.transition = 'transform 0.0s ease-out';
        pfeil.style.transform = `scale(1.03) rotate(${rotation}deg)`;
    });

    child3.addEventListener('mouseout', function () {
        pfeil.style.transition = 'transform 0.3s ease-out';
        pfeil.style.transform = `rotate(${rotation}deg) scale(1)`;
    });

    

    // Rotation von .kreis
    kreisElement.addEventListener('mouseleave', function () {
        isHovered = false;
        hoverSound.pause();
        audioStartTime = hoverSound.currentTime;
    });

    kreisElement.addEventListener('animationend', function () {
        if (!isHovered) {
            kreisElement.style.animationPlayState = 'paused';
        }
        
    });

    //Verlinkungen
    

});
