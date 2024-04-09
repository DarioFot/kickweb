document.addEventListener("DOMContentLoaded", function () {
  const pfeil = document.querySelector(".pfeil");
  const darioImage = document.getElementById("dario-image");
  let isClicked = false;

  //Custom Cursor
  const customCursor = document.getElementById("custom-cursor");
  document.body.style.cursor = "none";
  document.addEventListener("mousemove", function (e) {
    customCursor.style.left = e.pageX + "px";
    customCursor.style.top = e.pageY + "px";
  });

  pfeil.addEventListener("mouseover", function () {
    customCursor.innerHTML = "CLICK";
  });

  pfeil.addEventListener("click", function () {
    if (!isClicked) {
      isClicked = true;
      setTimeout(function () {
        darioImage.style.transform = "translateX(0%)";
      }, 400);
      pfeil.style.transition = "transform 0.5s ease-in-out";
      pfeil.style.transform = "translateX(-110%)";
    } else {
      isClicked = false;
      darioImage.style.transform = "translateX(100%)";
      pfeil.style.transition = "transform 0.5s ease-in-out";
      pfeil.style.transform = "translateX(0)";
      customCursor.innerHTML = ""; // Cursor zurücksetzen
    }
  });

  // Wenn das Bild geklickt wird, Pfeil zurück
  darioImage.addEventListener("click", function () {
    isClicked = false;
    setTimeout(function () {
      pfeil.style.transition = "block";
    }, 400);
    //darioImage.style.display = "none"; // Bild ausblenden
    darioImage.style.transform = "translateX(100%)"; // Bild ausblenden
    pfeil.style.transition = "transform 0.5s ease-in-out";
    pfeil.style.transform = "translateX(0)";
    customCursor.innerHTML = ""; // Cursor zurücksetzen
  });

  //zoomeffect Hover child-3 «GEHT IN KOMBI MIT BILDANIMATION NICHT»
  /*const child3 = document.querySelector(".child-3");

  child3.addEventListener("mouseover", function () {
    pfeil.style.transition = "transform 0.0s ease-out";
    pfeil.style.transform = `scale(1.03)`;
  });

  child3.addEventListener("mouseout", function () {
    pfeil.style.transition = "transform 0.3s ease-out";
    pfeil.style.transform = `scale(1)`;
  });*/

  // Soundeffekt beim Überfahren von .kreis
  const hoverSound = document.getElementById("hoverSound");
  const kreisElement = document.querySelector(".kreis");
  let audioStartTime = 0;
  let isHovered = false;
  kreisElement.addEventListener("mouseenter", function () {
    if (!isHovered) {
      isHovered = true;
      kreisElement.style.animation = "rotateClockwise 8s linear infinite";
      if (!hoverSound.paused) {
        hoverSound.currentTime = audioStartTime;
      } else {
        hoverSound.play();
      }
    }
  });

  // Rotation von .kreis
  kreisElement.addEventListener("mouseleave", function () {
    isHovered = false;
    hoverSound.pause();
    audioStartTime = hoverSound.currentTime;
  });

  kreisElement.addEventListener("animationend", function () {
    if (!isHovered) {
      kreisElement.style.animationPlayState = "paused";
    }
  });

  //Verlinkungen
  const child1 = document.querySelector(".child-1");

  child1.addEventListener("click", function () {
    window.location.href =
      "https://elearning.hslu.ch/ilias/ilias.php?baseClass=ilrepositorygui&ref_id=6109605";
  });

  const child2 = document.querySelector(".child-2");

  child2.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/Versionen/Versionen";
  });

  const item2 = document.querySelector(".item-2");

  item2.addEventListener("click", function () {
    window.location.href = "https://de.wikipedia.org/wiki/2024";
  });

  const item3 = document.querySelector(".item-3");

  item3.addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/dario-foti-b858822b4/";
  });

  const item4 = document.querySelector(".item-4");

  item4.addEventListener("click", function () {
    window.location.href =
      "https://www.hslu.ch/de-ch/informatik/studium/bachelor/digital-ideation/?gad_source=1&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1vHm886GJB43aHSpMEz2Y14o3g9e0vdi27BLlH-fCBpa6XVfgIA_wIaAhcYEALw_wcB&gclsrc=aw.ds";
  });

  const item5 = document.querySelector(".item-5");

  item5.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/dario.psd/";
  });

  const footchildmini2 = document.querySelector(".footchildmini-2");

  footchildmini2.addEventListener("click", function () {
    window.location.href = "https://www.hslu.ch/de-ch/informatik/campus/";
  });

  const footchildmini3 = document.querySelector(".footchildmini-3");

  footchildmini3.addEventListener("click", function () {
    window.location.href =
      "https://github.com/digitalideation/KickWeb2024/wiki";
  });

  const footchildmini4 = document.querySelector(".footchildmini-4");

  footchildmini4.addEventListener("click", function () {
    window.location.href = "https://github.com/DarioFot/kickweb";
  });
});
