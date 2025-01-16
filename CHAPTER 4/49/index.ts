// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface playerData<T, U> {
  game: T;
  hours: U;
  server: string;
}

const player1: playerData<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: playerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: playerData<string, object> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

enum NameFigure {
  RECT = "rect",
  TRIANGLE = "triangle",
  CIRCLES = "circles",
  LINE = "line",
}

interface Obj {
  name: NameFigure;
  data?: object;
}

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

function calculateAmountOfFigures(figure: Obj[]): AmountOfFigures {
  const exem: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };
  figure.forEach((item) => {
    switch (item.name) {
      case NameFigure.RECT:
        exem.squares++;
        break;
      case NameFigure.CIRCLES:
        exem.circles++;
        break;
      case NameFigure.TRIANGLE:
        exem.triangles++;
        break;
      default:
        exem.others++;
        break;
    }
  });

  return exem;
}

const data = [
  {
    name: NameFigure.RECT,
    data: { a: 5, b: 10 },
  },
  {
    name: NameFigure.RECT,
    data: { a: 6, b: 11 },
  },
  {
    name: NameFigure.TRIANGLE,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: NameFigure.LINE,
    data: { l: 15 },
  },
  {
    name: NameFigure.CIRCLES,
    data: { r: 10 },
  },
  {
    name: NameFigure.CIRCLES,
    data: { r: 5 },
  },
  {
    name: NameFigure.RECT,
    data: { a: 15, b: 7 },
  },
  {
    name: NameFigure.TRIANGLE,
  },
];

console.log(calculateAmountOfFigures(data));
