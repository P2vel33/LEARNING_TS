let msg: "Hello";

const port3000: number = 3000;
const port3001: number = 3001;

msg = "Hello";

function startServer(
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" {
  if (port === port3000 || port === port3001) {
    console.log(`server started ${protocol}://server:${port}`);
  } else {
    console.error("Invalid port");
  }

  return "Server started";
}

startServer("https", 3001);

function createAnimation(
  id: string | number,
  animationName: string,
  timingFunction: "ease" | "ease-out" | "ease-in" = "ease",
  duration: number,
  iterCount: "infinite" | number
): void {
  //   const elem = document.querySelector(`#${id}`) as HTMLElement;
  //   if (elem) {
  // elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterCount}`;
  console.log(`${animationName} ${timingFunction} ${duration} ${iterCount}`);
}
// }

createAnimation("id", "fade", "ease-in", 5, "infinite");
