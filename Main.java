import java.io.*;
//这一行可以让我们导入同文件夹下的java包，当然也是按需导入，不会导入全部

public class Main {
     
    public static void main(String[] args) {

        //int array[] = { 0, 1, 2, 3, 5, 9 };

        // 45题
        // Lt45 a = new Lt45();
        // int result = a.jump(array);
        // System.out.println(result);

        //46题
        // Lt46 a = new Lt46();
        // System.out.println(a.permute(array));
        // System.out.println(a.permute(array).size());//ArrayList类的长度要用size属性

        //38题
        int n = 5;
        Lt38 a = new Lt38();
        String result = a.countAndSay(n);
        System.out.println(result);

        //16题
        // int array[] = {1,1,1,1};
        // int n = 0;
        // Lt16 a = new Lt16();
        // int result = a.threeSumClosest(array, n);
        // System.out.println(result);

    }
}