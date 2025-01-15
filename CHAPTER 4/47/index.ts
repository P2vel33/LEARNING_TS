function processingData<T, S>(data: T[], options: S) {
  data.length;
  switch (typeof data) {
    case "string":
      return `${data}, speed: ${options}`;
      break;
    case "number":
      return `${data}, speed: ${options}`;
      break;
    default:
      return "Not valid";
  }
  return data;
}

const res = processingData<number, string>([10], "slow");

interface DataSaver {
  processing: <T>(data: T) => T;
}

function processing<T>(data: T): T {
  return data;
}

interface ProcessingFn {
  <T>(data: T): T;
}

let newFunc: <T>(data: T) => T = processing;

interface DSaver {
  processing: typeof processing;
  processingTwo: ProcessingFn;
}

const saver: DataSaver = {
  // processing(data){
  //     console.log(data);
  //     return data;
  // }

  // processing:<T>(data:T) => {
  //     return data;
  // }

  processing: (data) => {
    return data;
  },
};
