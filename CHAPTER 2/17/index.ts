const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "ERROR",
  },
};

const userDataTuple: [boolean, number, ...string[]] = [
  true,
  40,
  "John",
  "Alex",
  "Anna",
];
// userDataTuple[0] ;
// userDataTuple.push(50);
// userDataTuple[3];

userDataTuple.map((t) => `${t} - data`);

const [bthd, age, user, usero] = userDataTuple;
console.log(`${user} + ${usero}`);

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  ageData,
  userNameData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
  messages: {
    error: string;
  };
}): string {
  if (isBirthdayData) {
    return `Name: ${userNameData}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
}
