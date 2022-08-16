module.exports = (function devideAndSort(data){
    if(data){
        if(typeof data == 'number'){
            let temp = []
            let arr = []
            let arrTemp = []
            let convert = data.toString()
            for(i=0; i<=convert.length; i++){
                if(convert[i] == 0 || i == convert.length){
                    temp = arrTemp.sort((a,b)=>a-b).join('')
                    arr.push(temp)
                    temp = []
                    arrTemp = []
                } else {
                    arrTemp.push(convert[i])
                }
            }
            let result = +arr.join('')
            console.log(result); 
        } else {
            console.log('Data Harus berbentuk Number');
        }
    } else {
        console.log('Input tidak boleh kosong');
    }
    
})
