const suitJawa = (suit) => {
    return new Promise((resolve, reject) => {
        if(suit){
            if(suit == 'semut' || suit == 'manusia' || suit == 'gajah'){
                let bot = Math.floor((Math.random() * 3) + 1);
                let hasil = ''
                if(bot == 1){
                    hasil = 'semut'
                } else if (bot == 2){
                    hasil = 'gajah'
                } else if (bot == 3){
                    hasil = 'manusia'
                }
                if(suit == 'semut'){
                    if(hasil == 'gajah'){
                        resolve('Player menang, Bot Kalah !!')
                    } else if(hasil == 'manusia'){
                        resolve('Bot menang, Player kalah')
                    } else if(hasil == 'semut'){
                        resolve('Seri !!')
                    }
                } else if(suit == 'gajah'){
                    if(hasil == 'gajah'){
                        resolve('Seri !!')
                    } else if(hasil == 'manusia'){
                        resolve('Player menang, Bot kalah')
                    } else if(hasil == 'semut'){
                        resolve('Bot menang, Player kalah')
                    }
                } else if(suit == 'manusia'){
                    if(hasil == 'gajah'){
                        resolve('Bot menang, Player kalah')
                    } else if(hasil == 'manusia'){
                        resolve('Seri !!')
                    } else if(hasil == 'semut'){
                        resolve('Player menang, Bot kalah')
                    }
                } else {
                    reject(new Error('Invalid Data !!'))
                }

            } else {
                reject(new Error('Input hanya berupa semut, manusia atau gajah'))
            }
        } else {
            reject(new Error('Masukkan input'))
        }
    })
}

async function gameSuit(suit){
    try{        
        const suwit = await suitJawa(suit)
        console.log(suwit);
    } catch(err){
        console.log(err);
    }
}

gameSuit('gajah')

