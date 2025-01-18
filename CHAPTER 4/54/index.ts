interface ICompany {
  name: string;
  debts: number;
}

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "name";

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
  name: "HH",
  debts: 50000,
};

printDebts(hh, "name", "debts");

const google: ICompany = {
  name: "Google",
  debts: 50000,
};

printDebts(google, "name", "debts");

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = "debts";
