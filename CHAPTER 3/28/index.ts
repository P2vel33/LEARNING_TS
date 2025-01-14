interface User {
  login: string;
  password: string;
  age: number;
  //   addr?: string;
  addr: string | undefined;
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

const dbName: string = "12345";

function senduserData(obj: User, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase, db?.toLowerCase);
}
