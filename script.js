function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return target;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
            closestSum = Math.abs(sum - target) < Math.abs(closestSum - target) ? sum : closestSum;
        }
    }
    return closestSum;
}
