const column = document.getElementById('column1');

document.querySelectorAll('.hexagon_cluster .hexagon').forEach(function(act) {
  act.addEventListener('click', function() {
    const hexclone = act.cloneNode(true);
    hexclone.addEventListener('click', function() {
      hexclone.remove();
      let but = document.createElement("div");
      but.innerHTML = "";
      column.insertBefore(but, column.lastChild);
    }, false);
    column.insertBefore(hexclone, column.firstChild);
    column.children[10].remove();
  }, false);
})