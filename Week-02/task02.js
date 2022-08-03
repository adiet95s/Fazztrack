const nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre','Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

function searchName(searchIn, total, callback){
    if(searchIn && total){
        if(typeof searchIn == 'string' && typeof total == 'number'){
            let lower = ''
            let arr = []
            let hasil = []
            let temp = 0
        
            for(const element of nama){
                lower = element.toLowerCase()
                temp = lower.search(searchIn)
                if(temp >= 0){
                    arr.push(element)
                }
            }
            hasil = arr.slice(0, total)
            if(hasil.length-1 < 0){
                callback('Data tidak ditemukan')
            } else {
                callback(hasil)
            }
        } else {
            callback('Input search berbentuk string dan total berbentuk number')
        }
    } else {
        callback('Masukkan data terlebih dahulu')
    }
}

function callback(data){
    console.log(data);
}

searchName('an', 3, callback);
searchName('', 'a', callback);
searchName(3, 'an', callback);
searchName('za', 3, callback);



