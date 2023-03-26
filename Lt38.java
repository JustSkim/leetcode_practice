import java.util.*;
/*
 * List cannot be resolved to a type表示List不能被定义为一个类型
 * 这个错误要导入java.util.*包。
 */
import java.util.ArrayList;
//import resporsitory.commons-lang3-3.12.0;
//import org.apache.commons.*;

//引用动态数组的库 

public class Lt38{
    public String countAndSay(int n) {
        if (n == 1)
            return "1";
        if (n == 2)
            return "11";
        
        return finalStep(n);
    }

    //要使用递归的方法，返回长度不是固定的数组，只有到了最后一步，才将数组转为字符串以节省时间
    //从n=2开始，数组长度都必定是复数，其中奇数位i代表偶数位j上数值的个数
    String finalStep(int n) {

        List<Integer> result = recursion(n);
        int lang = result.size();
        String result_str = "";
        
        for(int i=0; i<lang; i++){ 
            result_str += (result.get(i)).toString();
        }
        return result_str;

        // String listString = StringUtils.join(list, "");//String.join("", recursion(n));
        // return listString;
        // return (recursion(n)).toString();//对得到的动态数组结果进行处理
    }

    List<Integer> recursion(int n){
        if(n == 3){
            List<Integer> list = new ArrayList<>();
            //先添加的会在前面
            list.add(2);
            list.add(1);
            return list;
        }
        return describe(recursion(n-1));
    }

    List<Integer> describe(List<Integer> arr) {
        int lang = arr.size();//动态数组的长度要用size而不是length
        int count = 0;
        
        //用于储存新的数字的数组，长度无法固定，因此必须选择动态数组的形式
        //java中的数组的定义就是相同类型,固定长度的一组数据,一旦被初始化,长度不可更改。
        //Integer为整型的包装类型
        List<Integer> list = new ArrayList<Integer>();

        int  temp  =  0, i =0 ;
        while(i < lang){
            temp = arr.get(i); //获取序号为i的元素
            count = 1;
                

            //判断长度的条件要放在前面防止溢出
            while( i < lang-1 && temp == arr.get(i+1) ){
              i++;  
              count++;
            } 
            
            //将描述的数字和该数字先后放入数组中
            list.add(count);
            list.add(temp);
                
            i = i+1;
        }

        return list;
    }

}