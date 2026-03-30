//https://leetcode.com/problems/merge-sorted-array/submissions/1957946082/
const merge = function(nums1, m, nums2, n) {
    nums3 =[];
    for (let i = 0; i < m; i++) {
        nums3.push(nums1[i]);
    }
    let j = nums3.length-1;
    while (nums3[j] === 0) {
        nums3.pop();
        j--;
    }

    for(let i = 0; i < n;i++){
        nums3.push(nums2[i]);
    }
    nums3.sort((a, b) => a - b);
    for(let i = 0; i < nums3.length; i++){
        nums1[i] = nums3[i];
    }
    return nums1;
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));