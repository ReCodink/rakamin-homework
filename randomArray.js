// - Buatlah 100 nilai random (1 sampai 50) pada 1 array
// - Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan
// - nilai baru pada array
// - Gunakan 2 array yang telah dibuat untuk mendapatkan
        // - Min
        // - Max
        // - Total
        // - Rata - rata
// - Bandingkan kedua buah array, contoh
        // - Min lebih besar array genap
        // - Max lebih besar array ganjil
        // - Total memiliki nilai sama antara array genap dan ganjil
        // - Rata rata lebih besar array ganjil

// - Output dari aplikasi:
        // - Array dengan jumlah index 100
        // - Array genap dengan jumlah index 50
        // - Array ganjil dengan jumlah index 50
        // - Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)
        // - Perbandingan nilai min, max, total dan rata rata
// - Catatan :
        // - Dilarang menggunakan fungsi bawaan untuk min, max, total dan rata rata
        // - Buatlah menjadi beberapa fungsi agar kode dapat digunakan kembali
        // - Push ke REPO dan upload link REPO, tolong repo dalam status public


// Fungsi untuk mengisi array dengan nilai acak dari 1 sampai 50
function isiArrayDenganNilaiAcak(panjang) {
    const nilaiArray = [];
    for (let i = 0; i < panjang; i++) {
        nilaiArray.push(Math.floor(Math.random() * 50) + 1);
    }
    return nilaiArray;
}

// Fungsi untuk membagi array menjadi array genap dan ganjil
function bagiArrayGenapGanjil(nilaiArray) {
    const arrayGenap = [];
    const arrayGanjil = [];
    for (let i = 0; i < nilaiArray.length; i++) {
        if (i % 2 === 0) {
            arrayGenap.push(nilaiArray[i]);
        } else {
            arrayGanjil.push(nilaiArray[i]);
        }
    }
    return [arrayGenap, arrayGanjil];
}

// Fungsi untuk mencari nilai minimum dalam array
function cariNilaiMinimum(nilaiArray) {
    let minArray = nilaiArray[0];
    for (let i = 1; i < nilaiArray.length; i++) {
        if (nilaiArray[i] < minArray) {
            minArray = nilaiArray[i];
        }
    }
    return minArray;
}

// Fungsi untuk mencari nilai maksimum dalam array
function cariNilaiMaksimum(nilaiArray) {
    let maxArray = nilaiArray[0];
    for (let i = 1; i < nilaiArray.length; i++) {
        if (nilaiArray[i] > maxArray) {
            maxArray = nilaiArray[i];
        }
    }
    return maxArray;
}

// Fungsi untuk menghitung total nilai dalam array
function totalNilaiArray(nilaiArray) {
    let totalArray = 0;
    for (let i = 0; i < nilaiArray.length; i++) {
        totalArray += nilaiArray[i];
    }
    return totalArray;
}

// Fungsi untuk menghitung rata - rata nilai dalam array
function rataRataNilaiArray(nilaiArray) {
    if (nilaiArray.length === 0) {
        return 0;
    }
    const total = totalNilaiArray(nilaiArray);
    return total / nilaiArray.length;
}

// Mengisi array dengan 100 nilai random dari 1 sampai 50
const arrayUtama = isiArrayDenganNilaiAcak(100);

// Membagi array menjadi array genap dan ganjil
const [arrayGenap, arrayGanjil] = bagiArrayGenapGanjil(arrayUtama);

// Menghitung nilai minimum, maksimum, total, dan rata - rata untuk kedua array
// Genap
const minGenap = cariNilaiMinimum(arrayGenap);
const maxGenap = cariNilaiMaksimum(arrayGenap);
const totalGenap = totalNilaiArray(arrayGenap);
const rataRataGenap = rataRataNilaiArray(arrayGenap);

// Ganjil
const minGanjil = cariNilaiMinimum(arrayGanjil);
const maxGanjil = cariNilaiMaksimum(arrayGanjil);
const totalGanjil = totalNilaiArray(arrayGanjil);
const rataRataGanjil = rataRataNilaiArray(arrayGanjil);

// Membandingkan nilai - nilai antara array genap dan ganjil
const perbandinganMin = minGenap > minGanjil ? "Min lebih besar array genap" : "Min lebih besar array ganjil";
const perbandinganMax = maxGenap > maxGanjil ? "Max lebih besar array genap" : "Max lebih besar array ganjil";
const perbandinganTotal = totalGenap === totalGanjil ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil";
const perbandinganRataRata = rataRataGenap > rataRataGanjil ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil";

// Output Hasil
console.log("Array dengan jumlah index 100: ", arrayUtama);
console.log("Array genap dengan jumlah index 50: ", arrayGenap);
console.log("Array ganjil dengan jumlah index 50: ", arrayGanjil);
console.log("Min, Max, Total, Rata - rata pada array genap: ");
console.log("Min Genap: ", minGenap);
console.log("Max Genap: ", maxGenap);
console.log("Total Genap: ", totalGenap);
console.log("Rata - rata Genap: ", rataRataGenap);
console.log("Min, Max, Total, Rata - rata pada nilai array ganjil: ");
console.log("Min Ganjil: ", minGanjil);
console.log("Max Ganjil: ", maxGanjil);
console.log("Total Ganjil: ", totalGanjil);
console.log("Rata - rata Ganjil: ", rataRataGanjil);
console.log("Perbandingan Nilai: ");
console.log("Min: ", perbandinganMin);
console.log("Max: ", perbandinganMax);
console.log("Total: ", perbandinganTotal);
console.log("Rata - rata: ", perbandinganRataRata);
