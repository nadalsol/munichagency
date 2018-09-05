////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The document ready event executes already when the HTML-Document is loaded //
// and the DOM is ready, even if all the graphics haven't loaded yet.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

  /**
   * Cookie message
   * Based on the code of [Studio 24](https://github.com/studio24/cookie-message)
   */
  (function() {
    //
    // Set cookie
    //
    // @param string name
    // @param string value
    // @param int days
    // @param string path
    // @see http://www.quirksmode.org/js/cookies.html
    //
    function createCookie(name,value,days,path) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires+"; path="+path;
    }

    //
    // Read cookie
    //
    // @param string name
    // @returns {*}
    // @see http://www.quirksmode.org/js/cookies.html
    //
    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }

    var cookieMessage = document.getElementById('cookie-message');
    if (cookieMessage == null) {
      return;
    }
    var cookie = readCookie('seen-cookie-message');
    var body = document.getElementsByTagName('body')[0];
    if (cookie != null && cookie == 'yes') {
      cookieMessage.style.display = 'none';
    } else {
      cookieMessage.style.display = 'block';
      body.classList.add('is-cookie-message');
    }

    // Set/update cookie
    var cookieExpiry = cookieMessage.getAttribute('data-cookie-expiry');
    if (cookieExpiry == null) {
      cookieExpiry = 30;
    }
    var cookiePath = cookieMessage.getAttribute('data-cookie-path');
    if (cookiePath == null) {
      cookiePath = "/";
    }
    createCookie('seen-cookie-message','yes',cookieExpiry,cookiePath);

    //
    // Message visibility
    //
    // 1. Remove body class.
    // 2. Remove message from DOM.
    //
    var body = $('body'),
        cookieMessage = $('#cookie-message'),
        cookieMessageClose = $('#cookie-message-close');

    cookieMessageClose.click(function() {
      body.removeClass('is-cookie-message'); // 1
      cookieMessage.remove(); // 2
    });
  })();


  /**
   * Header navigation menus
   */
  (function() {
    var header = $('#header'),
        headerHamburger = $('#header-hamburger'),
        headerHamburgerOpen = $('#header-hamburger-open'),
        headerHamburgerClose = $('#header-hamburger-close'),
        headerNav = $('#header-nav');

    //
    // Hamburger menu
    //
    // 1. Toggle `header-nav` visibility.
    // 2. Toggle `header-hamburger-open` and `header-hamburger-close` icons.
    //
    headerHamburger.click(function(event) {
      event.preventDefault();
      headerNav.toggleClass('is-small-hidden'); // 1

      headerHamburgerOpen.toggleClass('is-hidden'); // 2
      headerHamburgerClose.toggleClass('is-hidden'); // 2
    });
  })();


  /**
   * Modal
   */
  (function() {
    var body = $('body'),
        modalTriggerPrivacy = $('#modal-trigger-privacy, #modal-trigger-privacy-2'),
        modalPrivacy = $('#modal-privacy'),
        modalClosePrivacy = modalPrivacy.find('.js-modal-close'),
        modalTriggerCookie = $('#modal-trigger-cookie, #modal-trigger-cookie-2'),
        modalCookie = $('#modal-cookie'),
        modalCloseCookie = modalCookie.find('.js-modal-close'),
        modalTriggerContact = $('#modal-trigger-contact, #modal-trigger-contact-2'),
        modalContact = $('#modal-contact'),
        modalCloseContact = modalContact.find('.js-modal-close');

    //
    // Modal open
    //
    // 1. Body scroll is removed.
    // 2. Modal is visible.
    //
    modalTriggerPrivacy.click(function(event) {
      event.preventDefault();
      body.addClass('is-modal-open'); // 1
      modalPrivacy.removeClass('is-hidden'); // 2
    });

    modalTriggerCookie.click(function(event) {
      event.preventDefault();
      body.addClass('is-modal-open'); // 1
      modalCookie.removeClass('is-hidden'); // 2
    });

    modalTriggerContact.click(function(event) {
      event.preventDefault();
      body.addClass('is-modal-open'); // 1
      modalContact.removeClass('is-hidden'); // 2
    });

    //
    // Modal close
    //
    // 1. Body scroll is back.
    // 2. Modal is hidden.
    //
    modalClosePrivacy.click(function() {
      body.removeClass('is-modal-open'); // 1
      modalPrivacy.addClass('is-hidden'); // 2
    });

    modalCloseCookie.click(function() {
      body.removeClass('is-modal-open'); // 1
      modalCookie.addClass('is-hidden'); // 2
    });

    modalCloseContact.click(function() {
      body.removeClass('is-modal-open'); // 1
      modalContact.addClass('is-hidden'); // 2
    });

    //
    // Modal close (ESC key)
    //
    // 1. Body scroll is back.
    // 2. Modal is hidden.
    //
    $(document).keydown(function(event) {
      if (event.keyCode == 27 && body.hasClass('is-modal-open')) {
        body.removeClass('is-modal-open'); // 1
        modalPrivacy.addClass('is-hidden'); // 2
        modalCookie.addClass('is-hidden'); // 2
        modalContact.addClass('is-hidden'); // 2
      }
    });
  })();


  /**
   * Sticky contact
   */
  // (function() {
  //   var stickyContact = function() {
  //     var scrollTop = $(window).scrollTop(),
  //         modalTriggerContact = $('#modal-trigger-contact-2');
  //     if (scrollTop > 0) {
  //       modalTriggerContact.addClass('is-sticky');
  //     } else {
  //       modalTriggerContact.removeClass('is-sticky');
  //     }
  //   };
  //
  //   stickyContact();
  //
  //   $(window).scroll(function() {
  //     stickyContact();
  //   });
  // })();

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
