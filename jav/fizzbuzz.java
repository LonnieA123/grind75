package jav;

public class fizzbuzz {



    public static void fizzbuzzuzz(){

        for (int i = 0; i <= 100; i++){
            if(i % 3 == 0 && i % 5 == 0){
                System.out.println("Fizzbuzz");
            }
               else if(i % 3 == 0){
                System.out.println("Fizz");
            } else if (i % 5 == 0){
                System.out.println("Buzz");

            }
        }


    }

    public static void main(String[] args) {
        fizzbuzzuzz();
    }
}
