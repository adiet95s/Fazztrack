const callback = (e) => {
    console.log(e);
}

function errorHandle(nilaiAwal, nilaiAkhir, data, proses){
    if(typeof nilaiAwal == 'number' && typeof nilaiAkhir == 'number'){
        if(nilaiAwal < nilaiAkhir){
            if(data.length >= 4){
                proses(nilaiAwal, nilaiAkhir, data, callback)
            } else {
                callback('Jumlah Data harus lebih besar dari 5')
            }
        } else {
            callback('nilai akhir harus lebih besar dari nilai awal')
        }
    } else {
        callback('Nilai awal dan nilai akhir harus berbentuk Number')
    }
}

const proses = (nilaiAwal, nilaiAkhir, data, callback) => {
    sorting = data.sort((a,b) => a-b)
    let temp = []

    for(const element of data){
        if(element > nilaiAwal && element < nilaiAkhir){
            temp.push(element)
        }
    }
    if(temp.length > 0){
        callback(temp)
    } else {
        callback('Data tidak ditemukan')
    }
}

function SeleksiNilai(nilaiAwal, nilaiAkhir, data){
   errorHandle(nilaiAwal, nilaiAkhir, data, proses)
}

SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(4, 17 , [2, 25, 4])
SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
SeleksiNilai('a', 'b' , [2, 25, 4, 1, 30, 18])

