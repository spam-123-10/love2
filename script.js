document.addEventListener("DOMContentLoaded", function() {
  var timeline = anime.timeline({
    duration: 3000, // Change the duration to 3 seconds
    easing: "easeInOutQuad",
    loop: false
  });

  timeline
    .add({
      targets: "#stem",
      scaleY: [0, 1],
      transformOrigin: "auto"
    })
    .add({
      targets: "#flower",
      scale: [0, 1],
      easing: "spring",
      endDelay: 1000
    });
});
