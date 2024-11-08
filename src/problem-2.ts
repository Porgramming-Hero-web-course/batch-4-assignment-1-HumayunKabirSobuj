const removeDuplicates =(array:number[])=>{
    const arr = array.filter((number,index,self)=>{
        return self.indexOf(number)===index;
    })
    return arr;
}
