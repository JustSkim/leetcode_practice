from typing import List
'''
leetcode代码直接复制会报错
NameError: name 'List' is not defined
'''
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        lang = len(nums)
        if lang == 0:
            return 0
        if lang == 1:
            return nums[0]

        #递归计算左半边最大子序和
        max_left = self.maxSubArray(nums[0:len(nums) // 2])
        #递归计算右半边最大子序和
        max_right = self.maxSubArray(nums[len(nums) // 2:len(nums)])
        
        #计算中间的最大子序和，从右到左计算左边的最大子序和，从左到右计算右边的最大子序和，再相加
        max_l = nums[len(nums) // 2 - 1]
        tmp = 0
        for i in range(len(nums) // 2 - 1, -1, -1):
            tmp += nums[i]
            max_l = max(tmp, max_l)
        max_r = nums[len(nums) // 2]
        tmp = 0
        for i in range(len(nums) // 2, len(nums)):
            tmp += nums[i]
            max_r = max(tmp, max_r)
        #返回三个中的最大值
        return max(max_right,max_left,max_l+max_r)

A = Solution()
l1 = [0,4,2,4,-4,64,2,-54,23,5,-54,-9,3,43,5,0,0,-5,-7,78]

print(A.maxSubArray(l1))
