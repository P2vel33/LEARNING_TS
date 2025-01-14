const message: string | number | boolean = 40;
const messages: string[] | number[] = ["a", "b"];

// function printMsg(msg: string | number | boolean): void {
//   if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString());
//   } else {
//     console.log(msg);
//   }
// }

function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (typeof msg === "number") {
    console.log(msg.toFixed());
  } else {
    console.log(msg);
  }
}

printMsg(4);

const printReading = (a: number | string, b: number | boolean) => {
  if (a === b) {
    console.log(a, b);
  }
};

const printReading2 = (a: number[] | string) => {
  console.log(a.slice(0, 3));
};

const checkReadings = (
  readings: { system: number } | { user: number }
): void => {
  if ("system" in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
};

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}
