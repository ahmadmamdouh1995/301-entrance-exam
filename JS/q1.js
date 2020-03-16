function greaterThan(array1,y){
    var array1 = [1,3,5,8,2,9];
    var y= 5;
    var numOfGreater = 0; 
    for (var i = 0 ; i< array1.length; i++){
        if (array1[i]>y){
            numOfGreater = numOfGreater + 1 ;
        }
        
        console.log(numOfGreater);
    }
    
}
greaterThan();

