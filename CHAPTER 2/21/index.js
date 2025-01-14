var msg;
var port3000 = 3000;
var port3001 = 3001;
msg = "Hello";
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("server started ".concat(protocol, "://server:").concat(port));
    }
    else {
        console.error("Invalid port");
    }
    return "Server started";
}
startServer("https", 3001);
function createAnimation(id, animationName, timingFunction, duration, iterCount) {
    if (timingFunction === void 0) { timingFunction = "ease"; }
    //   const elem = document.querySelector(`#${id}`) as HTMLElement;
    //   if (elem) {
    // elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterCount}`;
    console.log("".concat(animationName, " ").concat(timingFunction, " ").concat(duration, " ").concat(iterCount));
}
// }
createAnimation("id", "fade", "ease-in", 5, "infinite");
