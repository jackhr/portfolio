const divEl = document.getElementById('main-div');
const h1Els = [...document.querySelectorAll('#main-div h2')];

divEl.addEventListener('click', handleShow);

function handleShow(evt) {
  if (!h1Els.includes(evt.target)) return;
  let info = evt.target.nextSibling.nextSibling;
  info.className = (info.className === "hidden" ? "visible" : "hidden");
}