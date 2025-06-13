/*  Load and inject reusable header  */

function loadHeader() {
  fetch('../../HTML/Templates/header.html')
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('afterbegin', html);
      initiateScrollEffect();
    });
}

/*  Add event listener to change styling of header on scrolling  */

function initiateScrollEffect() {
  function checkHeaderAndInit() {
    const header = document.getElementById('header');
    if (header) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const triggerPoint = 5;
        
        header.classList.toggle('scrolled-header', scrollY >= triggerPoint);
        document.getElementById('logo-icon').classList.toggle('scrolled-logo-icon', scrollY >= triggerPoint);
        document.getElementById('logo-text').classList.toggle('scrolled-logo-text', scrollY >= triggerPoint);
        document.getElementById('book-clean-button').classList.toggle('scrolled-book-clean-button', scrollY >= triggerPoint);
        document.getElementById('hamburger-menu-icon').classList.toggle('scrolled-hamburger-menu-icon', scrollY >= triggerPoint);
      });
    } else {
      setTimeout(checkHeaderAndInit, 50);
    }
  }
  checkHeaderAndInit();
}

/*  Initiate everything  */ 

loadHeader();

