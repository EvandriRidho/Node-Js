// console.log("Hello Davina");

function cetakNama(nama) {
  return `Halo nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Doddy",
  umur: 20,
  cetakMhs() {
    return `nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  },
};

class Orang {
  constructor() {
    console.log("Onject Orang telah dibuat");
  }
}

// Cara untuk mengekspor agar bisa digunakan di file lain
// Dapat berupa Variabel, Function, Object, Class
module.exports = {
  cetakNama: cetakNama,
  PI: PI,
  mahasiswa: mahasiswa,
  Orang: Orang,
};

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;
