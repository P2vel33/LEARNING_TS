var TOP = "Top";
var RIGHT = "Right";
var Directions;
(function (Directions) {
  Directions[(Directions["TOP"] = 0)] = "TOP";
  Directions[(Directions["RIGTH"] = 1)] = "RIGTH";
  Directions[(Directions["LEFT"] = 2)] = "LEFT";
  Directions[(Directions["BOTTOM"] = 3)] = "BOTTOM";
})(Directions || (Directions = {}));
var TimingFunction;
(function (TimingFunction) {
  TimingFunction["EASE"] = "ease";
  TimingFunction["EASE_IN"] = "ease-in";
  TimingFunction["LINEAR"] = "linear";
  TimingFunction[(TimingFunction["ERROR"] = 5)] = "ERROR";
})(TimingFunction || (TimingFunction = {}));
function frame(elem, dir, tfunc) {
  if (dir === Directions.RIGTH) {
    console.log(tfunc);
  }
}
frame("id", Directions.RIGTH, TimingFunction.EASE_IN);
