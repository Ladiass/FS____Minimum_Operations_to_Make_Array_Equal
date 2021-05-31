let minOperations = n =>{
    let center = n/2;
    if(n%2==0) { 
        return parseInt( (center*center))
    }else{
        return parseInt((center * ( center)))
    }
}
console.log(minOperations(6))

// https://leetcode.com/problems/minimum-operations-to-make-array-equal/