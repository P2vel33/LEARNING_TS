// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
enum TypesOfMedia {
  VIDEO = "video",
  AUDIO = "audio",
}

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
enum FormatsOfMedia {
  MP4 = ".mp4",
  MOV = ".mov",
  MKV = ".mkv",
  FLV = ".flv",
  WEBM = ".webM",
}

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
interface IMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown;
}

function playMedia({ name, type, format, subtitles, marks }: IMedia): //   = {
//     name: "example",
//     type: TypesOfMedia.VIDEO,
//     format: FormatsOfMedia.MP4,
//   }
string {
  let marksLog: unknown;
  if (Array.isArray(marks)) {
    marksLog = marks.reduce((res, item) => `${res} ${item}`);
  } else if (typeof marks === "string") {
    marksLog = marks;
  } else {
    marksLog = "Unsupported type of marks";
  }

  // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
  // Если это строка, то просто поместить её в marksLog
  // Если что-то другое - то marksLog = "Unsupported type of marks"
  // Не допускайте any!

  console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
  // помните что это за оператор ??

  return "Media started";
}

playMedia({
  name: "WoW",
  format: FormatsOfMedia.MKV,
  type: TypesOfMedia.VIDEO,
  //   subtitles: "",
  marks: ["4:30", "5:40"],
});
