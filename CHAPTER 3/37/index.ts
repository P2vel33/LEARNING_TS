// function printMsg(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m));
//   } else if (typeof msg === "number") {
//     console.log(msg);
//   } else {
//     console.log(msg);
//   }
//   console.log(msg);
// }

// const box = document.querySelector(".box");
// box?.addEventListener("click", () => {});

// function isNumber(n: string[] | number | boolean): n is number {
//   // Возвращается положительный ответ (true), если  typeof n === 'number'. False if n isn`t number
//   return typeof n === "number";
// }

function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (isNumber(msg)) {
    console.log(msg.toFixed());
  } else {
    console.log(msg);
  }
  console.log(msg);
}

printMsg(40);

function isNumber(n: unknown): n is number {
  // Возвращается положительный ответ (true), если  typeof n === 'number'. False if n isn`t number
  return typeof n === "number";
}

interface Car {
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}

interface Ship {
  engine: string;
  sail: string;
}

function repairVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    console.log(vehicle.wheels);
  } else if (isShip(vehicle)) {
    console.log(vehicle.sail);
  } else {
    console.log(vehicle);
  }
}

// function isCar(car: Car | Ship): boolean {
//     return "wheels" in car;
//   }

// function isCar(car: Car | Ship): car is Car {
//   return "wheels" in car;
// }

function isCar(car: Car | Ship): car is Car {
  return (car as Car).wheels.number !== undefined;
}

function isShip(ship: Car | Ship): ship is Ship {
  return "sail" in ship;
}
