//https://leetcode.com/problems/two-sum/
const twoSum = (nums,target) => {
    for(let i = 0 ; i < nums.length; i++){
        let mas = [];
        mas.push(i);
        sums = nums[i];
        for (let j = i+1 ; j < nums.length; j++){
            if (sums + nums[j] === target){
                mas.push(j);
                return mas;
            }
        }
    }
}
//Здраствуйте Андрей :)