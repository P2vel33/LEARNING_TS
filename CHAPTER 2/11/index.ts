const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const createError = (msg: string) => {
  throw new Error(msg);
  console.log("asdas");
};

function logBrtMsg(
  isBirthdayData: boolean,
  userNameData: string,
  ageData: number
): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age:${ageData + 1}`;
  } else if (isBirthdayData === false) {
    return "Too bad";
  }
  return createError("Error");
  // } else {
  //   return createError("Error");
  // }
}

logBrtMsg(isBirthdayData, userNameData, 40);

// const smth:never = null
