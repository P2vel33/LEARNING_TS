var isBirthdayData = true;
var ageData = 40;
var userNameData = "John";
var createError = function (msg) {
    throw new Error(msg);
};
function logBrtMsg(isBirthdayData, userNameData, ageData) {
    if (isBirthdayData) {
        return "Congrats ".concat(userNameData.toUpperCase(), ", age:").concat(ageData + 1);
    }
    else {
        return createError("Error");
    }
}
logBrtMsg(isBirthdayData, userNameData, 40);
