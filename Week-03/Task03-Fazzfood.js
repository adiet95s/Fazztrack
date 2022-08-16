const Potongan = (harga, voucher) => {
    return new Promise((resolve, reject) => {
        let promo = 0

        if(voucher == 'FAZZFOOD50' && harga >= 50000){
            promo = (harga * 50) / 100
            if(promo >= 50000){
                promo = 50000
                resolve(promo)
            } else {
                resolve(promo)
            }
        } else if(voucher == 'DITRAKTIR60' && harga >= 25000){
            promo = (harga * 50) / 100
            if(promo >= 25000){
                promo = 30000
                resolve(promo)
            } else {
                resolve(promo) 
            }
        } else {
            reject('Voucher tidak tersedia')
        }
    })
}

const Pajak = (pajak, harga) => {
    return new Promise((resolve, reject)=>{
        let biayaPajak = false
        if(pajak == true){
            biayaPajak = (harga * 5) / 100
            resolve(biayaPajak)
        } else{
            resolve(0)
        } 
    })
}

const Jarak = (jarak) => {
    return new Promise((resolve, reject)=>{
        let ongkir = 0
        let biayaOngkir = 0
    
        if(jarak > 2){
            ongkir = jarak - 2
            biayaOngkir = (ongkir * 3000) + 5000
            resolve(biayaOngkir)
        } else if(jarak){
            biayaOngkir = 5000
            resolve(biayaOngkir)
        } else {
            reject('Invalid Data')
        }
    })
}

module.exports = (async function FazzFood(harga, voucher, jarak, pajak){
    try {
        const potongan = await Potongan(harga, voucher)
        const biayaOngkir = await Jarak(jarak)
        const biayaPajak = await Pajak(pajak, harga)
        const subTotal = (harga - potongan) + biayaOngkir + biayaPajak
        console.log(`\n Harga : ${harga} \n Potongan : ${potongan} \n Biaya Antar : ${biayaOngkir} \n Pajak : ${biayaPajak} \n SubTotal : ${subTotal}`);
    } catch (err) {
        console.log(err.message);
    }
})



