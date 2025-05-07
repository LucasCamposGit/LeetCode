fn find_max_average(nums: Vec<i32>, k: i32) -> f64 {
    let mut window_sum: f64 = 0.0;
    let k = k as usize;

    for i in 0..k {
        window_sum = window_sum + nums[i] as f64;
    }

    let mut max_sum: f64 = window_sum;

    for i in k..nums.len() {
        window_sum = window_sum + (nums[i] - nums[i - k]) as f64;
        max_sum = max_sum.max(window_sum);
    }

    return max_sum / k as f64;
}

fn main() {
    // Test Case 1: Leetcode example
    let nums1 = vec![1, 12, -5, -6, 50, 3];
    let k1 = 4;
    let expected1 = 12.75000;
    let actual1 = find_max_average(nums1.clone(), k1);
    println!(
        "Test 1 | Input: {:?}, k = {} | Expected: {:.5} | Actual: {:.5}",
        nums1, k1, expected1, actual1
    );

    // Test Case 2: Single element
    let nums2 = vec![5];
    let k2 = 1;
    let expected2 = 5.00000;
    let actual2 = find_max_average(nums2.clone(), k2);
    println!(
        "Test 2 | Input: {:?}, k = {} | Expected: {:.5} | Actual: {:.5}",
        nums2, k2, expected2, actual2
    );

    // Test Case 3: All negative numbers
    let nums3 = vec![-10, -20, -30, -5, -15];
    let k3 = 2;
    let expected3 = -10.0000; // Max average is (-5 + -15)/2 = -10
    let actual3 = find_max_average(nums3.clone(), k3);
    println!(
        "Test 3 | Input: {:?}, k = {} | Expected: {:.5} | Actual: {:.5}",
        nums3, k3, expected3, actual3
    );

    // Test Case 4: Max average at the start
    let nums4 = vec![100, 1, 2, 3, 4, 5];
    let k4 = 1;
    let expected4 = 100.00000;
    let actual4 = find_max_average(nums4.clone(), k4);
    println!(
        "Test 4 | Input: {:?}, k = {} | Expected: {:.5} | Actual: {:.5}",
        nums4, k4, expected4, actual4
    );

    // Test Case 5: Large window (k = len(nums))
    let nums5 = vec![3, 3, 3, 3, 3];
    let k5 = 5;
    let expected5 = 3.00000;
    let actual5 = find_max_average(nums5.clone(), k5);
    println!(
        "Test 5 | Input: {:?}, k = {} | Expected: {:.5} | Actual: {:.5}",
        nums5, k5, expected5, actual5
    );
}
