(function () {
  let $nav = $('header.navigation.auto-hide');
  const button = document.getElementById('apply_button')


  //For showing and hiding navigation
  let hideNav = function () {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    Array.from(dropdowns).forEach(item => {
      item.classList.remove('show')
    })
    // only affect desktop navigation
    // Manually blur the button
    $(button).blur(() => { }).blur()
    $nav.addClass('hidden-nav');
  };

  $(document).ready(function () {
    // only affect desktop navigation
    // hide after 5 seconds
    let timeOut = window.setTimeout(hideNav, 5000);

    $nav.hover(
      function () { clearTimeout(timeOut); },
      function () { timeOut = window.setTimeout(hideNav, 5000); }
    );

    let lastScrollTop = 0;

    $(window).scroll(function (e) {
      let scrollTop = $(this).scrollTop();

      if (scrollTop > 0 && scrollTop > lastScrollTop) {
        // on scroll down, hide nav
        $nav.addClass('hidden-nav');
      } else {
        // on scroll up, show nav
        $nav.removeClass('hidden-nav');
      }

      lastScrollTop = scrollTop;
    });
  });
}());
