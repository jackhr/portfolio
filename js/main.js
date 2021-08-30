const navEl = document.querySelector('nav');
const aboutEl = document.getElementById('about-div');
const contactEl = document.getElementById('contact-div');
const projectsEl = document.getElementById('projects-div');
const navAboutEl = document.getElementById('nav-about');
const navProjectsEl = document.getElementById('nav-projects');
const navContactEl = document.getElementById('nav-contact');
const navEls = [navAboutEl, navProjectsEl, navContactEl];

navEl.addEventListener('click', (evt) => {
  const text = evt.target.innerHTML;
  if (text > 10) return;
  if (text[0] === 'A') {
    count = 0;
    handleActive(count);
    aboutEl.style.display = 'flex';
    contactEl.style.display = 'none';
    projectsEl.style.display = 'none';
  } else if (text[0] === 'P') {
    count = 1;
    handleActive(count);
    aboutEl.style.display = 'none';
    contactEl.style.display = 'none';
    projectsEl.style.display = 'block';
  } else if (text[0] === 'C') {
    count = 2;
    handleActive(count);
    aboutEl.style.display = 'none';
    contactEl.style.display = 'block';
    projectsEl.style.display = 'none';
  }
});

function handleActive(count) {
  navEls.forEach((el, idx) => {
    if(idx === count) {
      el.style.transform = 'scale(1.3)';
      el.style.transition = 'all 0.2s linear';
    } else {
      el.style.transform = 'scale(1)';
      el.style.transition = 'all 0.2s linear';
    }
  })
}