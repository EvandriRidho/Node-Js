// console.log("Hello world!");

// const cetakNama = (nama) => `Nama saya ${nama}`;
// console.log(cetakNama("evandri"));

// const fs = require("fs"); // Import Core Module
// const cetakNama = require("./coba"); // Import Lokal Module
// const moment = require("moment"); // Import NPM Module

// console.log("Hello Evandri");

// require untuk menerima export dari file lain
const coba = require("./coba");

console.log(
  coba.cetakNama("Evandri"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
