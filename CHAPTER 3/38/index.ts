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
  name: "Car";
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}

interface Ship {
  name: "Ship";
  engine: string;
  sail: string;
}

interface Airplane {
  name: "Airplane";
  engine: string;
  wings: string;
}

interface SuperAieplane {
  name: "SuperAirplane";
  engine: string;
  wings: string;
}

function repairVehicle(vehicle: Vehicle) {
  if (isCar(vehicle)) {
    console.log(vehicle.wheels);
  } else if (isShip(vehicle)) {
    console.log(vehicle.sail);
  } else {
    vehicle.wings;
  }

  switch (vehicle.name) {
    case "Car":
      console.log(vehicle.wheels);
      break;
    case "Ship":
      console.log(vehicle.sail);
      break;
    case "Airplane":
      console.log(vehicle.wings);
      break;
    case "SuperAirplane":
      console.log(vehicle.wings);
      break;
    default:
      const smth: never = vehicle;
      console.log("OOOOUPS!!");
  }
}

// function isCar(car: Car | Ship): boolean {
//     return "wheels" in car;
//   }

// function isCar(car: Car | Ship): car is Car {
//   return "wheels" in car;
// }

type Vehicle = Car | Ship | Airplane | SuperAieplane;

function isCar(car: Vehicle): car is Car {
  return (car as Car).wheels.number !== undefined;
}

function isShip(ship: Vehicle): ship is Ship {
  return "sail" in ship;
}

// const logBrtMsg = (isBirthday:boolean,userName:string,age:number): string => {
//     if(isBirthday === true){
//         return `Congrats ${userName}, age: ${age + 1}`;
//     } else if (isBirthday === false){
//         return 'FUCK YOU'
//     }
//     return throw new Error('ERROR')
// }
