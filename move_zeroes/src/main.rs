fn move_zeroes(nums: &mut [i32]) {
    
    let mut k: usize = 0;

    for i in 0..nums.len() {
        if nums[i] != 0 {
            if k != i {
                let dummy = nums[k];
                nums[k] = nums[i];
                nums[i] = dummy;
            }
            k += 1;
        }
    }
}

fn main() {
    let mut test_cases = vec![
        (vec![0, 1, 0, 3, 12], vec![1, 3, 12, 0, 0]),
        (vec![0, 0, 0], vec![0, 0, 0]),
        (vec![1, 2, 3], vec![1, 2, 3]),
        (vec![0], vec![0]),
        (vec![1], vec![1]),
        (vec![0, 0, 1, 2], vec![1, 2, 0, 0]),
        (vec![1, 2, 3, 0, 0], vec![1, 2, 3, 0, 0])
    ]; 

    for (nums, expected) in &mut test_cases {
        println!("Input: nums = {:?}, expected output: {:?}", nums, expected);    
        move_zeroes(nums);
        println!("Actual output: {:?}", nums);
    } 
}
