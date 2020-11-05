// All javascripts loaded in the footer

// Note the dependencies listed below will only be loaded in if the asset
// pipeline is set up. If you're loading this using Bower you'll need to include
// these yourself - the simplest way is just to add them using <script> tags in
// your layout html file
//
// Here are some useful paths for your copy/pasting convenience:
//
// bower_components/makers_styles/source/javascripts/vendor/jquery.js
// bower_components/makers_styles/source/javascripts/vendor/slick.js
// bower_components/makers_styles/source/javascripts/vendor/retina.min.js
// bower_components/makers_styles/source/javascripts/vendor/jquery.ajaxchimp.js
// bower_components/makers_styles/source/javascripts/vendor/baseliner.js
// bower_components/makers_styles/source/javascripts/navigation.js
// bower_components/makers_styles/source/javascripts/jquery.fixedscroll.js
// bower_components/makers_styles/source/javascripts/doorbell.js


//= require vendor/jquery
// require vendor/retina.min
//= require vendor/slick.js
//= require vendor/jquery.ajaxchimp
//= require vendor/prism
//= require navigation
//= require jquery.fixedscroll
// require doorbell
//= require vendor/baseliner
//= require tabs
//= require vertical_tabs
//= require elements

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function parallax(event) {
  let sliders = document.querySelectorAll('[class^="hero-splash"]');
  Array.from(sliders).forEach(slider => {
    slider.dataset.speed = 3;
    let yPos = window.pageYOffset / slider.dataset.speed;
    yPos = -yPos;
    let coords = '0% ' + (yPos / 2) + 'px';

    slider.style.backgroundPosition = coords;
  })

}



$(document).ready(function () {
  const button = document.getElementById('apply_button')
  if (button) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    button.addEventListener('click', () => {
      Array.from(dropdowns).forEach(item => {
        item.classList.contains('show') ? item.classList.remove('show') : item.classList.add('show')
      })
    })
    // Hide the menu if button looses focus
    button.addEventListener('blur', () => {
      window.setTimeout(()=>{
        Array.from(dropdowns).forEach(item => {
          item.classList.remove('show')
        })
        // Manually blur the button
        $(button).blur(()=>{}).blur()
      }, 100)
    })
  }



  // Uses jQuery Modal: http://jquerymodal.com/
  if (getCookie('newsFlashEN') != 'viewed' && window.location.pathname.includes('english')) {
    setTimeout(function () {
      $('#news-modal').modal({
        fadeDuration: 100
      });
      setCookie('newsFlashEN', 'viewed', 7);
    }, 5000)


  }

  if (getCookie('newsFlashSV') != 'viewed' && window.location.pathname == '/') {
    setTimeout(function () {
      $('#news-modal').modal({
        fadeDuration: 100
      });
      setCookie('newsFlashSV', 'viewed', 7);
    }, 5000)


  }

  $('#flash-link').on('click', function () {
    $('.close-modal ').trigger('click')
  });

  $('.slider').on('init', function () {
    var $sliderRows = $('.slider-row, .half-slider-row');
    $sliderRows.css("opacity", 1);
    $sliderRows.css("min-height", 0);
  });

  $('.slider:not(.lazy-slider)').slick({
    prevArrow: "<a class='slick-prev'></a>",
    nextArrow: "<a class='slick-next'></a>",
    adaptiveHeight: true
  });

  $('.lazy-slider').slick({
    prevArrow: "<a class='slick-prev'></a>",
    nextArrow: "<a class='slick-next'></a>",
    lazyload: 'progressive'
  });

  // set up sliders using Slick
  // set up email capture using AJAXChimp
  // set up instant feedback form using doorbell.io

  $('.definition-links').fixedScroll();

});


window.addEventListener("scroll", function () {
  parallax();
});
