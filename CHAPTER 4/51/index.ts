const arr: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];
const readonlyArray: ReadonlyArray<string> = ["sadda"];
// readonlyArray[0] = 'wqe';

interface IState {
  data: {
    name: string;
  };
  tag?: string;
}

const state: Partial<IState> = {
  data: {
    name: "John",
  },
};

const strictState: Required<IState> = {
  data: {
    name: "Data",
  },
  tag: "ASd",
};


function action(state: Readonly<IState>) {
  state.data.name = "adas";
}
