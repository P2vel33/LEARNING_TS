function processingData(
  data: string | number | boolean | string[]
): string | number | boolean | string[] {
  return data;
}

function processData<T>(data: T): T {
  return data;
}

const res1 = processData(1);
const res2 = processData("1");
const arr = processData([1, 2]);

const num: number = 1;
const res3 = processData<number>(num);
// const res4 = processData<string>(4);

interface PrintUK {
  design: number;
}

interface PrintES {
  design: string;
}

interface Print<T> {
  design: T;
}

const somePrint: Print<string> = {
  design: "sw",
};

const someOtherPrint: Print<number> = {
  design: 3,
};

// Array<T>

// RefferalSystem<UserID,UserRefferals>

// T U V S P K/V
