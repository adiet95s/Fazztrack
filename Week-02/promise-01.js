const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=> {
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('senin')
.then((day) =>{
    console.log(day, 'Data dari promise');
})
.catch((err) =>{
    console.log(err.message, '<<Data dari promise');
})

async function cekHari(hari){
    try {
        const day = await cekHariKerja(hari)
        console.log(day, '<<Data dari async');
    } catch (err){
        console.log(err.message, '<<Data dari async');
    }
}

cekHari('selasa')
