class PathFinder {
  constructor(w, h, canvas) {
    this.w = w;
    this.h = h;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.grid = this.generateGrid(w, h);
    this.maxH = canvas.width;
    this.maxW = canvas.height;
    this.tileStroke = 2;
    this.tileSize = (this.maxW - this.tileStroke) / this.w;
    this.marker = null;
    this.markers = {
      empty: "white",
      begin: "green",
      end: "red",
      block: "black",
    };

    this.handleClick();
  }

  setMarker(marker) {
    if (marker in this.markers) {
      this.marker = marker;
    } else {
      console.error("Marker not found");
    }
  }

  handleClick() {
    this.canvas.addEventListener("click", (e) => {
      const x = parseInt((e.layerX / this.tileSize) % this.w),
        y = parseInt((e.layerY / this.tileSize) % this.h);
      this.grid[x][y] =
        this.grid[x][y] === this.marker ? this.markers.empty : this.marker;
      this.displayGrid();
    });
  }

  start() {}

  generateGrid(w, h) {
    const grid = new Array(h);
    for (let i = 0; i < h; i++) {
      grid[i] = new Array(w).fill("empty");
    }
    return grid;
  }

  displayGrid() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.maxW, this.maxH);

    for (let i = 0; i < this.w; i++) {
      for (let j = 0; j < this.h; j++) {
        this.ctx.fillStyle = this.markers[this.grid[i][j]];
        this.ctx.fillRect(
          i * this.tileSize + this.tileStroke,
          j * this.tileSize + this.tileStroke,
          this.tileSize - this.tileStroke,
          this.tileSize - this.tileStroke
        );
      }
    }
  }
}
