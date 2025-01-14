interface FData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

const formData: FData = {
  email: "",
  title: "",
  text: "",
  checkbox: false,
};

const inputID = document.querySelector("#email") as HTMLInputElement;
const inputTitle = document.querySelector("#title") as HTMLInputElement;
const inputText = document.querySelector("#text") as HTMLInputElement;
const inputCheckbox = document.querySelector("#checkbox") as HTMLInputElement;
const form = document.querySelectorAll("from");

form.forEach((form) =>
  form.addEventListener("click", (e) => {
    e.preventDefault();
    formData.email = inputID?.value ?? "";
    formData.title = inputTitle?.value ?? "";
    formData.text = inputText?.value ?? "";
    formData.checkbox = inputCheckbox?.checked ?? false;
    try {
      if (validateFormData(formData)) {
        checkFormData(formData);
      }
    } catch (error) {}
  })
);

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: FData): boolean {
  // Если каждое из свойств объекта data правдиво...
  if (Object.values(data).every((value) => value)) {
    return true;
  } else {
    console.log("Please, complete all fields");
    return false;
  }
}

function checkFormData(data: FData) {
  const { email } = data;
  const emails: string[] = [
    "example@gmail.com",
    "example@ex.com",
    "admin@gmail.com",
  ];

  // Если email совпадает хотя бы с одним из массива
  if (emails.some((e) => e === email)) {
    console.log("This email is already exist");
  } else {
    console.log("Posting data...");
  }
}
