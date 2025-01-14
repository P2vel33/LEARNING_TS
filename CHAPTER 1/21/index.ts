let msg: "Hello";

const port3000: number = 3000;
const port3001: number = 3001;

msg = "Hello";

const serverConfig: { protocol: "http" | "https"; port: 3000 | 3001 } = {
  protocol: "https",
  port: 3000,
};

const startServer: (protocol: "http" | "https", port: 3000 | 3001) => string = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  if (port === port3000 || port === port3001) {
    console.log(`server started ${protocol}://server:${port}`);
  } else {
    console.error("Invalid port");
  }

  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port);

type AnimationTimingFunction = "ease" | "ease-out" | "ease-in";
type AnimationID = string | number;
type ID = string | number;

function createAnimation(
  id: AnimationID,
  animationName: string,
  timingFunction: AnimationTimingFunction = "ease",
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

const ff: boolean = true;
console.log(typeof ff.toString());
