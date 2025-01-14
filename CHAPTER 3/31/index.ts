const TOP = "Top";
const RIGHT = "Right";

enum Directions {
  TOP,
  RIGTH,
  LEFT,
  BOTTOM,
}

enum TimingFunction {
  EASE = "ease",
  EASE_IN = `${EASE}-in`,
  LINEAR = "linear",
  ERROR = 5,
}

const enum TimingFunc {
  EASE = 1,
  EASE_IN = 2,
  LINEAR = EASE * 4,
}

function frame(elem: string, dir: Directions, tfunc: TimingFunction): void {
  if (dir === Directions.RIGTH) {
    console.log(tfunc);
  }
}
frame("id", Directions.RIGTH, TimingFunction.EASE_IN);
