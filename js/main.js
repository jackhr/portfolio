const divEl = document.getElementById('main-div');
const h1Els = [...document.querySelectorAll('#main-div div')];

divEl.addEventListener('click', handleShow);
divEl.addEventListener('mouseover', handleExpand);
divEl.addEventListener('mouseout', handleShrink);

function handleExpand(evt) {
  if (!h1Els.includes(evt.target)) {
    return;
  } else {
    console.log('hell yeah');
  }
}

function handleShrink(evt) {
  if (!h1Els.includes(evt.target)) return;
}

function handleShow(evt) {
  if (!h1Els.includes(evt.target)) return;
  let info = evt.target.nextSibling.nextSibling;
  info.className = (info.className === "hidden" ? "visible" : "hidden");
  
}