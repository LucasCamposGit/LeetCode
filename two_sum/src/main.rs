use std::collections::HashMap;

pub fn two_sum(nums: &[i32], target: i32) -> Vec<i32> {
    let mut numbers_hash: HashMap<i32, i32> = HashMap::new();
  
    for (i, num) in nums.iter().enumerate() {
        let difference = target - *num;
        if let Some(&j) = numbers_hash.get(&difference) {
            return vec![j, i as i32];
        }
        numbers_hash.insert(*num, i as i32);
    }

    vec![]
}

fn main() {
    let test_cases = vec![
        (vec![2, 7, 11, 15], 9, vec![0, 1]),
        (vec![-3, 4, 3, 90], 0, vec![0, 2]),
        (vec![1, 3, 2, 4], 6, vec![1, 3]),
        (vec![3, 3], 6, vec![0, 1]),
        (vec![1, 2, 3], 7, vec![]),
        ((1..=10_000).collect::<Vec<i32>>(), 19_999, vec![9998, 9999]),
        (vec![5, 75, 25, 75], 100, vec![1, 2]),
    ];

    for (nums, target, expected) in test_cases {
        let actual = two_sum(&nums, target);
        println!(
            "Input: nums = {:?}, target = {}\nExpected: {:?}, Actual: {:?}\n",
            nums, target, expected, actual
        );
    }
}

