function perimeter(l, num){
    if( l == "c"){
        console.log("circle")
         // edabit expected 3.14 instead of Math.PI
        
        return 2 * 3.14 * num
                
        
        
    }else if (l == "s"){
        console.log("square")
        return num * 4
    }
    
}