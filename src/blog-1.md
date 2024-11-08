## __The significance of union and intersection types in Typescript.__

***

### Union Type

 ***

Union Type is Mainly works like logical "OR" operation.

__Example__

``` type FrontEndDeveloper ="Junior Developer" | "Mid Level Developer" ```

here i write string as the types value whats way it is called __string literal type__ .


```const newDeveloper:FrontEndDeveloper="Junior Developer"```

if i set ```FrontEndDeveloper``` as a type of ```newDeveloper``` then i chose Junior Developer or Mid Level developer.

__Another Example__

``` 
type User={
    name:string;
    email:?:string;
    gender:"male"|"female";
    bloodGroup:"O+"|"A+"|"AB+";
}; 

const user1:User={
    name:"Humayun",
    gender:"male",
    bloodGroup:"O+"
};
```

Here i set ```gender``` type it has two value one is male and another is female . ```bloodGroup``` type has 3 value first is O+ , second is A+ and third is AB+ .

When I use `User` as the type for `user1`, I set the `gender` and `bloodGroup` values according to my choice.

Lastly ,``` union type``` has more value we can chose one or any value , is it right its will be true .

### Intersection Type

 ***

 Intersection Type is Mainly works like logical "AND" operation.

 __Example__

 ```
type FrontendDeveloper={
    skills:string[];
    designation1:"Frontend Developer";
}

type BackendDeveloper={
    skills:string[];
    designation2:"Backend Developer";
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackdeveloper:FullstackDeveloper={
    skills:['React','Firebase'],
    designation1:"Frontend Developer";
    designation2:"Backend Developer";
}
 ```

 Here i set ```FrontendDeveloper``` type it has 2 properties one is ```skills``` that is an array and another is ```designation1``` thats value is ```Frontend Developer``` .

 Another One type is ```BackendDeveloper``` it has 2 properties one is ```skills``` that is an array and another is ```designation2``` thats value is ```Backend Developer``` .

 After doint that i create a type name ```FullstackDeveloper``` that constraints ```FrontendDeveloper``` and ```BackendDeveloper```.

 when i set ```FullstackDeveloper``` as type of ```fullStackdeveloper``` there are required 3 fields in these object. 

first, the ```skills``` array is a comomon property both ```FrontendDeveloper``` and ```BackendDeveloper``` . the second field ```designation1``` come from  ```FrontendDeveloper``` and the third field ```designation2``` come from ```BackendDeveloper``` .

Lastly, I can say that in an ```intersection type```, we cannot choose one or any value. If all the fields are completed and their values are correct, then the ```intersection type``` will be true.

