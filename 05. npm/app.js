var validator = require("validator");
var chalk = require("chalk");

// Validator => untuk validasi String
console.log(validator.isEmail("evan@gmail.com"));
console.log(validator.isMobilePhone("081123456", "id-ID"));
console.log(validator.isNumeric("081123456"));

// Chalk => untuk modifikasi Terminal
console.log(chalk.italic.bold.redBright.bgGreen("Hello World!"));
const pesan = chalk`lorem ipsum dolor {bgRed.blue sit amet} consectetur adipisicing {italic.bold.yellow elit}. Ab,rem.`;
console.log(pesan);
