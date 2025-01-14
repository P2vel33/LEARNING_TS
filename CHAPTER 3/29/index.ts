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

let dbName: string;
senduserData(user, "asdasd");
console.log(dbName!);

function senduserData(obj: User, db?: string): void {
  dbName = "12314";
  console.log(obj.parents!.father?.toLowerCase, db!.toLowerCase);
}
