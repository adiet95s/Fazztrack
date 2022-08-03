
let arr1 = ['Nanas', 'Rambutan']
let arr2 = ['Apel', 'Pir']
let arr3 = ['Nangka']

const Buah = arr1.concat(arr2, arr3)
console.log(Buah);
console.log('.concat, yauitu sebuah build in function array yang berfungsi untuk menambahkan array kedalam sebuah array baru');

Buah.push('Manggis', 'Kelengkeng')
console.log(Buah, '<< Hasil push');
console.log('.push, yaitu sebuah build function array yang berfungsi untuk menambahakan data baru kedalam sebuah array dan diletakkan di urutan paling belakang');

let reverse1 = Buah.reverse()
console.log(reverse1, '<< Hasil dari reverse');
console.log('.reverse, yaitu sebuah build in function array yang berfungsi mengurutkan data dari belakang');

let shiftTest = Buah.shift()
console.log(shiftTest, '<< Hasil dari shift');
console.log(Buah, '<<Data array setelah shift');
console.log('.shift, berfungsi untuk mengambil data index ke 0 atau paling depan dari sebuah array dan mempengaruhi data aslinya');

let sliceTest = Buah.slice(1,4)
console.log(sliceTest, '<< Hasil Slice');
console.log('.slice, mengambil data array dari index yang diinginkan sampai dengan index yang diatur dan membuat sebuah array baru tanpa mempengaruhi data array asli');

let sortTest = Buah.sort()
console.log(sortTest, '<<Hasil Sort');
console.log('.sort, berfungsi untuk mengurutkan data didalam array berupa abjad dan angka');

let popTest = Buah.pop()
console.log(popTest, '<<Hasil Pop');
console.log(Buah);
console.log('.pop, Berfungsi untuk mengambil data dari sebuah array dari index paling belakang dan overwritten data array aslinya');

let joinTest = Buah.join(', ')
console.log(joinTest, '<<Hasil Join');
console.log('.join, berfungsi untuk memberikan separator diantara data array kemudian mengubahnya menjadi tipe data string');

let toLow = joinTest.toLowerCase()
console.log(toLow, '<< Hasil To Lower Case');
console.log('.toLowerCase berfungsi untuk mengubah abjad menjadi huruf kecil semua didalam sebuah string');

let replaceTest = toLow.replace(/a/g, '4')
console.log(replaceTest, 'Hasil Replace a menjadi 4');
console.log('.replace, berfungsi unntuk mengubah sebuah data atau index di dalam string menjadi data lain tanpa mempengaruhi data aslinya');