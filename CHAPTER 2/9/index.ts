const userData = '{"isBirthday": true, "ageData": 40, "userNameData": "John"}';

// let salary;
// salary = 5000;

// let salary: number;
// salary = 5000;

const userObj: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
} = JSON.parse(userData);
