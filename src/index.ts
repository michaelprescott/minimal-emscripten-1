function start(arg: string | string[] | (() => string) | { s: string }): string {
  if (typeof arg === "string") {
    return commonCase(arg);
  } else if (Array.isArray(arg)) {
    return arg.map(commonCase).join(",");
  } else if (typeof arg === "function") {
    return commonCase(arg());
  } else {
    return commonCase(arg.s);
  }

  function commonCase(s: string): string {
    return s;
  }
}

let startStr = start((): string => {
  return "Hello, World!";
});
console.log(startStr);
