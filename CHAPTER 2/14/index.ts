const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = "John";

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  message: {
    error: "Error",
  },
};

const createError = (msg: string) => {
  throw new Error(msg);
};

// function logBrtMsg(data: {
//   isBirthdayData: boolean;
//   userNameData: string;
//   ageData: number;
// }): string {
//   if (data.isBirthdayData) {
//     return `Username: ${data.userNameData.toUpperCase()}, age: ${data.ageData}`;
//   } else {
//     return createError("Error");
//   }
// }

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  message: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  message: { error: string };
}): string {
  if (isBirthdayData) {
    return `Username: ${userNameData.toUpperCase()}, age: ${ageData}`;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));
// logBrtMsg(userData);
