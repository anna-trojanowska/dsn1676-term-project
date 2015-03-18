var $hamBtn = $('.ham-btn');
var $panel = $('.panel');
var $tabs = $('.tabs');
var $panels = $('.tab-panel');

var $music = $('.music');
var $leftnote = $('.leftnote');
var $rightnote = $('.rightnote');
var $doublenote = $('.doublenote');

var $drawing = $('.drawing');
var $pencil = $('.pencil');

var $reading = $('.reading');
var $bookopen = $('.bookopen');
var $bookclosed = $('.bookclosed');


$hamBtn.on('click', function () {
  $panel.toggleClass('js-panel-open');
});

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter(':not([hidden])').attr('hidden', true);
  $(id).removeAttr('hidden');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});

$drawing.on('click', function () {
  $pencil.toggleClass('js-pencil-move');
});

$music.on('click', function () {
    $leftnote.toggleClass('js-leftnote-appear');
    $rightnote.toggleClass('js-rightnote-appear');
    $doublenote.toggleClass('js-doublenote-appear');
});

$reading.on('click', function () {
    $bookopen.toggleClass('js-bookopen-appear');
    $bookclosed.toggleClass('js-bookclosed-appear');
});
