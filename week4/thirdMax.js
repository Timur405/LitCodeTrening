const thirdMax = function(nums) {
    nums.sort((a, b) => a - b);
    if(nums.length === 1){
        return nums[0];
    }
    if(nums.length === 2){
        return nums[1];
    }
    let l = nums.length - 1;
    let FirstMax = nums[l];
    let SecondMax = undefined;
    let ThirdMax = undefined;
    while(l >= 0){
        if(nums[l] === FirstMax){
            l--;
        }
        else{
            if(SecondMax === undefined) {
                SecondMax = nums[l];
                l--;
            }
            else{
                if(nums[l] === SecondMax){
                    l--;
                }
                else{
                    return nums[l];
                }
            }
        }
    }
    if (ThirdMax !== undefined) {
        return ThirdMax;
    } else {
        return FirstMax;
    }
};
console.log(thirdMax([3,2,1]))