function timeForMilkAndCookies(date) {
    let dateString =`${date}`
    let dateArray = dateString.split(" ")
    console.log(dateArray)
    if(dateArray[1] == "Dec" && dateArray[2] == "24"){
        return true
    }else{
        return false
    }
    
}