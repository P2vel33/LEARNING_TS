const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = "John";

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "ERROR",
  },
};

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Name: ${userNameData}, age: ${ageData + 1} `;
  }
  return createError(error);
}
console.log(logBrtMsg(userData));

const departments: string[] = ["dev", "design", "marketing"];
const nums: number[] = [1, 2, 3];

const num2: number[][] = [
  [1, 2, 3],
  [3, 4, 5],
  [7, 8, 9],
];

const department = departments[0];

departments.push("new");
const report = departments
  .filter((d: string) => d !== "dev")
  .map((d: string) => `${d} - done`);

const [first] = report;
const [second] = report;
console.log(report[2]);
console.log(first);
console.log(second);

function logMass([first, second]: [
  first: string,
  second: string,
  third: string
]): string {
  return `${first} and ${second} and and and ${first}`;
}

// console.log(logMass(report));
