////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The document ready event executes already when the HTML-Document is loaded //
// and the DOM is ready, even if all the graphics haven't loaded yet.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {

  var headerHamburger = $('#header-hamburger'),
      headerNav = $('#header-nav'),
      jsNavMainLink = $('.js-nav-main-link');

  /**
   * Toggle `header-nav` visibility, via hamburger menu
   */
  headerHamburger.click(function(event) {
    event.preventDefault();
    headerNav.toggleClass('is-small-hidden');
  });

  /**
   * Manage `is-active` state for `js-nav-main-link` items
   */
  function removeAllIsActive(selector) {
    $(selector).each(function() {
      $(this).removeClass('is-active');
    });
  }

  jsNavMainLink.click(function() {
    // Remove all `is-active` classes
    removeAllIsActive(jsNavMainLink);
    // Add `is-active` class to clicked item only
    $(this).addClass('is-active');
    // Hide `header-nav`
    headerNav.addClass('is-small-hidden');
  });

  /**
   * Manage `is-opaque` state for `header-nav`
   */
  // var toggleIsOpaque = function() {
  //   var scrollTop = $(window).scrollTop();
  //   if (scrollTop > 0) {
  //     headerNav.addClass('is-opaque');
  //   } else {
  //     headerNav.removeClass('is-opaque');
  //   }
  // };
  //
  // toggleIsOpaque();
  //
  // $(window).scroll(function() {
  //   toggleIsOpaque();
  // });

});


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The window load event executes a bit later when the complete page          //
// is fully loaded, including all frames, objects and images.                 //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
// $(window).on('load', function() {
//
//   // your js code here...
//
// });
