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
        headerNav = $('#header-nav'),
        navMainServices = $('#nav-main-services'),
        navSecondaryServices = $('#nav-secondary-services'),
        navMainSolutions = $('#nav-main-solutions'),
        navSecondarySolutions = $('#nav-secondary-solutions'),
        navMainLangCa = $('#nav-main-lang-ca'),
        navMainLangEn = $('#nav-main-lang-en'),
        navMainLangEs = $('#nav-main-lang-es'),
        navSecondaryLangCa = $('#nav-secondary-lang-ca'),
        navSecondaryLangEn = $('#nav-secondary-lang-en'),
        navSecondaryLangEs = $('#nav-secondary-lang-es'),
        navSecondaryServicesLink = navSecondaryServices.find('.js-nav-secondary-link');

    //
    // Toggle `nav-secondary-services` visibility, via nav-main menu
    //
    navMainServices.click(function(event) {
      event.preventDefault();

      navSecondaryServices.toggleClass('is-medium-hidden');
      navSecondarySolutions.addClass('is-medium-hidden');

      navSecondaryLangCa.addClass('is-medium-hidden');
      navSecondaryLangEn.addClass('is-medium-hidden');
      navSecondaryLangEs.addClass('is-medium-hidden');
    });

    //
    // Toggle `nav-tertiary` visibility, via nav-main menu
    //
    // 1. Remove all `is-active` classes from `nav-secondary-link` items.
    // 2. Add `is-active` class to current `nav-secondary-link` item.
    // 3. Hide all `nav-tertiary` items.
    // 4. Show current `nav-tertiary` item.
    //
    navSecondaryServicesLink.click(function(event) {
      event.preventDefault();

      var $this = $(this);

      navSecondaryServicesLink.removeClass('is-active'); // 1
      $this.addClass('is-active'); // 2

      navSecondaryServicesLink.next('.js-nav-tertiary').addClass('is-hidden'); // 3
      $this.next('.js-nav-tertiary').removeClass('is-hidden'); // 4
    });

    //
    // Toggle `nav-secondary-solutions` visibility, via nav-main menu
    //
    navMainSolutions.click(function(event) {
      event.preventDefault();

      navSecondaryServices.addClass('is-medium-hidden');
      navSecondarySolutions.toggleClass('is-medium-hidden');

      navSecondaryLangCa.addClass('is-medium-hidden');
      navSecondaryLangEn.addClass('is-medium-hidden');
      navSecondaryLangEs.addClass('is-medium-hidden');
    });

    //
    // Toggle `nav-secondary-lang-ca` visibility, via nav-lang menu
    //
    navMainLangCa.click(function(event) {
      event.preventDefault();

      navSecondaryLangCa.toggleClass('is-medium-hidden');
      navSecondaryLangEn.addClass('is-medium-hidden');
      navSecondaryLangEs.addClass('is-medium-hidden');

      navSecondaryServices.addClass('is-medium-hidden');
      navSecondarySolutions.addClass('is-medium-hidden');
    });

    //
    // Toggle `nav-secondary-lang-en` visibility, via nav-lang menu
    //
    navMainLangEn.click(function(event) {
      event.preventDefault();

      navSecondaryLangCa.addClass('is-medium-hidden');
      navSecondaryLangEn.toggleClass('is-medium-hidden');
      navSecondaryLangEs.addClass('is-medium-hidden');

      navSecondaryServices.addClass('is-medium-hidden');
      navSecondarySolutions.addClass('is-medium-hidden');
    });

    //
    // Toggle `nav-secondary-lang-es` visibility, via nav-lang menu
    //
    navMainLangEs.click(function(event) {
      event.preventDefault();

      navSecondaryLangCa.addClass('is-medium-hidden');
      navSecondaryLangEn.addClass('is-medium-hidden');
      navSecondaryLangEs.toggleClass('is-medium-hidden');

      navSecondaryServices.addClass('is-medium-hidden');
      navSecondarySolutions.addClass('is-medium-hidden');
    });

    //
    // Toggle `header-nav` visibility, via hamburger menu
    //
    headerHamburger.click(function(event) {
      event.preventDefault();
      headerNav.toggleClass('is-small-hidden');
    });
  })();


  /**
   * Modal
   */
  (function() {
    var body = $('body'),
        modalTriggerCookieMessage = $('#modal-trigger-cookie-message'),
        modalCookieMessage = $('#modal-cookie'),
        modalCloseCookieMessage = modalCookieMessage.find('.js-modal-close'),
        modalTriggerPrivacy = $('#modal-trigger-privacy'),
        modalPrivacy = $('#modal-privacy'),
        modalClosePrivacy = modalPrivacy.find('.js-modal-close'),
        modalTriggerCookie = $('#modal-trigger-cookie'),
        modalCookie = $('#modal-cookie'),
        modalCloseCookie = modalCookie.find('.js-modal-close'),
        modalTriggerTerms = $('#modal-trigger-terms'),
        modalTerms = $('#modal-terms'),
        modalCloseTerms = modalTerms.find('.js-modal-close'),
        modalTriggerVideo = $('#modal-trigger-video'),
        modalVideo = $('#modal-video'),
        modalCloseVideo = modalVideo.find('.js-modal-close'),
        modalBodyVideo = modalVideo.find('.js-modal-body'),
        modalTriggerPrivacyForm = $('#modal-trigger-privacy-form');

    //
    // Modal open
    //
    // 1. Body scroll is removed.
    // 2. Modal is visible.
    // 3. Append `<video>` to the DOM, only when the play trigger gets
    // fired, to prevent unnecessary video requests on page load.
    //
    modalTriggerCookieMessage.click(function(event) {
      event.preventDefault();
      body.addClass('is-modal-open'); // 1
      modalCookieMessage.removeClass('is-hidden'); // 2
    });

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

    modalTriggerTerms.click(function(event) {
      event.preventDefault();
      body.addClass('is-modal-open'); // 1
      modalTerms.removeClass('is-hidden'); // 2
    });

    modalTriggerVideo.click(function() {
      body.addClass('is-modal-open'); // 1
      modalVideo.removeClass('is-hidden'); // 2
      // TODO : use "/themountdata/assets/" temporary path for GitHub pages (replace for "/assets" in Production)
      modalBodyVideo.append('<video poster="/assets/img/medium-up/bg-hero-intro.jpg" controls autoplay preload><source src="/assets/video/the-mount-data.webm" type="video/webm"><source src="/assets/video/the-mount-data.mp4" type="video/mp4">Sorry, your browser does not support embedded videos.</video>'); // 3
    });

    modalTriggerPrivacyForm.click(function(event) {
      event.preventDefault();
      body.addClass('is-modal-open'); // 1
      modalPrivacy.removeClass('is-hidden'); // 2
    });

    //
    // Modal close
    //
    // 1. Body scroll is back.
    // 2. Modal is hidden.
    // 3. Remove `<video>` from the DOM, to stop playing in background.
    //
    modalCloseCookieMessage.click(function() {
      body.removeClass('is-modal-open'); // 1
      modalCookieMessage.addClass('is-hidden'); // 2
    });

    modalClosePrivacy.click(function() {
      body.removeClass('is-modal-open'); // 1
      modalPrivacy.addClass('is-hidden'); // 2
    });

    modalCloseCookie.click(function() {
      body.removeClass('is-modal-open'); // 1
      modalCookie.addClass('is-hidden'); // 2
    });

    modalCloseTerms.click(function() {
      body.removeClass('is-modal-open'); // 1
      modalTerms.addClass('is-hidden'); // 2
    });

    modalCloseVideo.click(function() {
      body.removeClass('is-modal-open'); // 1
      modalVideo.addClass('is-hidden'); // 2
      modalBodyVideo.find('video').remove(); // 3
    });

    //
    // Modal close (ESC key)
    //
    // 1. Body scroll is back.
    // 2. Modal is hidden.
    // 3. Remove `<video>` from the DOM, to stop playing in background.
    //
    $(document).keydown(function(event) {
      if (event.keyCode == 27 && body.hasClass('is-modal-open')) {
        body.removeClass('is-modal-open'); // 1
        modalCookieMessage.addClass('is-hidden'); // 2
        modalPrivacy.addClass('is-hidden'); // 2
        modalCookie.addClass('is-hidden'); // 2
        modalTerms.addClass('is-hidden'); // 2
        modalVideo.addClass('is-hidden'); // 2
        modalBodyVideo.find('video').remove(); // 3
      }
    });
  })();

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
