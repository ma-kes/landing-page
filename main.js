// Animate Smooth Scroll
$('#my_passion').on('click', function() {
  const images = $('#test').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});
