twoSum = function(nums, target) {
    
    let originalIndex = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (originalIndex[nums[i]]) {
            originalIndex[nums[i]].push(i)
        } else {
            originalIndex[nums[i]] = [i];
        }       
    }
    
    let counter1 = {};
    let counter2 = {};
    
    let compare = (a,b) => {
        if (a < b) {
            return -1;
        } else if ( a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        }
    }
    
    let sortedArray = nums.sort(compare);
    
    let pointer1 = 0;
    let pointer2 = sortedArray.length - 1;
    
    let changed1 = true;
    let changed2 = true;

    while (pointer1 !== pointer2) {
        if (changed1) {
            counter1[sortedArray[pointer1]] = counter1[sortedArray[pointer1]] + 1 || 0;    
        }
        
        if (changed2) {
            counter2[sortedArray[pointer2]] = counter2[sortedArray[pointer1]] - 1 || originalIndex[sortedArray[pointer2]].length - 1;    
        }
        
        changed1 = false;
        changed2 = false;

        if (sortedArray[pointer1] + sortedArray[pointer2] < target) {
            pointer1++;
            changed1 = true;
        } else if (sortedArray[pointer1] + sortedArray[pointer2] > target) {
            pointer2--;
            changed2 = true;
        } else if (sortedArray[pointer1] + sortedArray[pointer2] === target) {
            return [originalIndex[sortedArray[pointer1]][counter1[sortedArray[pointer1]]], originalIndex[sortedArray[pointer2]][counter2[sortedArray[pointer2]]]];
        }
        
    }
    
}