var isBirthdayData = true;
var ageData = 40;
var userNameData = "John";
var userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John",
};
var createError = function (msg) {
    throw new Error(msg);
};
function logBrtMsg(data) {
    if (data.isBirthdayData) {
        return "Username: ".concat(data.userNameData.toUpperCase(), ", age: ").concat(data.ageData);
    }
    else {
        return createError("Error");
    }
}
console.log(logBrtMsg(userData));
// logBrtMsg(userData);
