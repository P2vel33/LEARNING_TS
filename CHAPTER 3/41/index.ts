type Animal = "cat" | "dog" | "bird";

enum Status {
  isAvailable = "available",
  isNotAvailable = "not available",
}

interface Request {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

interface AnimalAvailableData extends Request {
  location: string;
  age?: number;
}

interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

interface ResponseOne {
  status: Status.isAvailable;
  data: AnimalAvailableData;
}

interface ResponseTwo {
  status: Status.isNotAvailable;
  data: AnimalNotAvailableData;
}

type Res = ResponseOne | ResponseTwo;

function isOkay(res: Res): res is ResponseOne {
  return (res as ResponseOne).data?.animal !== undefined;
}

function isNotOkay(res: Res): res is ResponseTwo {
  return (res as ResponseTwo).data?.message !== undefined;
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
  if (isOkay(animal)) {
    return animal.data;
  } else if (isNotOkay(animal)) {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  } else {
    return "NO RESPONSE!!!";
  }
}
