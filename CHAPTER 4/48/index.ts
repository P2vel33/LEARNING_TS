interface ProcessingFn {
  <T>(data: T): T;
}

function processing<T>(data: T): T {
  return data;
}

let newFunc: ProcessingFn = processing;

type Smth<T> = T;

const num: Smth<number> = 2;

type User<T> = {
  login: T;
  age: number;
};

const user: User<string> = {
  login: "str",
  age: 54,
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5];

interface ParentsOfUser {
  mother: string;
  father: string;
}

interface Parents<ParentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
}

const userParent: Parents<{ mother: string; father: string }> = {
  login: "str",
  age: 50,
  parents: { mother: "Anna", father: "No data" },
};

const userParent2: Parents<{
  mother: string;
  father: string;
  married: boolean;
}> = {
  login: "str",
  age: 50,
  parents: { mother: "string", father: "string", married: true },
};

const depositeMoney = <T extends number | string>(amount: T): T => {
  console.log(`req to server with amount: ${amount}`);
  return amount;
};

depositeMoney(500);
depositeMoney("500");
// depositeMoney(true);
