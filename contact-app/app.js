// Mengambil argumen dari command line
// console.log(process.argv[2]);

const contacts = require("./contacts");
const yargs = require("yargs");
yargs
  .command({
    command: "add",
    describe: "Menambahkan Contact Baru",
    builder: {
      nama: {
        demandOption: true,
        describe: "Nama Lengkap",
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHp);

      // const contact = {
      //   nama: argv.nama,
      //   email: argv.email,
      //   noHp: argv.noHp,
      // };
      // console.log(contact);
    },
  })
  .demandCommand();

// Menampilkan daftar semua nama & no telp contact
yargs.command({
  command: "list",
  describe: "Menampilkan Semua Nama dan No Hp",
  handler: function () {
    contacts.listContact();
  },
});

// Menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "Menampilkan Detail Sebuah Contact berdasarkan Nama",
  builder: {
    nama: {
      nama: {
        demandOption: true,
        describe: "Nama Lengkap",
        type: "string",
      },
    },
  },
  handler: function (argv) {
    contacts.detailContact(argv.nama);
  },
});

// Menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus Sebuah Contact berdasarkan Nama",
  builder: {
    nama: {
      nama: {
        demandOption: true,
        describe: "Nama Lengkap",
        type: "string",
      },
    },
  },
  handler: function (argv) {
    contacts.deleteContact(argv.nama);
  },
});

// Menampilkan function yargs
yargs.parse();

// Core Module
// File System
// const { rejects } = require("assert");
// const { dir } = require("console");
// // const fs = require("fs");
// const { resolve } = require("path");
// console.log(fs);

// Menulis String ke File (Sync)
// try {
//     fs.writeFileSync("data/test.txt", "data Syncro sudah berhasil");
// } catch(e) {
//     console.log(e);
// }

// Menulis String ke File (Async)
// fs.writeFile("data/test.txt", "data Async berhasil", (e) => {
//     console.log(e);
// })

// Membaca isi file (Sync)
// Gunakan utf-8 untuk mengubah buffer menjadi String
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// Membaca isi file (Async)
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//     if ( err ) {
//         console.log(err);
//         return;
//     } console.log(data);
// })

// Read Line (Untuk membaca aliran Readable, baris demi baris)
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Membuat Direktory, jika di root belom tersedia direktory data/penyimpanan nya
// const dirPath = "./data";
// const dataPath = "./data/contacts.json";
// if (!fs.existsSync(dirPath)) {
//   fs.mkdirSync(dirPath);
// }

// // Membuat file contacts.json - jika belom ada
// if (!fs.existsSync(dataPath)) {
//   fs.writeFileSync(dataPath, "[]", "utf-8");
// }

// Contoh Question Sederhana
// rl.question("Masukkan Username: ", (username) => {
//   rl.question("Masukkan Password: ", (password) => {
//     if ( username != "Admin" ) {
//         console.log(`Username ${username}, tidak di temukan!. silahkan Login kembali`);
//         rl.close();
//     } else if ( password != "admin123" ) {
//         console.log("Password salah, silahkan Login Kembali!");
//         rl.close();
//     } else {
//         console.log(`Login Berhasil!. Selamat Datang, ${username}`);
//         rl.close();
//     }
//   });
// });

// Contoh Question, Tambah data ke file JSON
// rl.question("Nama: ", (nama) => {
//   rl.question("Kelas: ", (kelas) => {
//     rl.question("Komentar: ", (komentar) => {
//       // Tangkap data dari callback/parameter
//       const contact = {
//         nama,
//         kelas,
//         komentar,
//       };

//       // Baca isi file (ini bentuk nya masih STRING)
//       const file = fs.readFileSync("data/contacts.json", "utf-8");

//       // Convert menjadi JSON file
//       const contacts = JSON.parse(file);

//       // Push kedalam file
//       contacts.push(contact);

//       // Menulis ke dalam File JSON, dan converrt string menjadi JSON
//       fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

//       console.log("Terima kasih, data kamu sudah masuk yaa!");

//       rl.close();
//     });
//   });
// });

// Konsep Async Owait - mengatasi callback hell / pertanyaan berulang/callback berulang
// const pertanyaanSatu = () => {
//   return new Promise((resolve, rejects) => {
//     rl.question("Masukkan nama anda: ", (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const pertanyaanDua = () => {
//   return new Promise((resolve, rejects) => {
//     rl.question("Masukkan email anda: ", (email) => {
//       resolve(email);
//     });
//   });
// };

// const pertanyaanTiga = () => {
//   return new Promise((resolve, rejects) => {
//     rl.question("Masukkan Nomor Telp anda: ", (noTelp) => {
//       resolve(noTelp);
//     });
//   });
// };

// // Fungsi utama
// const main = async () => {
//   const nama = await pertanyaanSatu();
//   const email = await pertanyaanDua();
//   const noTelp = await pertanyaanTiga();

//   // Tangkap data dari callback/parameter
//   const contact = {
//     nama,
//     email,
//     noTelp,
//   };

//   // Baca isi file (ini bentuk nya masih STRING)
//   const file = fs.readFileSync("data/contacts.json", "utf-8");

//   // Convert menjadi JSON file
//   const contacts = JSON.parse(file);

//   // Push kedalam file
//   contacts.push(contact);

//   // Menulis ke dalam File JSON, dan converrt string menjadi JSON
//   fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

//   console.log("Terima kasih, data kamu sudah masuk yaa!");

//   rl.close();
// };
// main();

// Membuat metode pertanyaan yang bisa di gunakan banyak pertanyaan
// const tulisPertanyaan = (pertanyaan) => {
//   return new Promise((resolve, rejects) => {
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const contacts = require('./contacts')
// const main = async () => {
//   const nama = await contacts.tulisPertanyaan("Masukkan Nama Anda: ");
//   const email = await contacts.tulisPertanyaan("Masukkan email Anda: ");
//   const noTelp = await contacts.tulisPertanyaan("Masukkan Nomor HP Anda: ");

//   contacts.simpanContact(nama, email, noTelp);

//   // Tangkap data dari callback/parameter
//   const contact = {
//     nama,
//     email,
//     noTelp,
//   };

//   // Baca isi file (ini bentuk nya masih STRING)
//   const file = fs.readFileSync("data/contacts.json", "utf-8");

//   // Convert menjadi JSON file
//   const contacts = JSON.parse(file);

//   // Push kedalam file
//   contacts.push(contact);

//   // Menulis ke dalam File JSON, dan converrt string menjadi JSON
//   fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

//   console.log("Terima kasih, data kamu sudah masuk yaa!");

//   rl.close();
// };
// main();
