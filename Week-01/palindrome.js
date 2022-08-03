function palindrome(data) {
    if(typeof data == 'string'){
        let temp = ''
        for (let i=data.length-1; i>=0; i--){
            temp += data[i]
        }
        if(temp == data){
            return 'Kata ini palindrome'
        } else {
            return 'Kata ini bukan palindrome'
        }
    } else {
        return ' Input tipe data salah !!'
    }
    
}

console.log(palindrome('katak'));
