var climbStairs = function(n) {
    
    const options = [1, 2];
    
    let count = 0;
        
    const helper = (remaining) => {
        if (remaining === 0) {
            count++;
            return;
        }
        
        for (let i = 0; i < options.length; i++) {
            if (remaining - options[i] >= 0) {
                helper(remaining - options[i]);
            }
        }
    }
    
    helper(n);
    
    return count;
};