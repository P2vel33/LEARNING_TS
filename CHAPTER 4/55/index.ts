interface ICompany {
  name: string;
  debts: number;
  parts: Parts[];
  departments: Department;
  menagement: {
    owner: string;
  };
}

interface Parts {
  [keys: string]: number;
}

interface Department {
  [keys: string]: string;
}

// const debts = "debts";
// type CompanyDebysType = ICompany[debts];

// let debts = "debts";
let debts: "debts" = "debts";
type CompanyDebysType = ICompany[typeof debts];

// type CompanyDebysType = typeof ICompany.debts
// type CompanyDebysType = ICompany["debts"];
type ConpanyOwnerType = ICompany["menagement"]["owner"];
type CompamyDepartmentsType = ICompany["departments"];
type CompamyPartsType = ICompany["parts"][number];
type Test = ICompany[keyof ICompany];

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "name";

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

// const hh: ICompany = {
//   name: "HH",
//   debts: 50000,
// };

// printDebts(hh, "name", "debts");

const google: ICompany = {
  name: "Google",
  debts: 50000,
  parts: [{ dev: 1 }, { dev: 2 }],
  departments: {
    sales: "sales",
    developer: "dev",
  },
  menagement: {
    owner: "Pavel",
  },
};

printDebts(google, "name", "debts");

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = "debts";
