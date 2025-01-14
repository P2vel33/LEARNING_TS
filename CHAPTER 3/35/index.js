var fetchData = function (url, method) {
    console.log("Fetched");
};
var reqOptions = {
    url: "https://someurl.com",
    method: "GET",
};
var reqOptionsTwo = {
    url: "https://someurl.com",
    method: "GET",
};
var str = "str";
var strr;
var method = "GET";
fetchData("qqq", "GET");
// fetchData(reqOptions.url, reqOptions.method as 'GET');
fetchData(reqOptions.url, reqOptions.method); //REACT не поддерживает
var box = document.querySelector(".box");
// box.style;
// box?.classList;
var input = document.querySelector("input");
// const someNumber: number = input.value as any as number;
var someNumber = +input.value;
console.log(someNumber.toFixed);
