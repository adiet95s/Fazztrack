function potongan(harga, voucher){

    let promo = 0
        let total = 0
        let temp = []
    
        if(voucher == 'FAZZFOOD50' && harga >= 50000){
            promo = (harga * 50) / 100
            if(promo >= 50000){
                promo = 50000
                total = harga - promo
                temp = [total, promo]
                return temp
            } else {
                total = harga - promo
                temp = [total, promo]
                return temp
            }
        } else if(voucher == 'DITRAKTIR60' && harga >= 25000){
            promo = (harga * 60) / 100
            if(promo >= 30000){
                promo = 30000
                total = harga - promo
                temp = [total, promo]
                return(temp)
            }
        } else {
            return('Voucher tidak tersedia atau total pemesanan kurang')
        }

}

console.log(potongan(130000, 'FAZZFOOD50'));

let harga = 110000
let promo = (harga * 50) / 100
console.log(promo);