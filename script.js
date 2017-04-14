// Do your work in this file.

var boxes = Array.prototype.slice.call(document.querySelectorAll(".box"))

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', boxClicked);
}

function boxClicked() {
  var boxNumber = boxes.indexOf(this);
  var background = "red"

  if (this.classList.contains("clicked")) {
    this.classList.remove("clicked");
  } else {
    this.classList.add("clicked");
    if (boxNumber >= 201 && boxNumber <= 300) {
      background = "yellow";
    } else if (boxNumber >= 301 && boxNumber <= 400) {
      background = "green";
    } else if (boxNumber >= 401 && boxNumber <= 500) {
      background = "purple";
    } else if (boxNumber >= 501 && boxNumber <= 600) {
      background = "orange";
    } else if (boxNumber >= 601 && boxNumber <= 700) {
      background = "pink";
    } else if (boxNumber >= 701 && boxNumber <= 800) {
      background = "black";
    } else if (boxNumber >= 801 && boxNumber <= 900) {
      background = "brown";
    } else {
      background = "blue";
    }
  }
  this.style.backgroundColor = background;
}

