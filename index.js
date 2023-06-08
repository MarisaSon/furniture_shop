const items = document.querySelectorAll(".item");
items.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    removeFocus();
    item.classList.add("selected");
  });
});

function removeFocus() {
  items.forEach (item => {
item.classList.remove('selected');
  });
}

