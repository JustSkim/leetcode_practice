import java.io.*;
//这一行可以让我们导入同文件夹下的java包

public class Main {
     
    public static void main(String[] args) {

        int array[] = { 0, 1, 2, 3, 5, 9 };

        // 45题
        // Lt45 a = new Lt45();
        // int result = a.jump(array);
        // System.out.println(result);

        Lt46 a = new Lt46();
        System.out.println(a.permute(array));
        System.out.println(a.permute(array).size());//ArrayList类的长度要用size属性


    }
}