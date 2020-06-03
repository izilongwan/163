import tools from 'utils/tools'

onResize();

window.addEventListener('resize', tools.debounce(onResize, 500), false);

function onResize () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px';
}

document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches && e.touches.length > 1) {
    e.preventDefault();
  }
}, false)
