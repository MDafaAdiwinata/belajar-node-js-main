// Menggunakan Function
function cetakNama (nama) {
    return `Halo nama saya ${nama}`;
}

const umur = 16;

// Menggunakan Object
const siswa = {
    namaSiswa: 'Adi',
    umur: 16,
    cetakSiswa() {
        return `Halo nama saya ${this.namaSiswa} umur saya ${this.umur}`;
    }
}

// Menggunakan Class
class Orang {
    constructor() {
        console.log("Objek orang telah di buat");
    }
}

// Export
// module.exports.cetakNama = cetakNama;
// module.exports.umur = umur;
// module.exports.siswa = siswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     umur: umur,
//     siswa: siswa,
//     Orang: Orang
// }

module.exports = {
    cetakNama,
    umur,
    siswa,
    Orang
}