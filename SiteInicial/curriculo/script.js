$(window).resize(function() {
  var width = $(document).width();
  if (width <= 950) {
    document.getElementById('photo').setAttribute('src', 'assets/image/fael2.jpg');
  } else{
    document.getElementById('photo').setAttribute('src', 'assets/image/fael.jpeg');
  }
});