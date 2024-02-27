const os = require("os");

const currentOs = {
    name: os.type(),
    release: os.release(),
    freemem: os.freemem(),
    totalmem: os.totalmem(),
}
console.log(currentOs)

