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

var $donutSection = $('.donut-bite');

var $motionButton = $('.motion-button');
var $motionExpand = $('.motion-expand');
var $illustrationButton = $('.illustration-button');
var $illustrationExpand = $('.illustration-expand');
var $embroideryButton = $('.embroidery-button');
var $embroideryExpand = $('.embroidery-expand');
var $brandingButton = $('.branding-button');
var $brandingExpand = $('.branding-expand');
var $typographyButton = $('.typography-button');
var $typographyExpand = $('.typography-expand');


$motionButton.on('click', function () {
    $motionExpand.toggleClass('js-expanded');
});

$illustrationButton.on('click', function () {
    $illustrationExpand.toggleClass('js-expanded');
});

$embroideryButton.on('click', function () {
    $embroideryExpand.toggleClass('js-expanded');
});

$brandingButton.on('click', function () {
    $brandingExpand.toggleClass('js-expanded');
});

$typographyButton.on('click', function () {
    $typographyExpand.toggleClass('js-expanded');
});


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

var $tabs = $('.tabs');
var $panels = $('.tab-panel');

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter('.js-appear').removeClass('js-appear');
  $(id).addClass('js-appear');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});

$('.top-nav').localScroll();

$('.top-scroll').localScroll();

$('.top-scroll-button').localScroll();


$donutSection.waypoint(function () {
    $donutSection.addClass('js-active');
}, {offset: '65%'});



var $btn = $('.btn');
var $thumbs = $('.thumbnails');
var $lightboxImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');

$thumbs.on('click', 'a', function(e){
	e.preventDefault();
	var big = $(this).attr('href');
	$lightboxImg.attr('src', big);
	$lb.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
 $lb.attr('data-state', 'hidden');
});


 
