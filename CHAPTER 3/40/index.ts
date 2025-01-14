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

interface CoplexVehicle {
  name: "Car" | "Ship" | "Airplane" | "SuperAirplane";
  engine: string;
  wheels?: number;
  sail?: string;
  wings?: string;
}

const car: CoplexVehicle = {
  name: "Car",
  engine: "V8",
};

function repairVehicle(vehicle: CoplexVehicle) {
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
      //   const smth: never = vehicle;
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

repairVehicle(car);
