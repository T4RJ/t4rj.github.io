const navButtons = [
  { name: 'about', selector: document.querySelector('#about-nav') },
  { name: 'vision', selector: document.querySelector('#vision-nav') },
  { name: 'apply', selector: document.querySelector('#apply-nav') },
  { name: 'contact', selector: document.querySelector('#contact-nav') }
];

const contentPages = [
  { name: 'about', selector: document.querySelector('#about-section') },
  { name: 'vision', selector: document.querySelector('#vision-section') },
  { name: 'apply', selector: document.querySelector('#apply-section') },
  { name: 'contact', selector: document.querySelector('#contact-section') }
];

navButtons.forEach(button => {
  button.selector.addEventListener('click', function() {
    changeDisplay(button.name);
  });

  button.selector.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      changeDisplay(button.name);
    }
  });
});

function changeDisplay(elementToShow) {
  showContent(elementToShow);
  updateTabs(elementToShow);
}

function showContent(elementToShow) {
  contentPages.forEach(section => {
    if (section.name === elementToShow) {
      section.selector.classList.remove('hidden');
    } else {
      section.selector.classList.add('hidden');
    }
  });
}

function updateTabs(elementToShow) {
  navButtons.forEach(button => {
    if (button.name === elementToShow) {
      button.selector.classList.add(`active-${button.name}`);
      button.selector.classList.remove(`inactive-${button.name}`);
    } else {
      button.selector.classList.add(`inactive-${button.name}`);
      button.selector.classList.remove(`active-${button.name}`);
    }
  });
}