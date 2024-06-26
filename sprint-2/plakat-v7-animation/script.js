document.addEventListener("DOMContentLoaded", function () {
  //drehung pfeil bei klick
  const pfeil = document.querySelector(".pfeil");
  let rotation = 0;

  pfeil.addEventListener("click", function () {
    rotation += 90;
    pfeil.style.transition = "transform 0.5s ease-in-out";
    pfeil.style.transform = `rotate(${rotation}deg)`;
  });

  //zoomeffect Hover child-3
  const child3 = document.querySelector(".child-3");

  child3.addEventListener("mouseover", function () {
    pfeil.style.transition = "transform 0.0s ease-out";
    pfeil.style.transform = `scale(1.03) rotate(${rotation}deg)`;
  });

  child3.addEventListener("mouseout", function () {
    pfeil.style.transition = "transform 0.3s ease-out";
    pfeil.style.transform = `rotate(${rotation}deg) scale(1)`;
  });

  // Soundeffekt beim Überfahren von .kreis
  const hoverSound = document.getElementById("hoverSound");
  const kreisElement = document.querySelector(".kreis");
  let audioStartTime = 0;
  let isHovered = false;
  let kreisRotation = 0; // Aktuelle Rotationsposition für den .kreis

  function startKreisRotation() {
    isHovered = true;
    // Animation mit der gespeicherten Rotationsposition fortsetzen
    kreisElement.style.animation = `rotateClockwise 8s linear infinite ${kreisRotation}s`;
    if (!hoverSound.paused) {
      hoverSound.currentTime = audioStartTime;
    } else {
      hoverSound.play();
    }
  }

  function stopKreisRotation() {
    isHovered = false;
    hoverSound.pause();
    audioStartTime = hoverSound.currentTime;
    // Aktuelle Rotationsposition speichern
    const computedStyle = window.getComputedStyle(kreisElement);
    const animationDuration =
      parseFloat(computedStyle.getPropertyValue("animation-duration")) || 0;
    const animationIterationCount =
      parseFloat(computedStyle.getPropertyValue("animation-iteration-count")) ||
      0;
    kreisRotation = (animationDuration * animationIterationCount) % 8; // 8s ist die Dauer der Animation
    kreisElement.style.animation = "none"; // Animation stoppen
  }

  kreisElement.addEventListener("mouseenter", startKreisRotation);

  // Rotation von .kreis
  kreisElement.addEventListener("mouseleave", stopKreisRotation);

  kreisElement.addEventListener("animationend", function () {
    if (!isHovered) {
      kreisElement.style.animationPlayState = "paused";
    }
  });

  const customCursor = document.getElementById("custom-cursor");
  document.body.style.cursor = "none";
  document.addEventListener("mousemove", function (e) {
    customCursor.style.left = e.pageX + "px";
    customCursor.style.top = e.pageY + "px";
  });

  pfeil.addEventListener("mouseover", function () {
    customCursor.innerHTML = "CLICK";
  });

  pfeil.addEventListener("mouseout", function () {
    customCursor.innerHTML = "";
  });

  //Verlinkungen
  const child1 = document.querySelector(".child-1");

  child1.addEventListener("click", function () {
    window.location.href = "https://www.hslu.ch/de-ch/";
  });

  const child2 = document.querySelector(".child-2");

  child2.addEventListener("click", function () {
    window.location.href = "https://dariofot.github.io/kickweb/";
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
