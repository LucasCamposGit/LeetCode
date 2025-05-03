fn max_area(height: &[i32]) -> i64 {
    let mut left: usize = 0;
    let mut right: usize = height.len() - 1;
    let mut res = 0i64;

    while left < right {
        let x = (right - left) as i64;
        let y = height[left].min(height[right]) as i64;
        
        let area = x * y;
        res = res.max(area);

        if height[left] > height[right] {
            right -= 1;
        } else {
            left += 1;
        }
    }

    res

}

fn main() {
    let test_cases = vec![
        (vec![1,8,6,2,5,4,8,3,7], 49),
        (vec![1,1], 1),
        (vec![5,5,5,5,5], 20),
        (vec![1,2,3,4,5], 6),
        (vec![5,4,3,2,1], 6),
        (vec![10000, 1, 10000], 20000),
        (vec![0,2,0,4], 4),
    ];

    for (height, expected) in test_cases {
        let actual = max_area(&height);
        println!(
            "Input: height = {:?}\nExpected: {}, Actual: {}\n",
            &height[..height.len().min(10)], // truncate print for large inputs
            expected,
            actual
        );
        assert_eq!(actual, expected);
    }
}
