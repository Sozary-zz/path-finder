const canvas = document.getElementById("canvas");
const start = document.getElementById("start");
const begin = document.getElementById("begin");
const end = document.getElementById("end");
const block = document.getElementById("block");

const pathFinder = new PathFinder(5, 5, canvas);
pathFinder.displayGrid();

start.addEventListener("click", () => {
  pathFinder.start();
});

begin.addEventListener("click", () => {
  pathFinder.setMarker("begin");
});

end.addEventListener("click", () => {
  pathFinder.setMarker("end");
});

block.addEventListener("click", () => {
  pathFinder.setMarker("block");
});
