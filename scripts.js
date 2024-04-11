const navButtons = [
  { name: 'about', selector: document.querySelector('#about-btn') },
  { name: 'vision', selector: document.querySelector('#vision-btn') },
  { name: 'apply', selector: document.querySelector('#apply-btn') },
  { name: 'contact', selector: document.querySelector('#contact-btn') }
];

const contentSections = [
  { name: 'about', selector: document.querySelector('#about-section') },
  { name: 'vision', selector: document.querySelector('#vision-section') },
  { name: 'apply', selector: document.querySelector('#apply-section') },
  { name: 'contact', selector: document.querySelector('#contact-section') }
];

navButtons.forEach(button => {
  button.selector.addEventListener('click', function() {
    changeDisplay(button.name);
  });
});

function changeDisplay(elementToShow) {
  contentSections.forEach(section => {
    if (section.name === elementToShow) {
      section.selector.classList.remove('hidden');
    } else {
      section.selector.classList.add('hidden');
    }
  });
  
}