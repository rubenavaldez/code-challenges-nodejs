function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
    if(isbn.length != 10){
    
      return false 
    
    }
    let total = 0
    for(let i= 0; i<isbn.length ; i++){
          
        if (isbn[i] == "X"){
          
          if(i == isbn.length -1 ){
            
          total += ( 10 * (i + 1) )
          console.log("X", i+1 , ( 10 * (i + 1) ))
          }else {
            return false
          }
          
        }else{
          
        total += ( parseInt(isbn[i]) * (i + 1) )
        
          console.log("Num",parseInt(isbn[i]) , i+1 ,  ( parseInt(isbn[i]) * (i + 1) ) )
        }
      
    }
    console.log("result" , total , total % 11 == 0)      
  return total % 11 == 0
}