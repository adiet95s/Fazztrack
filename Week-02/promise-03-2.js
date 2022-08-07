const proses = (data) => {
    return new Promise((resolve, reject)=>{
        const hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
        let pelajaran = ''
        let valid = hari.find((item)=> {
            return item === data
        }) 
        if(valid){
            switch (data) {
                case "senin":
                  pelajaran = "PKN, Matematika, Bahasa Indonesia";
                  break;
                case "selasa":
                  pelajaran = "Bahasa Inggris, Sejarah, Agama";
                  break;
                case "rabu":
                  pelajaran = "Matematika, Bahasa Indonesia, IPA";
                  break;
                case "kamis":
                  pelajaran = "IPS, Agama, Matematika";
                  break;
                case "jumat":
                  pelajaran = "Bahasa Inggris, Olahraga";
                  break;
                case "sabtu":
                  pelajaran = 'Hari Ini Libur';
                  break;
                case "minggu":
                  pelajaran = 'Hari Ini Libur';
                  break;
                default:
                    pelajaran = 'Data tidak valid !!'
              }
            resolve(pelajaran)
        } else {
            reject(new Error('Input data hari salah'))
        }
    })
}

async function cekJadwal(data){
    try {
        if(data){
            let cek = data.toLowerCase()
            const jadwal = await proses(cek)
            console.log(jadwal);
        } else {
            console.log('Input tidak boleh kosong !!');
        }
    } catch (err){
        console.log(err.message);
    }
}

cekJadwal('')
cekJadwal('Selasa')
cekJadwal('minggu')
cekJadwal('112')




