function oddishOrEvenish(num) {
    let stringNum = String(num)
    let total = 0	
    for(let i= 0; i< stringNum.length; i++ ){
        total += Number(stringNum[i])
    }
    return total % 2 == 0 ? "Evenish" : "Oddish"
}