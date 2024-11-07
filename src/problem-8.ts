


const validateKeys = <T extends object>(obj: T, keys: (keyof T)[])=> {
    //  console.log(obj)
    for(const key of keys){
       if(!(key in obj)){
        return false
       }
       else{
        return true
       }

    }
}

