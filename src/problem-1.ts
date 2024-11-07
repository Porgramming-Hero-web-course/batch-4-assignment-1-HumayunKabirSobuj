const sumArray=(array:number[])=>{
    const sum=array.reduce((acc, num)=>acc+num,0);
    return sum;
}