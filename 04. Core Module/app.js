// Core Module
// File System
const fs = require("fs"); //memanggil core module

// Menulis string secara synchronous
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchoronous!");
// } catch (err) {
//   console.log(err);
// }

// Menulis String secara asynchoronous
// fs.writeFile("data/test.txt", "Hello Evandri asynchronous", (err) => {
//   console.log(err);
// });

// Membaca file secara synchronous
// const data = fs.readFileSync("data/contacts.json");
// console.log(data.toString());

//Membaca file secara asynchronous
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Read Line
const readline = require("node:readline"); //memanggil core module

const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

// rl.question("Masukan nama anda : ", (nama) => {
//   // const [nama, umur] = input.split(" ");
//   // console.log(`Terima Kasih ${nama} ${umur} tahun.`);
//   rl.question("Masukan umur anda : ", (umur) => {
//     console.log(`Terima Kasih ${nama}, yang sudah berumur ${umur}.`);
//     rl.close(); // agar prompt kembali
//   });
// });

// Latihan Core Module
//synchronous
rl.question("Masukan nama anda : ", (nama) => {
  rl.question("Masukan no HP anda : ", (noHP) => {
    const contact = { nama, noHP };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Terima Kasih Sudah memasukan data");
    rl.close();
  });
});
