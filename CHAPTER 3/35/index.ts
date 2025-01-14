const fetchData = (url: string, method: "GET" | "POST"): void => {
  console.log("Fetched");
};

const reqOptions = {
  url: "https://someurl.com",
  method: "GET" as "GET",
};

const reqOptionsTwo = {
  url: "https://someurl.com",
  method: "GET" as "GET",
} as const;

const str = "str";
let strr: "strr";
const method = "GET";

fetchData("qqq", "GET");
// fetchData(reqOptions.url, reqOptions.method as 'GET');
fetchData(reqOptions.url, <"GET">reqOptions.method); //REACT не поддерживает

const box = document.querySelector(".box") as HTMLElement;
// box.style;
// box?.classList;

const input = document.querySelector("input") as HTMLInputElement;
// const someNumber: number = input.value as any as number;
const someNumber: number = +input.value;
console.log(someNumber.toFixed);

let a = "value" as const;
let b = { f: 100 } as const;
let c = [] as const;

let value = "value";
let arr = ["sd", "asd"];
let obj = {
  f: 100,
};

// let T0 = value as const;
// let e = (Math.round(Math.random() * 1) ? 'Yes' : 'NO') as const;
