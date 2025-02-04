// Add "loaded" class after the page has fully loaded
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
  
  // Fade out before navigating away from the page
  window.addEventListener("beforeunload", function () {
    document.body.classList.add("is-exiting");
  });
  