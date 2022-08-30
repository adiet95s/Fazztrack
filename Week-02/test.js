function pass(data){
    let acak = ''
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    let code = []
    for(i=0; i<=data.length-1; i++){
        acak = Math.floor((Math.random() * 25) + 1);
        result += abjad[acak]
        code.push(acak)
        acak = ''
    }
    
    return result
}

console.log(pass('aDiEt'));