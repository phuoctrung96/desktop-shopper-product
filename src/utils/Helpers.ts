export function splitName(name: string) {
  let newName = name
    .split(" ")
    .map((str) => str[0])
    .join("");
  return newName.length <= 2
    ? newName
    : newName[0] + newName[newName.length - 1];
}

export function checkObjectEmpty(data: any) {
  return Object.keys(data).length === 0;
}

export function convertSecondToMinute(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds - minutes * 60;
  return minutes + ":" + newSeconds;
}
