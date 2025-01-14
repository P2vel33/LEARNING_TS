// type Config = {
//   protocol: "http" | "https";
//   port: 3000 | 3001;
// };

interface Config {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface Role {
  role: string;
}

interface ConfigWithRole extends Config, Role {}

// type Role = { role: string };
// type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "Admin",
  log: (msg: string): void => console.log(msg),
};

// const backupConfig: ConfigWithRole = {
//   protocol: "http",
//   port: 3000,
//   role: "User",
// };

type StartFunc = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

const startServer: StartFunc = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

type AnimationTimingFunction = "ease" | "ease-out" | "ease-in";

interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: "absolute",
  top: "20px",
  left: "50px",
};
