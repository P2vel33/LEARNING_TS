interface Square {
  side: number;
  area: number;
}

interface Rect {
  a: number;
  b: number;
  area: number;
}

type Figure = Rect | Square;

function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;
function calculateArea(a: number, b?: number, c?: number): Figure {
  if (b) {
    const rect: Rect = {
      a,
      b,
      area: a * b,
    };
    return rect;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };
    return square;
  }
}

calculateArea(1);
calculateArea(2, 4);
