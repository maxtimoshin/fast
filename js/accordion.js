const acc = document.querySelectorAll(".accordion");

const panelHandler = (e) => {
  let panel = e.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

[...acc].forEach(e => {
  e.addEventListener('click', () => {
    e.classList.toggle("active")
    panelHandler(e)
  })
})

