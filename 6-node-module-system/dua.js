// const fs = require('fs'); // Core Modules / Modul Bawaan Node js
// const cetakNama = require('./satu'); // Local Modules
// const moment = require('moment'); // Third party modules / node_modules / npm module

const satu = require('./satu')

console.log(satu.cetakNama("Adi"), satu.umur);
console.log(satu.siswa.cetakSiswa())
console.log(new satu.Orang())