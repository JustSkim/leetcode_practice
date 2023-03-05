public class Main {
    public static void main(String[] args){
        Solution a = new Solution();
        int array[] = {5,9,3,2,1,0,2,3,3,1,0,0};
        int result = a.jump(array);
        System.out.println(result);
    }
    
}
class Solution {
    public int jump(int[] nums) {
        int lang = nums.length;
        if(lang==1){
            return 0;
        }
        int count = 0;
        int i = 0;
        while(i<lang){
            int temp = nums[i];
            if(i+temp>=lang-1){
                return count+1;
            }
            //最大值就是其序数加上其值
            int biggest = (i+temp)+nums[i+temp];
            int biggest_index = i+temp;
            for(int j = i+temp-1;  j>i; j--){
                if(nums[j]+j > biggest){
                    biggest = j+nums[j];
                    biggest_index = j;
                }
            }
            i = biggest_index;
            count++;
        }
        return count;
    }
}