const navEl = document.querySelector('nav');
const aboutEl = document.getElementById('about-div');
const contactEl = document.getElementById('contact-div');
const projectsEl = document.getElementById('projects-div');
const navAboutEl = document.getElementById('nav-about');
const navProjectsEl = document.getElementById('nav-projects');
const navContactEl = document.getElementById('nav-contact');
const titleDivEl = document.getElementById('title-div');
const ongoingEls = [...document.getElementsByClassName('ongoing')];
const commaEls = [...document.getElementsByClassName('comma')];
const anticipatedEls = [...document.getElementsByClassName('anticipated')];
const projectTabEls = [...document.getElementsByClassName('title')];
const navEls = [navAboutEl, navProjectsEl, navContactEl];

navEl.addEventListener('click', handleNav);
titleDivEl.addEventListener('click', handleProjectTabs);

function handleProjectTabs(evt) {
  if (evt.target.id === "title-div") return;
  const text = evt.target.innerHTML;
  const isOngoing = text[0] === "O" ? true : false;
  anticipatedEls.forEach(elem => {
    elem.className = isOngoing ? "hidden" : ""
  });
  ongoingEls.forEach(elem => 
    elem.className = isOngoing ? "" : "hidden"
  );
  commaEls.forEach(elem => 
    elem.className = isOngoing ? "" : "hidden"
  );




  // const text = evt.target.innerHTML;
  // if (evt.target.id !== "title-div") {
  //   if (text[0] === "O") {
  //     ongoingDivEl.style.display = "inherit";
  //     IPDivEl.style.display = "none";
  //   } else {
  //     ongoingDivEl.style.display = "none";
  //     IPDivEl.style.display = "inherit";
  //   }
  // }
}

function handleNav (evt) {
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
}

function handleActive(count) {
  navEls.forEach((el, idx) => {
    if (idx === count) {
      el.style.transform = 'scale(1.3)';
      el.style.transition = 'all 0.2s linear';
    } else {
      el.style.transform = 'scale(1)';
      el.style.transition = 'all 0.2s linear';
    }
  })
}