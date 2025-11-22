const validator = require("validator");
const chalk = require("chalk");

// VALIDATO
// (validator berguna untuk memvalidasi dan sanitasi sebuah string yang dikirimkan)

// Validasi Email
const emailBener = validator.isEmail("dafaadi2106@gmail.com"); // Memvalidasi format gmail, jika sesuai maka akan menghasilkan true
const emailSalah = validator.isEmail("dafaadi2106gmail.com"); // Menghasilkan false
// console.log(emailBener);
// console.log(emailSalah);

// Validasi Nomor Telephone
const nomerIndo = validator.isMobilePhone("085765544476", "id-ID");
// console.log(nomerIndo);

// Numeric (Mendeteksi apakah ada string di angka)
const numeric = validator.isNumeric("085765544476");
// console.log(numeric);

// CHALK
// CHALK berguna untuk menghiasi command line agar menjadi berwarna dan indah
console.log(chalk.bgBlue("Hello world!"));
const pesan = chalk`Lorem {bgRed Ipsum Dolor} Sit amet, {bgYellow consdaga} lorem ispsum {bgGreen adisipicing}`;
console.log(pesan);
