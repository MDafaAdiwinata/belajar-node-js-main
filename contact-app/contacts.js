const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// Membuat Direktory, jika di root belom tersedia direktory data/penyimpanan nya
const dirPath = "./data";
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contacts.json - jika belom ada
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Membuat metode pertanyaan yang bisa di gunakan banyak pertanyaan
// const tulisPertanyaan = (pertanyaan) => {
//   return new Promise((resolve, rejects) => {
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     });
//   });
// };

const loadContent = () => {
  // Baca isi file (ini bentuk nya masih STRING)
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  // Convert menjadi JSON file
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noTelp) => {
  // Tangkap data dari callback/parameter
  const contact = {
    nama,
    email,
    noTelp,
  };

  const contacts = loadContent();

  // // Baca isi file (ini bentuk nya masih STRING)
  // const file = fs.readFileSync("data/contacts.json", "utf-8");

  // // Convert menjadi JSON file
  // const contacts = JSON.parse(file);

  // Cek Duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, pake nama lain yaa!")
    );
    return false;
  }

  // Cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email Ga Valid"));
    }
  }

  // Cek noHp
  if (!validator.isMobilePhone(noTelp, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid"));
  }

  // Push kedalam file
  contacts.push(contact);

  // Menulis ke dalam File JSON, dan converrt string menjadi JSON
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.bgGreen.bold("Terima kasih, data kamu sudah masuk yaa!"));
};

// List Contact
const listContact = () => {
  const contacts = loadContent();
  console.log(chalk.bgBlue.bold("Daftar Contact"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1} . ${contact.nama} - ${contact.noTelp} `);
  });
};

// Detail Contact
const detailContact = (nama) => {
  const contacts = loadContent();

  // Tempat untuk menampung data nama, dan lower case semua dari inputan
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  // Kalo namanya ga ketemu
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} Tidak di temukan!`));
    return false;
  }

  // Kalo ketemu
  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noTelp);
  if (contact.email) {
    console.log(contact.email);
  }
};

// Fungsi Delete Contact
const deleteContact = (nama) => {
  const contacts = loadContent();

  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} Tidak di temukan!`));
    return false;
  }

  // Menghapus ke dalam File JSON, dan converrt string menjadi JSON
  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

  console.log(chalk.bgGreen.bold(`${nama} Berhasil di HAPUS!`));
};

// Export Fungsi
module.exports = {
  simpanContact,
  listContact,
  detailContact,
  deleteContact,
};
