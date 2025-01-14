// const x = new Number(5);
// console.log(x);
// let num2: number = 5;
// let num: Number = new Number(20);
// let num3 = Number(3);

// num = num2;
// num2 = num;

const num = 5;
const strName: string = num.toString();
const str = "5";
const numStr: number = +str;

interface Department {
  name: string;
  budjet: number;
}

const department = {
  name: "web dev",
  budjet: 50000,
};

interface Project {
  name: string;
  projectBudget: number;
}

// const mainProject: Project = {
//   ...department,
//   projectBudget: 5000,
// };

function transformDepartment(department: Department, amount: number): Project {
  return {
    name: department.name,
    projectBudget: amount,
  };
}

const mainProject: Project = transformDepartment(department, 3500);
