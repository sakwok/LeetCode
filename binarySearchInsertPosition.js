var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1;
    let midpoint;
    let midValue;
    while (start <= end){
        midpoint = Math.floor((end + start)/ 2);
        midValue = nums[midpoint];
        
        if (midValue === target) {
            return midpoint;
        } else if (midValue > target) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
        
    }
    return start;
};