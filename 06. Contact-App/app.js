// Memanggil Lokal Module
const { tulisPertanyaan, simpanContact } = require("./contacts");

// Program Utama
const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama anda : ");
  const email = await tulisPertanyaan("Masukkan email anda : ");
  const noHP = await tulisPertanyaan("Masukkan No HP anda : ");

  simpanContact(nama, email, noHP);
};

main();
