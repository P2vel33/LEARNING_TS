interface User {
  readonly login: string;
  password: string;
  age: number;
  //   addr?: string;
  readonly addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: "first",
  password: "qwert",
  age: 5,
  addr: "sadasdasdwqdas",
};

// user.login = "Sewe";
const userFreeze: Readonly<User> = {
  login: "first",
  password: "qwert",
  age: 5,
  addr: "sadasdasdwqdas",
};

// userFreeze.age = 30;

const dbName: string = "12345";

function senduserData(obj: User, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase, db?.toLowerCase);
}

//   const basicPorts: readonly number[] = [3000,3001,5555];
//   basicPorts[0] = 5;
//   basicPorts.push(1231),

//   const basicPortsCorr: readonly[number, ...string[]] = [3000, '3001', '5555'];
//   basicPorts[0] = 5,

const basicPortsCorr: ReadonlyArray<number> = [3000, 3001, 5555];
// basicPorts[0] = 5,
