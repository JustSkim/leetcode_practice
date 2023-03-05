import java.util.*;
//*的意思是按需类型导入，
//比如import java. util.∗，可能看到后面的 ∗，程序员会以为是导入java. util包下的所有类
//其实并不是这样，Java会根据名字知道是按照需求导入，并不是导入整个包下的所有类
//我们这里只导入 list和ArrayList即可

class Lt46 {
    List<List<Integer>> ans = new ArrayList<>(); //保存最终答案——一个二维数组
    //这里要使用ArrayList类创建动态数组

    boolean[] v;    //表示数组元素是否用过
    public List<List<Integer>> permute(int[] nums) {
        v = new boolean[nums.length];
        dfs(nums, 0, new ArrayList<>());
        return ans;
    }
    void dfs(int[] nums, int i, List<Integer> t) {
        if(i == nums.length) {      //如果已经填完数组中所有数
            ans.add(new ArrayList<>(t));    
            return;
        }
        for(int j = 0; j < nums.length; j++) {  //开始遍历数组，找到第一个还没有别用过的数
            if(!v[j]) {     //如果没有被用过
                t.add(nums[j]); //将该数加入集合中
                v[j] = true;    //将该数置为用过
                dfs(nums, i + 1, t);    //继续下一次搜索，找到下一个没用过的数，填入临时结果
                v[j] = false;   //回溯，表示该数没用过
                t.remove(i);    //回溯，在临时结果删除该数
            }
        }
    }
}
