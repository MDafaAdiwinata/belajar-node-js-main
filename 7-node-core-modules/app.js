// Core Module
// File System
const fs = require("fs");
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
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
