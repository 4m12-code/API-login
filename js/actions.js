jQuery(function($) {
  let e = document.querySelector('.flexslider');
  $(e).flexslider({
    animation: "slide",
    controlNav: true, // Flechitas laterales
    animationLoop: false, // Quitar el límite
    slideshow: true,
    direction: "horizontal",
    mousedrag: true,  // Habilitar el arrastre
  });
});