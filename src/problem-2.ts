const removeDuplicates =(array:number[])=>{
    const arr = array.filter((number,index,self)=>{
        return self.indexOf(number)===index;
    })
    return arr;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))