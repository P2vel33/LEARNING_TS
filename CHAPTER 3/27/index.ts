let a = "string";
const salary: number = 500;

interface UserData {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
}

const userData = '{"isBirthdayData: true, ageData: 40, userNameData: "John""}';

const arr = ["sss", 5, true];

const userObj: UserData = JSON.parse(userData);
console.log(userObj.ageData);

let isOkay = true;
let movement: boolean | string = false;

if (isOkay) {
  movement = "moving";
}
