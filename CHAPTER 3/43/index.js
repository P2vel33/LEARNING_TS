var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
var inputID = document.querySelector("#email");
var inputTitle = document.querySelector("#title");
var inputText = document.querySelector("#text");
var inputCheckbox = document.querySelector("#checkbox");
var form = document.querySelectorAll("from");
form.forEach(function (form) {
    return form.addEventListener("click", function (e) {
        var _a, _b, _c, _d;
        e.preventDefault();
        formData.email = (_a = inputID === null || inputID === void 0 ? void 0 : inputID.value) !== null && _a !== void 0 ? _a : "";
        formData.title = (_b = inputTitle === null || inputTitle === void 0 ? void 0 : inputTitle.value) !== null && _b !== void 0 ? _b : "";
        formData.text = (_c = inputText === null || inputText === void 0 ? void 0 : inputText.value) !== null && _c !== void 0 ? _c : "";
        formData.checkbox = (_d = inputCheckbox === null || inputCheckbox === void 0 ? void 0 : inputCheckbox.checked) !== null && _d !== void 0 ? _d : false;
        try {
            if (validateFormData(formData)) {
                checkFormData(formData);
            }
        }
        catch (error) { }
    });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (Object.values(data).every(function (value) { return value; })) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = [
        "example@gmail.com",
        "example@ex.com",
        "admin@gmail.com",
    ];
    // Если email совпадает хотя бы с одним из массива
    if (emails.some(function (e) { return e === email; })) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
