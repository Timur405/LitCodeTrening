//https://leetcode.com/problems/two-sum/
const twoSum = (nums,target) => {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for(let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] && map[target - nums[i]] !== i ){
            return [i, map[target - nums[i]]];
        }
    }
    return false;

}

//Здраствуйте Андрей :)
/*
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
*/