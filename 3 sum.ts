function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    // 1. Sort the array to handle duplicates and use two pointers
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // 2. Skip the same element to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // 3. Skip duplicates for the left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                // Sum too small, move left pointer to increase sum
                left++;
            } else {
                // Sum too large, move right pointer to decrease sum
                right--;
            }
        }
    }

    return result;
}
