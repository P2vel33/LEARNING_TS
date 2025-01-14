// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";

// const createError = (msg: string) => {
//   throw new Error(msg);
//   console.log("asdas");
// };

// function logBrtMsg(
//   isBirthdayData: boolean,
//   userNameData: string,
//   ageData: number
// ): string {
//   if (isBirthdayData) {
//     return `Congrats ${userNameData.toUpperCase()}, age:${ageData + 1}`;
//   } else if (isBirthdayData === false) {
//     return "Too bad";
//   }
//   return createError("Error");
//   // } else {
//   //   return createError("Error");
//   // }
// }

// logBrtMsg(isBirthdayData, userNameData, 40);

// const smth:never = null

const test: null = null;
const test2: any = null;
// const test3: string = null;
// const test4: number = null;

const test5: undefined = undefined;
const test6: any = undefined;
// const test7: string = undefined;

let smth;

function getRandomData() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return "Some data";
  }
}

const data = getRandomData();
const trimmedData = data ? data.trim() : null;
