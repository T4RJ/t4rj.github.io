const aboutNav = document.querySelector('#about-btn');
const visionNav = document.querySelector('#vision-btn');
const applyNav = document.querySelector('#apply-btn');
const contactNav = document.querySelector('#contact-btn');

const aboutSection = document.querySelector('#about-section');
const visionSection = document.querySelector('#vision-section');
const applySection = document.querySelector('#apply-section');
const contactSection = document.querySelector('#contact-section');

aboutNav.addEventListener('click', function() {
  showElement(aboutSection);
  hideElements([visionSection, applySection, contactSection]);
});

visionNav.addEventListener('click', function() {
  showElement(visionSection);
  hideElements([aboutSection, applySection, contactSection]);
});

applyNav.addEventListener('click', function() {
  showElement(applySection);
  hideElements([aboutSection, visionSection, contactSection]);
});

contactNav.addEventListener('click', function() {
  showElement(contactSection);
  hideElements([aboutSection, visionSection, applySection]);
});

function hideElements(elements) {
  elements.forEach(element => {
    element.classList.add('hidden');
  });
}

function showElement(element) {
  element.classList.remove('hidden');
}