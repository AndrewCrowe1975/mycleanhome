/*  Load and inject reusable header  */

function loadMenu() {
  fetch('../../HTML/Templates/mob-nav-menu.html')
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('afterbegin', html);
      initialiseMobNavMenu();
    });
}

function initialiseMobNavMenu() {

/*  Load required Javascript for mobile nav menu once DOM content loaded  */

  const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  const closeButton = document.getElementById('mobile-nav-close-button');
  const overlay = document.getElementById('overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links, .mobile-nav-button-links, .mobile-nav-inline-text-link');
  const headerTabs = document.querySelectorAll('.book-clean-button, .hamburger-menu-button, .logo-icon-link');

/*  Add keyboard support to <a> links so can select on pressing either spacebar or enter  */

function addKeyboardSupport() {
  mobileNavLinks.forEach(link => {
    link.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        window.location.href = link.href;
      }
    });
  });
}

addKeyboardSupport();

/*  Set tablist for mobile nav menu links  */

  function setTabIndex(value) {
    mobileNavLinks.forEach(link => {
      link.tabIndex = value;
    });
  }

/*  Initialise by removing all focusable items from mobile nav tablist  */

  setTabIndex(-1);
  closeButton.tabIndex = -1;

/*  Add event listener to hamburger icon  */

  hamburgerMenuButton.addEventListener('click', function(event) {
/*  Stop event from bubbling to document  */

    event.stopPropagation();
  
    mobileNav.classList.add('mobile-nav-open');
    overlay.classList.add('overlay-triggered');
    document.body.style.overflow = 'hidden';
    hamburgerMenuButton.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    setTabIndex(0); // Enable tabbing for mobile nav links
    closeButton.tabIndex = 0;
    headerTabs.forEach(tab => tab.tabIndex = -1);
  });

/*  Close menu function  */
  function closeMenu() {
    document.body.style.overflow = 'auto';
    overlay.classList.remove('overlay-triggered');
    mobileNav.classList.remove('mobile-nav-open');
    hamburgerMenuButton.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    setTabIndex(-1); // Disable tabbing for mobile nav links
    closeButton.tabIndex = -1;
    headerTabs.forEach(tab => tab.tabIndex = 0);
  }

/*  Close button  */

  closeButton.addEventListener('click', closeMenu);
  
/*  Close when clicking outside  */

  document.addEventListener('click', function(event) {
    if (mobileNav.classList.contains('mobile-nav-open') &&
       !mobileNav.contains(event.target) &&
       event.target !== hamburgerMenuButton) {
      closeMenu();
    }
  });

/*  Close on Escape key  */

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && mobileNav.classList.contains('mobile-nav-open')) {
      closeMenu();
    }
  });
}

/*  Initiate everything  */ 

loadMenu();