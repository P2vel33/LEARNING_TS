var isBirthdayData = true;
var ageData = 40;
var userNameData = "John";
var createError = function (msg) {
    throw new Error(msg);
    console.log("asdas");
};
function logBrtMsg(isBirthdayData, userNameData, ageData) {
    if (isBirthdayData) {
        return "Congrats ".concat(userNameData.toUpperCase(), ", age:").concat(ageData + 1);
    }
    else if (isBirthdayData === false) {
        return "Too bad";
    }
    return createError("Error");
    // } else {
    //   return createError("Error");
    // }
}
logBrtMsg(isBirthdayData, userNameData, 40);
// const smth:never = null
