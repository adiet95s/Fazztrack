module.exports = (function palindrome(data) {
    if(typeof data == 'string'){
        let temp = ''
        for (let i=data.length-1; i>=0; i--){
            temp += data[i]
        }
        if(temp == data){
            console.log('Kata ini palindrome'); 
        } else {
            console.log('Kata ini bukan palindrome'); 
        }
    } else {
        console.log(' Input tipe data salah !!'); 
    }
    
})

