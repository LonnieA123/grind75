package jav;

import java.util.Arrays;
import java.util.Objects;

public class Palindrome {

    public static Boolean isPalindrome2(String input){
        String rev = new StringBuilder(input).reverse().toString();
        return input.equalsIgnoreCase(rev);
    }

    public static Boolean isPalindrome(String input){
        String[] arr = input.split("");
        String[] rev = new String[input.length()];
        int j = 0;

        for (int i = 0; i <= input.length() - 1 ; i++){
            rev[j] = arr[i];
            j++;
        }

        String revString = String.join("",rev);

        return input.equals(revString);

    }


    public static void main(String[] args) {

        System.out.println(isPalindrome("raceCar"));
    }
}
