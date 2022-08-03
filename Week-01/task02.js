function grade(data){
    let temp = 0
    let hasil = 0
    for (let i=0; i<=data.length-1; i++){
        temp += data[i]
    }
    hasil = temp / data.length
   if (hasil >= 90 && hasil <= 100){
    return 'A'
   } else if (hasil >= 80 && hasil <= 89 ){
    return 'B'
   } else if (hasil >= 70 && hasil <= 79 ){
    return 'C'
   } else if (hasil >= 60 && hasil <= 69 ){
    return 'D'
   } else if (hasil >= 0 && hasil <= 59 ){
    return 'E'
   }
}

console.log(grade([88,81,83,83,85]));