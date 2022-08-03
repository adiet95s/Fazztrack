function reverse(data){
    if(typeof data == 'string'){
        let arr = []
        let str = ''
        let hasil = ''
    
        for(i=0; i<=data.length-1; i++){        
            str += data[i]
            if(data[i] == ' '){
                arr.push(str)
                str =''
            } else if (i == data.length-1){
                arr.push(str + ' ')
            }
        }
        for(i=arr.length-1; i>=0; i--){
            hasil += arr[i]
        }
        return hasil
    } else {
        return 'Input Tipe Data Salah !!'
    }
    
}

console.log(reverse('Saya belajar Javascript'));