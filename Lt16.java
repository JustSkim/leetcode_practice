import java.util.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class Lt16 {
    //注意，本题找的是数组中任意三数之和与目标target值最接近的一个，不一定相等，因此要定义变量储存当前最相近的值
    public int threeSumClosest(int[] nums, int target) {
        if (nums.length == 3) {
            return nums[0] + nums[1] + nums[2];
        }
        //Java 运算中，整数型相除会取商
        int oneThird = 0;
        if(target !=0 ){
            oneThird = target / 3;
        }
        //对数组进行从小到大的排序
        Arrays.sort(nums);

        int lang = nums.length;
        int p = 0, q = 1, r = 2;//初始时候直接设定前三个 
        for (int i = 1; i < lang; i++) {
            if(nums[i] == oneThird ){
                p = i - 1;
                //确定左边的一个指针
                q = i;
                r = q + 1;
                break;
            }else if(nums[i] < oneThird){     //这 种况下，nums[i-1=p]<oneh ird
                p = i - 1;
                q = i; 
                r = i + 1;
                break;
            }else{}  
            
        }


        /*
         * 算法核心思想：
         * 指针p始终在q左边，指针r始终在q右边
         * 对nums进行排序后，至少有1个指针，会在nums[0]到1/3 target的位置
         * 同样至少有1个指针，会在nums[lang-1]到 1/3 target的位置
         * 所以先划定1/3 target的界限
         * 所以作四个数组
         * a:0 到 1/3 target处的元素
         * b:1/3 target 到 lang-1 的元素
         * a2:0 到 1/3 target处的元素两两相加
         * b2:1/3 target 到 lang-1 的元素两两相加
         * 上面四个数组都按序号排列，然后从a和b2，b和a2中找到两个元素+一个元素模式的最接近于target值的解
         * 
         */
        int[] a = Arrays.copyOfRange(nums,  0, p);
        int[] b = Arrays.copyOfRange(nums, q, lang - 1);
        List<Integer> a2 = new ArrayList<>(),
                      b2 = new ArrayList<>(),
                      a_b2 = new ArrayList<>(),
                      b_a2 = new ArrayList<>();
        int lang_a = a.length, lang_b = b.length;
        for(int i = 0; i < lang_a-1; i++){
            for(int j = 1; j < lang_a; j++){
                if(i != j){
                    a2.add(a[i]+a[j]);
                }
            }
        }
        for(int i = 0; i < lang_b-1 ; i++){
            for(int j = 1; j < lang_b; j++){
                if(i != j){
                    b2.add(b[i]+b[j]);
                    
                }
            }
        }
        
        //这样子，就把三数之和变成求与target最相近的两数之和
        int size_a2 = a2.size(), size_b2 = b2.size();
        for(int i = 0; i<lang_a; i++){
            for(int j = 0; j<size_b2; j++){
                a_b2.add(a[i]+b2.get(j));
            }
        } 
        for(int i = 0; i<lang_b; i++){
            for(int j = 0; j<size_a2; j++){
                b_a2.add(b[i]+a2.get(j));
            }
        }
        Collections.sort(a_b2);
        Collections.sort(b_a2);

        int size_a_b2 = a_b2.size(), size_b_a2 = b_a2.size();
        int temp = a_b2.get(0), temp_distance = Math.abs(temp-target), sum=0;
        for (int i = 0; i < size_a_b2; i++) {
            sum = a_b2.get(i);
            if (lessDistance(target, sum, temp_distance)) {
                temp = sum;
                temp_distance = Math.abs(temp - target);
            }
        }
        for(int i = 0; i<size_b_a2;i++){
            sum = b_a2.get(i);
            if(lessDistance(target, sum, temp_distance)){
                temp = sum;
                temp_distance = Math.abs(temp-target);
            }
        }
        
        return temp;
    }

    //新的三数之和是否相差更小
    boolean lessDistance(int target, int sum, int distance){
        if(Math.abs(sum-target) < distance) return true;
        else return false;
    }
}