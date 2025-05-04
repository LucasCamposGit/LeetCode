# LeetCode Solutions in Rust

This repository contains my solutions to various LeetCode coding challenges implemented in the Rust programming language.

## Project Structure

Each challenge has its own directory containing:
- A Rust project with solution code
- Tests to verify the solution

## Current Solutions

- Two Sum
- Move Zeroes
- Max Area (Container With Most Water)

## How to Run

Each challenge is implemented as a separate Rust project. To run any challenge:

1. Navigate to the challenge directory:
   ```
   cd [challenge_name]
   ```
   
   For example:
   ```
   cd two_sum
   ```

2. Run the project using Cargo:
   ```
   cargo run
   ```

3. To run with release optimizations:
   ```
   cargo run --release
   ```

4. To run tests (if implemented):
   ```
   cargo test
   ```

## Viewing Solutions

Each solution is contained in its respective directory's `src/main.rs` file. The implementations typically include:

- The solution function(s)
- Example test cases
- Time and space complexity analysis (in comments)
- A main function that demonstrates the solution with example inputs

## Other Implementations

There is also a branch with TypeScript solutions to the same problems. You can check them out by switching to the TypeScript branch.

## Purpose

This project serves as:
- A way to practice algorithmic problem-solving
- A learning exercise for Rust programming
- A reference for different approaches to common coding challenges

Feel free to explore the solutions and compare different implementations!