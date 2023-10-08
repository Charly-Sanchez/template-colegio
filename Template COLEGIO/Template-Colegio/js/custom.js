
  $(function () {

    // MENU
    $('.nav-link').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $(function() {
      $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1000);
            event.preventDefault();
      });
    });  


    // PROJECT SLIDE
    $('#project-slide').owlCarousel({
      loop: true,
      center: true,
      autoplayHoverPause: false,
      autoplay: true,
      margin: 30,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          }
      }
    });

  });

// Dropdowns
// JavaScript personalizado

$(document).ready(function() {
    // Agregar un evento de clic a todos los botones de dropdown con la clase "dropdown-toggle"
    $('.dropdown-toggle').on('click', function(event) {
        // Evitar el comportamiento predeterminado del botón para que no se cierre inmediatamente
        event.preventDefault();
        
        var dropdownMenu = $(this).next('.dropdown-menu');
        
        // Verificar si el menú está visible
        var isVisible = dropdownMenu.is(':visible');
        
        // Cerrar todos los dropdowns antes de abrir el seleccionado
        $('.dropdown-menu').hide();
        
        // Si el menú no estaba visible, ábrelo; de lo contrario, ciérralo
        if (!isVisible) {
            dropdownMenu.show();
        }
    });
    
    // Agregar un evento de clic al documento para cerrar el dropdown si se hace clic en cualquier otro lugar
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });
});



