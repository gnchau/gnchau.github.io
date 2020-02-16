var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup() {
  var canvas = createCanvas(500, 400);
  noStroke();

  phase = 1;
  speed = 0.075;
  maxCircleSize = 30;
  numRows = 12;
  numCols = 45;
  numStrands = 2;

  colorA = color(250, 218, 221);
  colorB = color(177, 156, 217);

  canvas.parent('sketch-holder');
  var canvas = document.querySelector('canvas');


}

function draw() {
  background(230,214,233);
  phase = frameCount * speed;

  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, 50, width - 50);

      for(var row = 0; row < numRows; row += 1) {
        var y = height/3 + row * 10 + sin(strandPhase + colOffset) * 40;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;

        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, 1.3*y, circleSize, circleSize);
      }
    }
  }
}
