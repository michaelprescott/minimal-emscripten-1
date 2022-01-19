"use strict";
function start(arg) {
    if (typeof arg === "string") {
        return commonCase(arg);
    }
    else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(",");
    }
    else if (typeof arg === "function") {
        return commonCase(arg());
    }
    else {
        return commonCase(arg.s);
    }
    function commonCase(s) {
        return s;
    }
}
let startStr = start(() => {
    return "Hello, World!";
});
console.log(startStr);
