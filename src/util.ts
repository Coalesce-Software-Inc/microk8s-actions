import * as sh from "shelljs";

export function executeCommand(isSilent: boolean, command: string) {
  const result = sh.exec(command, { silent: isSilent, async: true });
  return result.exitCode;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
