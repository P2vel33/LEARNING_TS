const dataFromControl = {
  water: 200,
  el: 350,
};

function checkRadings(data: typeof dataFromControl): boolean {
  const dataFromUser = {
    water: 200,
    el: 350,
  };

  if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
    return true;
  } else {
    return false;
  }
}

const PI = 3.14;
let PIClone: typeof PI;
console.log(PIClone);
