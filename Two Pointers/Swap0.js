//https://leetcode.com/problems/move-zeroes/submissions/1967951791/

const swapPos = function(nums,l,r) {
    let x = nums[r];
    nums[r] = nums[l];
    nums[l] = x;
}

const moveZeroes = function(nums) {
    let l = 0;
    let r = 0;
    if (nums.length === 1) {
        return nums;
    }
    while (r < nums.length && l < nums.length) {
        if(nums[r] === 0){
            r++;
        }
        else{
            if(nums[l] !== 0){
                l++;
            }
            else{
                if(r > l){
                    swapPos(nums, l,r);
                }
                else{
                    r++
                }
            }
        }
    }
    return nums;
};
console.log(moveZeroes([0]));