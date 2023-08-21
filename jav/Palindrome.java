package jav;

import java.util.Arrays;
import java.util.Objects;

public class Palindrome {

    public static Boolean isPalindrome(String input){
        String rev = new StringBuilder(input).reverse().toString();
        return input.equalsIgnoreCase(rev);
    }

    public static boolean plaindromty(String input){
        String[] arr = input.split("");
        String[] rev = new String[input.length()];
        int j = 0;

        for (int i = input.length() - 1; i >= 0; i--){
            rev[j] = arr[i];
            j++;
        }


        String revStr = String.join("", rev);
        return input.equalsIgnoreCase(revStr);

    }


    public static void main(String[] args) {

        System.out.println(plaindromty("raceCar"));
    }
}
