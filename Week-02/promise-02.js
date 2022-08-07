const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry data not found'), [])
        }
    }, 3000)
}

function callback(e,data){
    console.log(e,data);
}

function showMonth (e,data) {
    let month = data.map(callback)
    return month
}

getMonth(showMonth)