$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Smoth Scroll
$('a').click(function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    var gato = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(gato).offset().top,
      },
      600,
      function () {
        window.location.hash = gato;
      },
    );
  }
});

// Iframe en Modal
$('.card').click(function () {
  $('#modal-iframe').attr('src', $(this).attr('my-url'));
});
