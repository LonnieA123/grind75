package jav;
import java.util.Arrays;
//Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.

// You can return the answer in any order.

//Examples

//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Input: nums = [3,2,4], target = 6
// Output: [1,2]

//Input: nums = [3,3], target = 6
//int[] output = {0,1}




public class TwoSum {

    public static int[] tw0Sum(int[] nums, int target){

        int[] answer = new int[2];

        for(int i = 0; i < nums.length; i++){

                for (int j = 1; j < nums.length; j++){
                    if (nums[i] + nums[j] == target){
                        answer[0] = i;
                        answer[1] = j;
                    }
                }

        }

        return answer;


    }

    public static void main(String[] args) {

        int[] array = {2,7,11,15};
        int[] array2 = {3,3};
        int[] array3 = {3,2,4};

        System.out.println(Arrays.toString(tw0Sum(array, 9)));

    }
}
